// In de map Models/Todo.cs

namespace ToDoApi.Models
{
    public class Todo
    {
        public long Id { get; set; }
        public required string Title { get; set; }
        public bool IsCompleted { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
