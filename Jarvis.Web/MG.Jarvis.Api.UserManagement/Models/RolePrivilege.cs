﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.UserManagement.Models
{
    public class RolePrivilege
    {
        public int FeatureTypeId { get; set; }
        public string FeatureTypeName { get; set; }
        public string FeatureLabel { get; set; }
        public int? ParentFeatureId { get; set; }
        public int? Order { get; set; }
        public string Privileges { get; set; }
        public string RoleName { get; set; }

        public string ApplicationName { get; set; }
    }
}
