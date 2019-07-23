using MeetingRoomManager.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace MeetingRoomManager.BLL.Infra.BLL
{
    public interface IRoomUserBLL
    {
        List<RoomUser> Get(int id, DateTime initial);
        bool Add(RoomUser roomUser);
    }
}
