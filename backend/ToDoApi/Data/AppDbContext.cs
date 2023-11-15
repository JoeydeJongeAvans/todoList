// In Data/AppDbContext.cs

using Microsoft.EntityFrameworkCore;
using ToDoApi.Models;  // Make sure this using directive is present

namespace ToDoApi.Data
{
    public class AppDbContext : DbContext
    {
        // Your DbContext code here...

        public DbSet<Todo> Todos { get; set; }
    }
}
