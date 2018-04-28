using System;
using MG.Jarvis.Api.UserManagement.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace MG.Jarvis.Api.UserManagement.Context
{
    public partial class UserMgmtContext : DbContext
    {
        public UserMgmtContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {

        }

        public virtual DbSet<Agency> Agency { get; set; }
        public virtual DbSet<Agents> Agents { get; set; }
        public virtual DbSet<Application> Application { get; set; }
        public virtual DbSet<ApplicationFeature> ApplicationFeature { get; set; }
        public virtual DbSet<ApplicationRole> ApplicationRole { get; set; }
        public virtual DbSet<Branch> Branch { get; set; }
        public virtual DbSet<Brand> Brand { get; set; }
        public virtual DbSet<Chain> Chain { get; set; }
        public virtual DbSet<Department> Department { get; set; }
        public virtual DbSet<Designation> Designation { get; set; }
        public virtual DbSet<Feature> Feature { get; set; }
        public virtual DbSet<FeatureTypeRolePrivilege> FeatureTypeRolePrivilege { get; set; }
        public virtual DbSet<Hotel> Hotel { get; set; }
        public virtual DbSet<HotelUserRelation> HotelUserRelation { get; set; }
        public virtual DbSet<Role> Role { get; set; }
        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<UserAppRoleMapping> UserAppRoleMapping { get; set; }
        public virtual DbSet<UserDepartments> UserDepartments { get; set; }
        public virtual DbSet<UserType> UserType { get; set; }

        //        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //        {
        //            if (!optionsBuilder.IsConfigured)
        //            {
        //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
        //                optionsBuilder.UseSqlServer(@"Server=ronit-w8;Database=Temp;Trusted_Connection=false;User Id=sa;Password=cybage@123");
        //            }
        //        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Agency>(entity =>
            {
                entity.ToTable("Agency", "Agency");


                entity.Property(e => e.Code).IsRequired();



                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(150);


            });

            modelBuilder.Entity<Agents>(entity =>
            {
                entity.ToTable("Agents", "Agency");

                entity.Property(e => e.Id).ValueGeneratedOnAdd();

                entity.Property(e => e.Address1)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Address2)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedBy)
                    .IsRequired()
                    .HasMaxLength(128)
                    .IsUnicode(false)
                    .HasDefaultValueSql("(suser_sname())");

                entity.Property(e => e.CreatedDate).HasDefaultValueSql("(dateadd(hour,(7),getutcdate()))");

                entity.Property(e => e.IsActive).HasDefaultValueSql("((1))");

                entity.Property(e => e.IsDeleted).HasDefaultValueSql("((0))");

                entity.Property(e => e.UpdatedBy)
                    .IsRequired()
                    .HasMaxLength(128)
                    .IsUnicode(false)
                    .HasDefaultValueSql("(suser_sname())");

                entity.Property(e => e.UpdatedDate).HasDefaultValueSql("(dateadd(hour,(7),getutcdate()))");

                entity.Property(e => e.ZipCode)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.HasOne(d => d.AgencyBranch)
                    .WithMany(p => p.Agents)
                    .HasForeignKey(d => d.AgencyBranchId)
                    .HasConstraintName("fk_Agency_Agents_AgencyBranchId_Agency_Branch_Id");

                entity.HasOne(d => d.Agency)
                    .WithMany(p => p.Agents)
                    .HasForeignKey(d => d.AgencyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Agency_Agents_AgencyId_Agency_Agency_Id");

                entity.HasOne(d => d.User)
                    .WithOne(p => p.Agents)
                    //.HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Agency_Agents_UserId_AccessPermission_User_Id");
            });

            modelBuilder.Entity<Application>(entity =>
            {
                entity.ToTable("Application", "AccessPermission");

                entity.Property(e => e.Id).ValueGeneratedOnAdd();

                entity.Property(e => e.CreatedBy)
                    .IsRequired()
                    .HasMaxLength(128);

                entity.Property(e => e.Name).IsRequired();

                entity.Property(e => e.UpdatedBy)
                    .IsRequired()
                    .HasMaxLength(128);
            });

            modelBuilder.Entity<ApplicationFeature>(entity =>
            {
                entity.ToTable("ApplicationFeature", "AccessPermission");

                entity.Property(e => e.Id).ValueGeneratedOnAdd();

                entity.HasOne(d => d.Application)
                    .WithMany(p => p.ApplicationFeature)
                    .HasForeignKey(d => d.ApplicationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_AccessPermission_ApplicationFeature_ApplicationId_AccessPermission_Application_Id");

                entity.HasOne(d => d.FeatureType)
                    .WithMany(p => p.ApplicationFeature)
                    .HasForeignKey(d => d.FeatureTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_AccessPermission_ApplicationFeature_FeatureTypeId_AccessPermission_FeatureType_Id");
            });

            modelBuilder.Entity<ApplicationRole>(entity =>
            {
                entity.ToTable("ApplicationRole", "AccessPermission");
                entity.Property(e => e.Id).ValueGeneratedOnAdd();

                entity.Property(e => e.CreatedBy)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.UpdatedBy)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.HasOne(d => d.Application)
                    .WithMany(p => p.ApplicationRole)
                    .HasForeignKey(d => d.ApplicationId)
                    .HasConstraintName("FK_ApplicationRole_Application");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.ApplicationRole)
                    .HasForeignKey(d => d.RoleId)
                    .HasConstraintName("FK_ApplicationRole_Role");
            });

            modelBuilder.Entity<Branch>(entity =>
            {
                entity.ToTable("Branch", "Agency");


                entity.Property(e => e.Name).HasMaxLength(150);


                entity.HasOne(d => d.Agency)
                    .WithMany(p => p.Branch)
                    .HasForeignKey(d => d.AgencyId)
                    .HasConstraintName("fk_Agency_Branch_AgencyId_Agency_Agency_Id");
            });

            modelBuilder.Entity<Brand>(entity =>
            {
                entity.ToTable("Brand", "Hotel");

                entity.Property(e => e.Name).HasMaxLength(150);

                entity.HasOne(d => d.HotelChain)
                    .WithMany(p => p.Brand)
                    .HasForeignKey(d => d.HotelChainId)
                    .HasConstraintName("fk_Hotel_Brand_HotelChainId_Hotel_Chain_Id");
            });

            modelBuilder.Entity<Chain>(entity =>
            {
                entity.ToTable("Chain", "Hotel");

                entity.Property(e => e.Code).HasMaxLength(50);

                entity.Property(e => e.Name).HasMaxLength(150);
                
            });

            modelBuilder.Entity<Department>(entity =>
            {
                entity.ToTable("Department", "AccessPermission");

                entity.Property(e => e.Id).ValueGeneratedOnAdd();
            });

            modelBuilder.Entity<Designation>(entity =>
            {
                entity.ToTable("Designation", "MasterData");

                entity.Property(e => e.Id).ValueGeneratedOnAdd();


                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasMaxLength(150);

            });

            modelBuilder.Entity<Feature>(entity =>
            {
                entity.ToTable("Feature", "AccessPermission");

                entity.Property(e => e.Id).ValueGeneratedOnAdd();

                entity.Property(e => e.CreatedBy)
                    .IsRequired()
                    .HasMaxLength(128)
                    .HasDefaultValueSql("(suser_sname())");

                entity.Property(e => e.CreatedDate).HasDefaultValueSql("(dateadd(hour,(7),getutcdate()))");

                entity.Property(e => e.Description).HasMaxLength(200);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(30);

                entity.Property(e => e.UpdatedBy)
                    .IsRequired()
                    .HasMaxLength(128)
                    .HasDefaultValueSql("(suser_sname())");

                entity.Property(e => e.UpdatedDate).HasDefaultValueSql("(dateadd(hour,(7),getutcdate()))");

                entity.HasOne(d => d.ParentFeature)
                    .WithMany(p => p.InverseParentFeature)
                    .HasForeignKey(d => d.ParentFeatureId)
                    .HasConstraintName("fk_AccessPermission_FeatureType_ParentFeatureId_AccessPermission_FeatureType_Id");
            });

            modelBuilder.Entity<FeatureTypeRolePrivilege>(entity =>
            {
                entity.ToTable("FeatureTypeRolePrivilege", "AccessPermission");

                entity.Property(e => e.Id).ValueGeneratedOnAdd();

                entity.Property(e => e.CreatedBy)
                    .IsRequired()
                    .HasMaxLength(128)
                    .HasDefaultValueSql("(suser_sname())");

                entity.Property(e => e.CreatedDate).HasDefaultValueSql("(dateadd(hour,(7),getutcdate()))");

                entity.Property(e => e.UpdatedBy)
                    .IsRequired()
                    .HasMaxLength(128)
                    .HasDefaultValueSql("(suser_sname())");

                entity.Property(e => e.UpdatedDate).HasDefaultValueSql("(dateadd(hour,(7),getutcdate()))");

                entity.HasOne(d => d.FeatureType)
                    .WithMany(p => p.FeatureTypeRolePrivilege)
                    .HasForeignKey(d => d.FeatureTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_AccessPermission_FeatureTypeRolePrivilege_FeatureTypeId_AccessPermission_FeatureType_Id");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.FeatureTypeRolePrivilege)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_AccessPermission_FeatureTypeRolePrivilege_RoleId_AccessPermission_Role_Id");
            });

            modelBuilder.Entity<Hotel>(entity =>
            {
                entity.ToTable("Hotel", "Hotel");


                entity.Property(e => e.Code).IsRequired();


                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(150);

                entity.HasOne(d => d.HotelBrand)
                    .WithMany(p => p.Hotel)
                    .HasForeignKey(d => d.HotelBrandId)
                    .HasConstraintName("fk_Hotel_Hotel_HotelBrandId_Hotel_Brand_Id");

                entity.HasOne(d => d.HotelChain)
                    .WithMany(p => p.Hotel)
                    .HasForeignKey(d => d.HotelChainId)
                    .HasConstraintName("fk_Hotel_Hotel_HotelChainId_Hotel_Chain_Id");
            });

            modelBuilder.Entity<HotelUserRelation>(entity =>
            {
                entity.ToTable("HotelUserRelation", "AccessPermission");
                entity.Property(e => e.Id).ValueGeneratedOnAdd();
                entity.Property(e => e.CreatedBy)
                    .IsRequired()
                    .HasMaxLength(128)
                    .IsUnicode(false)
                    .HasDefaultValueSql("(suser_sname())");

                entity.Property(e => e.CreatedDate).HasDefaultValueSql("(dateadd(hour,(7),getutcdate()))");

                entity.Property(e => e.UpdatedBy)
                    .IsRequired()
                    .HasMaxLength(128)
                    .IsUnicode(false)
                    .HasDefaultValueSql("(suser_sname())");

                entity.Property(e => e.UpdatedDate).HasDefaultValueSql("(dateadd(hour,(7),getutcdate()))");

                entity.HasOne(d => d.Hotel)
                    .WithMany(p => p.HotelUserRelation)
                    .HasForeignKey(d => d.HotelId)
                    //.OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_AccessPermission_HotelUserRelation_HotelId_Hotel_Hotel_Id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.HotelUserRelation)
                    .HasForeignKey(d => d.UserId)
                    //.OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_AccessPermission_HotelUserRelation_UserId_AccessPermission_User_Id");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("Role", "AccessPermission");

                entity.Property(e => e.Id).ValueGeneratedOnAdd();

                entity.Property(e => e.CreatedBy)
                    .IsRequired()
                    .HasMaxLength(128)
                    .HasDefaultValueSql("(suser_sname())");

                entity.Property(e => e.CreatedDate).HasDefaultValueSql("(dateadd(hour,(7),getutcdate()))");

                entity.Property(e => e.Name).HasMaxLength(256);

                entity.Property(e => e.NormalizedName).HasMaxLength(256);

                entity.Property(e => e.UpdatedBy)
                    .IsRequired()
                    .HasMaxLength(128)
                    .HasDefaultValueSql("(suser_sname())");

                entity.Property(e => e.UpdatedDate).HasDefaultValueSql("(dateadd(hour,(7),getutcdate()))");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("User", "AccessPermission");

                entity.Property(e => e.Id).ValueGeneratedOnAdd();

                entity.Property(e => e.CreatedBy).HasMaxLength(256);

                entity.Property(e => e.Email).HasMaxLength(256);

                entity.Property(e => e.HotelUserType).HasColumnType("char(1)");

                entity.Property(e => e.InActivationType).HasColumnType("char(1)");

                entity.Property(e => e.IsDeleted).HasDefaultValueSql("((0))");

                entity.Property(e => e.NormalizedEmail).HasMaxLength(256);

                entity.Property(e => e.NormalizedUserName).HasMaxLength(256);

                entity.Property(e => e.PhotoUrl).HasMaxLength(256);

                entity.Property(e => e.UpdatedBy).HasMaxLength(256);

                entity.Property(e => e.UserName).HasMaxLength(256);

                entity.HasOne(d => d.UserTypeNavigation)
                    .WithMany(p => p.User)
                    .HasForeignKey(d => d.UserType)
                    .HasConstraintName("FK_User_UserType");
            });

            modelBuilder.Entity<UserAppRoleMapping>(entity =>
            {
                entity.ToTable("UserAppRoleMapping", "AccessPermission");
                entity.Property(e => e.Id).ValueGeneratedOnAdd();
                entity.Property(e => e.CreatedBy)
                    .IsRequired()
                    .HasMaxLength(128)
                    .HasDefaultValueSql("(suser_sname())");

                entity.Property(e => e.CreatedDate).HasDefaultValueSql("(dateadd(hour,(7),getutcdate()))");

                entity.Property(e => e.UpdatedBy)
                    .IsRequired()
                    .HasMaxLength(128)
                    .HasDefaultValueSql("(suser_sname())");

                entity.Property(e => e.UpdatedDate).HasDefaultValueSql("(dateadd(hour,(7),getutcdate()))");

                entity.HasOne(d => d.Application)
                    .WithMany(p => p.UserAppRoleMapping)
                    .HasForeignKey(d => d.ApplicationId)
                    //.OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_AccessPermission_UserAppRoleMapping_ApplicationId_AccessPermission_Application_Id");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.UserAppRoleMapping)
                    .HasForeignKey(d => d.RoleId)
                    //.OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_AccessPermission_UserAppRoleMapping_RoleId_AccessPermission_Role_Id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserAppRoleMapping)
                    .HasForeignKey(d => d.UserId)
                    //.OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_AccessPermission_UserAppRoleMapping_UserId_AccessPermission_User_Id");
            });

            modelBuilder.Entity<UserDepartments>(entity =>
            {
                entity.ToTable("UserDepartments", "AccessPermission");
                entity.Property(e => e.Id).ValueGeneratedOnAdd();
                entity.Property(e => e.CreatedBy)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.UpdatedBy)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.HasOne(d => d.Department)
                    .WithMany(p => p.UserDepartments)
                    .HasForeignKey(d => d.DepartmentId)
                    .HasConstraintName("FK_UserDepartments_Department");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserDepartments)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_UserDepartments_User");
            });

            modelBuilder.Entity<UserType>(entity =>
            {
                entity.ToTable("UserType", "AccessPermission");
                entity.Property(e => e.Id).ValueGeneratedOnAdd();
                entity.Property(e => e.CreatedBy)
                    .IsRequired()
                    .HasMaxLength(128);

                entity.Property(e => e.Type)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.UpdatedBy)
                    .IsRequired()
                    .HasMaxLength(128);
            });
        }
    }
}
