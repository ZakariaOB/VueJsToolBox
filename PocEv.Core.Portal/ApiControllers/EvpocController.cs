using Microsoft.AspNetCore.Mvc;
using PocEv.Core.Portal.ApiControllers.Models;
using PocEv.Core.Portal.Helper;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PocEv.Core.Portal.ApiControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EvpocController : ControllerBase
    {
        // GET: api/<CoursesController>
        [HttpGet]
        public IEnumerable<CouresViewModel> Get()
        {
            List<CouresViewModel> courses = new List<CouresViewModel>
            {
                new CouresViewModel { Name = "Java", Description = "Programming language", Category = "Advanced" },
                new CouresViewModel { Name = "Angular", Description = "Framwork front", Category = "Beginner" },
                new CouresViewModel { Name = "Unity", Description = "DPI framwork", Category = "Advanced" }
            };
            return courses;
        }

        // GET api/<CoursesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            List<CouresViewModel> courses = new List<CouresViewModel>
            {
                new CouresViewModel { Name = "Java", Description = "Programming language", Category = "Advanced" },
                new CouresViewModel { Name = "Angular", Description = "Framwork front", Category = "Beginner" },
                new CouresViewModel { Name = "Unity", Description = "DPI framwork", Category = "Advanced" }
            };

            int index = id % 3;
            return courses[index].Name;
        }

        [HttpGet("get-by-name/{name}")]
        public async Task<string> GetByName(string name)
        {
            List<CouresViewModel> courses = new List<CouresViewModel>
            {
                new CouresViewModel { Name = "Java", Description = "Programming language", Category = "Advanced" },
                new CouresViewModel { Name = "Angular", Description = "Framwork front", Category = "Beginner" },
                new CouresViewModel { Name = "Unity", Description = "DPI framwork", Category = "Advanced" },
                new CouresViewModel { Name = "Advanced patterns", Description = "Advanced design patterns", Category = "Advanced" },
                new CouresViewModel { Name = "VueJs", Description = "Framwork front", Category = "Beginner" },
                new CouresViewModel { Name = "GraphQl", Description = "Backend framework", Category = "Advanced" }
            };

            await Task.Delay(2000);

            List<CouresViewModel> data = courses.Where(c => c.Name.ToLower().StartsWith(name.ToLower())).ToList();
            
            if (data.Any()) return data[0].Name;
            
            return string.Empty;
        }

        [HttpGet("city/{query}")]
        public List<CityViewModel> GetCityByName(string query)
        {
            List<CityViewModel> cities = DataGenerator.GetCities();
            return cities.Where(city => city.CityName.ToLower().StartsWith(query.ToLower())).ToList();
        }

        // POST api/<CoursesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CoursesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CoursesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
