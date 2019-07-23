using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MeetingRoomManager.BLL.Infra.BLL;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MeetingRoomManager.Web.Controllers
{
    [Route("api/[controller]")]
    public class RoomController : ControllerBase
    {
        private IRoomBLL _roomBLL;
        public RoomController(IRoomBLL roomBLL)
        {
            _roomBLL = roomBLL;
        }

        [Route("index"), HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_roomBLL.Get());
            }
            catch(Exception e)
            {
                return BadRequest(e.ToString());
            }
        }

    }
}
