using API.Entities;
using API.Interfaces;
using API.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class CategoriesController : BaseApiController
    {
        private readonly ICategoryService _categoryService;
        public CategoriesController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Category>>> GetCategoriesAsync()
        {
            var categories = await _categoryService.GetCategoriesAsync();

            return Ok(categories);
        }

        [HttpGet("id")]
        public async Task<ActionResult<Category>> GetCategoryAsync(int id)
        {
            var category = await _categoryService.GetCategoryAsync(id);
            return Ok(category);
        }

        [HttpPost]
        public async Task<ActionResult<Category>> AddCategoryAsync(Category category)
        {
            if (ModelState.IsValid)
            {
                await _categoryService.AddCategoryAsync(category);
                return Ok(category);
            }

            return BadRequest();
        }
    }
}