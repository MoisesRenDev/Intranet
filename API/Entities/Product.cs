using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Descripcion { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;
        public float Price { get; set; }
        public int QuantityInStock { get; set; }
        public bool IsInStock { get; set; }
        public bool IsActive { get; set; }
        public int CategoryId { get; set; }
        public Category? Category { get; set; }
        public DateTime Created { get; set; } = DateTime.Now;
        public DateTime Modified { get; set; }
    }
}