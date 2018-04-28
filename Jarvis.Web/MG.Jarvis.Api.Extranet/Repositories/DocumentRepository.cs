using MG.Jarvis.Api.Extranet.Helper;
using MG.Jarvis.Api.Extranet.Interfaces;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MG.Jarvis.Api.Extranet.ViewModel;
using MG.Jarvis.Core.Model;
using System.IO;
using System.Net.Http;
using System.Globalization;

namespace MG.Jarvis.Api.Extranet.Repositories
{
    public class DocumentRepository:IDocument
    {
        private FileOperationHelper fileOperationHelper;
        private SmbFileOperationHelper smbFileOperationHelper;
        public DocumentRepository(FileOperationHelper fileOperationHelper, SmbFileOperationHelper smbFileOperationHelper)
        {
            this.fileOperationHelper = fileOperationHelper;
            this.smbFileOperationHelper = smbFileOperationHelper;
        }
        public async Task<BaseResult<string>> UploadContract(UploadViewModel request)
        {

            try
            {
                if (Environment.OSVersion.Platform!=PlatformID.Unix)
                {
                    return new BaseResult<string>() { Result = await fileOperationHelper.UploadContract(request).ConfigureAwait(false) };
                }
                else
                {
                    var baseDir = Path.Combine(Constants.DocumentBaseDirectory);
                    smbFileOperationHelper.CreateFolder(baseDir);
                    var hotelDir = Path.Combine(baseDir, request.HotelCode);
                    smbFileOperationHelper.CreateFolder(hotelDir);
                    var contractsDir = Path.Combine(hotelDir, Constants.DocumentContractsDirectory);
                    smbFileOperationHelper.CreateFolder(contractsDir);
                    var rand = new Random();
                    var fileToUpload = Path.Combine(contractsDir, rand.Next().ToString(CultureInfo.InvariantCulture));
                    smbFileOperationHelper.CreateFile(fileToUpload, request.Extension.Value, request.Bytes.ToArray(),true);
                    return new BaseResult<string>() { Result = fileToUpload+Constants.FileExtensions.GetFileExtentions(request.Extension.Value) };
                }
            }
            catch(Exception e)
            {
                return new BaseResult<string>() {IsError=true,ExceptionMessage=e };
            }
        }

        public async Task<BaseResult<string>> UploadPhoto(UploadViewModel request)
        {

            try
            {
                var baseDir = Path.Combine(Constants.DocumentBaseDirectory);
                smbFileOperationHelper.CreateFolder(baseDir);
                var hotelDir = Path.Combine(baseDir, request.HotelCode);
                smbFileOperationHelper.CreateFolder(hotelDir);
                var photosDir = Path.Combine(hotelDir, Constants.DocumentPhotosDirectory);
                smbFileOperationHelper.CreateFolder(photosDir);
                var rand = new Random();
                var fileToUpload = Path.Combine(photosDir, rand.Next().ToString(CultureInfo.InvariantCulture));
                smbFileOperationHelper.CreateFile(fileToUpload, request.Extension.Value, request.Bytes.ToArray(), true);
                return new BaseResult<string>() { Result = fileToUpload + Constants.FileExtensions.GetFileExtentions(request.Extension.Value) };
            }
            catch (Exception e)
            {
                return new BaseResult<string>() { IsError = true, ExceptionMessage = e };
            }
        }
        public async Task<BaseResult<byte[]>> GetDocumentByPath(string path)
        {
            byte[] input=null;
            try
            {
                if (Environment.OSVersion.Platform != PlatformID.Unix)
                {
                    input = await fileOperationHelper.GetDocumentByPath(path).ConfigureAwait(false);
                }
                else
                {
                    input = smbFileOperationHelper.GetFile(path);
                }
                return new BaseResult<byte[]>() { Result= input };
            }
            catch(Exception e)
            {
                return new BaseResult<byte[]>() { IsError = true, ExceptionMessage = e };
            }
        }
    }
}
