using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.UserManagement.Models.Base
{
    public class User : BaseModel
    {
        private DateTime activationDate;
        private DateTime? deActivationDate;
        private DateTime? temporaryInActivationDate;
        private DateTime? temporaryActivationDate;

        public User()
        {
           
        }

        /// <summary>
        /// User First name
        /// </summary>
        public string FirstName { get; set; }

        /// <summary>
        /// User Last Name
        /// </summary>
        public string LastName { get; set; }
        
        /// <summary>
        /// Http Url for Profile picture.
        /// </summary>
        public string ProfilePictureUri { get; set; }
        
        /// <summary>
        /// User Login Username. ALFA-NUMERIC. 1 LETTER CAPITAL . 1 SPECIAL CHARACTER.
        /// </summary>
        public string UserName { get; set; }
        
        /// <summary>
        /// User email Address
        /// </summary>
        public string Email { get; set; }
        
       
        
        /// <summary>
        /// User Activation Date.
        /// </summary>
        public DateTime ActivationDate {
            get
            {
                return activationDate.ToUniversalTime().AddHours(7);
            }
            set
            {
                activationDate = value;
            }
        }
        
        /// <summary>
        /// User De-Activation Date.
        /// </summary>
        public DateTime? DeActivationDate
        {
            get
            {
                return (deActivationDate.HasValue)? deActivationDate.Value.ToUniversalTime().AddHours(7): deActivationDate;
            }
            set
            {
                deActivationDate = value;
            }
        }
        /// <summary>
        /// InActivationType
        /// </summary>
        public string InActivationType { get; set; }
        /// <summary>
        /// TemporaryInActivationDate
        /// </summary>
        public DateTime? TemporaryInActivationDate
        {
            get
            {
                return (temporaryInActivationDate.HasValue) ? temporaryInActivationDate.Value.ToUniversalTime().AddHours(7) : temporaryInActivationDate;
            }
            set
            {
                temporaryInActivationDate = value;
            }
        }

        /// <summary>
        /// TemporaryActivationDate
        /// </summary>
        public DateTime? TemporaryActivationDate
        {
            get
            {
                return (temporaryActivationDate.HasValue) ? temporaryActivationDate.Value.ToUniversalTime().AddHours(7) : temporaryActivationDate;
            }
            set
            {
                temporaryActivationDate = value;
            }
        }
    }
}

