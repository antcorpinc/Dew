using Microsoft.Extensions.Configuration;
using SharpCifs.Smb;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using static MG.Jarvis.Api.Extranet.Helper.Enums;

namespace MG.Jarvis.Api.Extranet.Helper
{
    /// <summary>
    /// refer: http://sharpcifsstd.dobes.jp/
    /// </summary>
    public class SmbFileOperationHelper
    {
        private IConfiguration iconfiguration;
        private string DocumentStorePath { get; set; }
        private string User { get; set; }
        private string Password { get; set; }
        private string Domain { get; set; }
        private NtlmPasswordAuthentication authenticationObject;
        public SmbFileOperationHelper(IConfiguration iconfiguration)
        {
            this.iconfiguration = iconfiguration;
            InitializeFromAppSettings();
            authenticationObject = new NtlmPasswordAuthentication(Domain, User, Password);

        }
        private void InitializeFromAppSettings()
        {
            var settings = iconfiguration.GetSection(Constants.DocumentsStoreSettingsSection);
            if (settings != null)
            {
                DocumentStorePath= settings.GetValue<string>(Constants.DocumentStorePathSection);
                User = settings.GetValue<string>(Constants.UserSection);
                Password = settings.GetValue<string>(Constants.PasswordSection);
                Domain = settings.GetValue<string>(Constants.DomainSection);
            }
        }
        public void CreateFolder(string folderName,bool isOverWrite=false)
        {
            var smbShareFolder = new SmbFile(Path.Combine(DocumentStorePath, folderName), authenticationObject);
            if (isOverWrite && smbShareFolder.Exists())
            {
                smbShareFolder.Delete();
            }
            if(!isOverWrite && smbShareFolder.Exists())
            {
                return;
            }
            smbShareFolder.Mkdir();
        }
        public void CreateFile(string fileName, FileExtension extention, byte[] bytes,bool isOverWrite = false)
        {
            var extentionString = Constants.FileExtensions.GetFileExtentions(extention);
            var smbShareFile = new SmbFile(Path.Combine(DocumentStorePath, fileName + extentionString), authenticationObject);
            if (isOverWrite && smbShareFile.Exists())// a and b
            {
                smbShareFile.Delete();
                smbShareFile.CreateNewFile();
            }
            else if (!smbShareFile.Exists()) // !b << (a or !a) and !b << (a and !b) or (!a and !b)
            {
                smbShareFile.CreateNewFile();
            }
            //else
            //{
            //    return;
            //}
            using (var streamOut = smbShareFile.GetOutputStream())
            {
                ((Stream)streamOut).Write(bytes, 0, bytes.Length);
            }
        }
        public byte[] GetFile(string fileNameWithExtention)
        {
            var smbShareFile = new SmbFile(Path.Combine(DocumentStorePath, fileNameWithExtention), authenticationObject);
            if (!smbShareFile.Exists())
            {
                return null;
            }
            using (var streamIn = smbShareFile.GetInputStream())
            {
                var memoryStream = new MemoryStream();
                ((Stream)streamIn).CopyTo(memoryStream);
                return memoryStream.ToArray();
            }
        }
    }
}
