using API.Entities;

namespace API.Interfaces
{
    public interface ICategoryService
    {
        Task<List<Category>> GetCategoriesAsync();
        Task<Category> GetCategoryAsync(int id);
        Task<Category> AddCategoryAsync(Category category);
    }
}