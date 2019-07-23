using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MeetingRoomManager.BLL.Infra.BLL;
using MeetingRoomManager.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MeetingRoomManager.Web.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class UserController : ControllerBase
    {
        private IUserBLL _userBLL;
        public UserController(IUserBLL userBLL)
        {
            _userBLL = userBLL;
        }

        [Route("add"), HttpPost]
        public IActionResult Add([FromBody] User user)
        {
            try
            {
                _userBLL.Add(user);
                return Ok(user);
            }
            catch (Exception e)
            {
                return BadRequest(e.ToString());
            }
        }

        [Route("get"), HttpGet]
        public IActionResult Get([FromQuery] string email, [FromQuery] string password)
        {
            try
            {
                return Ok(_userBLL.Get(email, password));
            }catch(Exception e)
            {
                return BadRequest(e.ToString());
            }
        }
    }
}