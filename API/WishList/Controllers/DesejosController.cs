using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WishList.Domains;
using WishList.Interfaces;
using WishList.Repositories;

namespace WishList.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class DesejosController : ControllerBase
    {
        private IdesejoRepository _desejo { get; set; }

        public DesejosController()
        {
            _desejo = new DesejosRepositories();

        }

        [HttpGet]
        public IActionResult Lista()
        {
            return Ok(_desejo.ListarDesejo());
        }

        [HttpPost]
        public IActionResult Cadastrar(Desejo newDesejo)
        {
            try
            {
                _desejo.CadastrarDesejo(newDesejo);
                return StatusCode(201);
            }
            catch (Exception error)
            {

                return BadRequest(error);
            }
        }

     
    }
}
