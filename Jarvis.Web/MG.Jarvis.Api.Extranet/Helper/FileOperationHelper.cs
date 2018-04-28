using MG.Jarvis.Api.Extranet.ViewModel;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.Extranet.Helper
{
    public class FileOperationHelper
    {
        private IConfiguration iconfiguration;
        private string DocumentStorePath { get; set; }
        public FileOperationHelper(IConfiguration iconfiguration)
        {
            this.iconfiguration = iconfiguration;
            InitializeFromAppSettings();
        }
        private void InitializeFromAppSettings()
        {
            var settings = iconfiguration.GetSection(Constants.DocumentsStoreSettingsSection);
            if (settings != null)
            {
                DocumentStorePath = settings.GetValue<string>(Constants.DocumentStorePathSection);
            }
        }
        public async Task<string> UploadContract(UploadViewModel request)
        {
            var bytes = request.Bytes.ToArray();
            var mainDirectory = Path.Combine(Constants.DocumentBaseDirectory);
            if (!Directory.Exists(Path.Combine(DocumentStorePath, mainDirectory)))
            {
                Directory.CreateDirectory(Path.Combine(DocumentStorePath, mainDirectory));
            }
            var hotelDirectory = Path.Combine(mainDirectory, request.HotelCode);
            if (!Directory.Exists(Path.Combine(DocumentStorePath, hotelDirectory)))
            {
                Directory.CreateDirectory(Path.Combine(DocumentStorePath, hotelDirectory));
            }
            var contractDirectory = Path.Combine(hotelDirectory, Constants.DocumentContractsDirectory);
            if (!Directory.Exists(Path.Combine(DocumentStorePath, contractDirectory)))
            {
                Directory.CreateDirectory(Path.Combine(DocumentStorePath, contractDirectory));
            }
            var rand = new Random((int)(DateTime.UtcNow - DateTime.MinValue).TotalSeconds);
            var fileToUpload = Path.Combine(contractDirectory, rand.Next() + Constants.FileExtensions.GetFileExtentions(request.Extension.Value));
            using (var fileStream = new FileStream(Path.Combine(DocumentStorePath, fileToUpload), FileMode.OpenOrCreate))
            {
                fileStream.Flush();
                await fileStream.WriteAsync(bytes, 0, bytes.Length).ConfigureAwait(false);
            }
            return fileToUpload;
        }
        public async Task<byte[]> GetDocumentByPath(string path)
        {
            return await File.ReadAllBytesAsync(DocumentStorePath + path).ConfigureAwait(false);
        }
    }
}
