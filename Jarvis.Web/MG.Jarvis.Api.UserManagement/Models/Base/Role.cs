﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.UserManagement.Models.Base
{
    public class Role : BaseModelWithActive
    {
        [Required]
        public string Name { get; set; }

        public string Description { get; set; }

        [Required]
        public virtual List<Guid> ApplicationList { get; set; }
    }
}