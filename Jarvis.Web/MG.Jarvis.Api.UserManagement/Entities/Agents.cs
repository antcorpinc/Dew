using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MG.Jarvis.Api.UserManagement.Entities
{
    /// <summary>
    /// UserAgent
    /// </summary>
    public class Agents
    {
        public int Id { get; set; }
        public int? AgencyBranchId { get; set; }
        public int AgencyId { get; set; }
        public Guid UserId { get; set; }
        public int? CountryId { get; set; }
        public int? CityId { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string ZipCode { get; set; }
        public bool? IsActive { get; set; }
        public bool? IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public DateTime UpdatedDate { get; set; }

        public Agency Agency { get; set; }
        public Branch AgencyBranch { get; set; }
        public User User { get; set; }

    }
}
     