using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.UserManagement.Models.Base
{
    public abstract class BaseModel
    {
       
        [Required]
        public string CreatedBy { get; set; }

        [Required]
        public string UpdatedBy { get; set; }

        internal DateTime CreatedDate
        {
            get
            {
                return DateTime.Now.ToUniversalTime().AddHours(7);
            }
            set { }
        }

        internal DateTime UpdatedDate
        {
            get
            {
                return DateTime.Now.ToUniversalTime().AddHours(7);
            }
            set { }
        }


    }


    public abstract class BaseModelWithActive : BaseModel
    {
        [Required]
        public bool IsActive { get; set; }
    }


}
