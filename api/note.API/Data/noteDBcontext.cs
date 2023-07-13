using Microsoft.EntityFrameworkCore;
using note.API.Models;

namespace note.API.Data
{
    public class noteDBcontext : DbContext
    {
        public noteDBcontext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Note> Notes { get; set; }
    }
}
