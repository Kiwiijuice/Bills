using Microsoft.EntityFrameworkCore;

namespace BillsApi.DAL
{
    /// <summary>
    /// Entity Framework DB Context
    /// </summary>
    public class BillsApiContext : DbContext
    {
        public BillsApiContext(DbContextOptions<BillsApiContext> options)
        : base(options)
        {

        }

        public virtual DbSet<Bills> Bills { get; set; }
    }
}
