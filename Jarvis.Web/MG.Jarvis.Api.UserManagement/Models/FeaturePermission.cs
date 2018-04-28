using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.UserManagement.Models
{
    public class FeaturePermission
    {

        public int FeatureTypeId { get; set; }
        public string TypeName { get; set; }
        public string Label { get; set; }
        public int? ParentFeatureId { get; set; }
        public int? Order { get; set; }
        public string Privileges { get; set; }
    }
}
