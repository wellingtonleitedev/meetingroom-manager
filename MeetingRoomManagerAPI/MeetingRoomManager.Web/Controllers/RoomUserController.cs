using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MeetingRoomManager.BLL.Infra.BLL;
using MeetingRoomManager.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MeetingRoomManager.Web.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class RoomUserController : ControllerBase
    {
        private IRoomUserBLL _roomUserBLL;

        public RoomUserController(IRoomUserBLL roomUserBLL)
        {
            _roomUserBLL = roomUserBLL;
        }

        [Route("add"), HttpPost]
        public IActionResult Add([FromBody] RoomUser roomUser)
        {
            try
            {
                return Ok(_roomUserBLL.Add(roomUser));
            }catch(Exception e)
            {
                return BadRequest(e.ToString());
            }
        }
    }
}