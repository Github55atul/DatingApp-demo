using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace API.Data
{
    // public class AppDbContext : DbContext
    // {
    //     public AppDbContext(DbContextOptions options) : base(options)
    //     {
           
    //     }
    //     public DbSet<Appuser> Users { get; set; }
    // }
    public class AppDbContext : DbContext
    {
        // Yahan <AppDbContext> add karna zaroori hai
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
           
        }
        
        public DbSet<Appuser> Users { get; set; }
    }
}