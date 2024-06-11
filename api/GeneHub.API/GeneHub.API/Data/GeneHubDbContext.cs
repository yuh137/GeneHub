using GeneHub.API.Model.Domain;
using Microsoft.EntityFrameworkCore;

namespace GeneHub.API.Data
{
    public class GeneHubDbContext : DbContext
    {
        public GeneHubDbContext(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Disease> Diseases { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Disease>()
                .OwnsMany(g => g.Clinical);
        }
    }
}
