using System.Data.Entity;
using ZipCodeTech.Domain.Models;
using ZipCodeTech.Infraestructure.Data.Map;

namespace ZipCodeTech.Infraestructure.Data
{
    public class AppDataContext : DbContext
    {
        public AppDataContext()
            : base("AppConnectionString")
        {
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;
        }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new UserMap());            
        }

    }
}
