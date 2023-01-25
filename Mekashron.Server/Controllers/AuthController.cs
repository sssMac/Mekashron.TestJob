using Mekashron.Server.Models.Requests;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Mekashron.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromForm] LoginReq req)
        {
            IcutechTestService.ICUTechClient client = new IcutechTestService.ICUTechClient();
            var res = await client.LoginAsync(req.Email, req.Password, "");
            return Ok(res.@return);
        }
    }
}
