using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using static MG.Jarvis.Api.Extranet.Helper.Enums;

namespace MG.Jarvis.Api.Extranet.ViewModel
{
    public class UploadViewModel
    {
        public UploadViewModel()
        {
            Bytes = new List<byte>();
        }
        [Required]
        public List<byte> Bytes { get;}
        [Required]
        public string HotelCode { get; set; }
        [Required]
        public FileExtension? Extension { get; set; }
    }
}
