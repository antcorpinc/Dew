﻿using MG.Jarvis.Api.UserManagement.Interfaces;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;

namespace MG.Jarvis.Api.UserManagement.Entities
{
    /// <summary>
    /// User Entity
    /// </summary>
    public partial class User : IdentityUser<Guid>, IIdentifiableModel<Guid>
    {
        /// <summary>
        /// Default Constructor
        /// </summary>
        public User()
        {
            UserAppRoleMapping = new HashSet<UserAppRoleMapping>();
            UserDepartments = new HashSet<UserDepartments>();
            HotelUserRelation = new HashSet<HotelUserRelation>();
           // Agents = new HashSet<Agents>();
        }

        /// <summary>
        /// FirstName
        /// </summary>
        public string FirstName { get; set; }
        /// <summary>
        /// LastName
        /// </summary>
        public string LastName { get; set; }
        /// <summary>
        /// UserType
        /// </summary>
        public int UserType { get; set; }
        /// <summary>
        /// ActivationDate
        /// </summary>
        public DateTime? ActivationDate { get; set; }
        /// <summary>
        /// DeActivateDate
        /// </summary>
        public DateTime? DeActivateDate { get; set; }
        /// <summary>
        /// CreatedBy
        /// </summary>
        public string CreatedBy { get; set; }
        /// <summary>
        /// CreatedDate
        /// </summary>
        public DateTime? CreatedDate { get; set; }
        /// <summary>
        /// EmployeeId
        /// </summary>

        public int? EmployeeId { get; set; }
        /// <summary>
        /// IsActive
        /// </summary>
        public bool? IsActive { get; set; }
        /// <summary>
        /// PhotoUrl
        /// </summary>
        public string PhotoUrl { get; set; }
        /// <summary>
        /// UpdatedBy
        /// </summary>
        public string UpdatedBy { get; set; }
        /// <summary>
        /// UpdatedDate
        /// </summary>
        public DateTime? UpdatedDate { get; set; }
        /// <summary>
        /// InActivationType
        /// </summary>
        public string InActivationType { get; set; }
        /// <summary>
        /// TemporaryInActivationDate
        /// </summary>
        public DateTime? TemporaryInActivationDate { get; set; }
        /// <summary>
        /// TemporaryActivationDate
        /// </summary>
        public DateTime? TemporaryActivationDate { get; set; }
        /// <summary>
        /// IsDeleted
        /// </summary>
        public bool IsDeleted { get; set; }
        /// <summary>
        /// HotelUserType
        /// </summary>
        public string HotelUserType { get; set; }
        /// <summary>
        /// UserTypeNavigation
        /// </summary>
        public UserType UserTypeNavigation { get; set; }
        /// <summary>
        /// UserAppRoleMapping
        /// </summary>
        public ICollection<UserAppRoleMapping> UserAppRoleMapping { get; set; }
        /// <summary>
        /// UserDepartments
        /// </summary>
        public ICollection<UserDepartments> UserDepartments { get; set; }


        /// <summary>
        /// UserHotels
        /// </summary>
        //public ICollection<Agents> Agents { get; set; }
        public Agents Agents { get; set; }
        public ICollection<HotelUserRelation> HotelUserRelation { get; set; }

        /// <summary>
        /// DesignationId
        /// </summary>
        public Byte? DesignationId { get; set; }

        public Designation DesignationNavigation { get; set; }

        

        #region unused
        // public Guid Id { get; set; }
        // public int AccessFailedCount { get; set; }
        //  public string ConcurrencyStamp { get; set; }
        //public string Email { get; set; }
        // public bool EmailConfirmed { get; set; }
        //public bool LockoutEnabled { get; set; }
        // public DateTimeOffset? LockoutEnd { get; set; }
        //  public string NormalizedEmail { get; set; }
        //  public string NormalizedUserName { get; set; }
        //    public string PasswordHash { get; set; }
        //   public string PhoneNumber { get; set; }
        //   public bool PhoneNumberConfirmed { get; set; }
        //  public string SecurityStamp { get; set; }
        //public bool TwoFactorEnabled { get; set; }
        //public string UserName { get; set; }
        #endregion
    }
}
