using MeetingRoomManager.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace MeetingRoomManager.BLL.Infra.BLL
{
    public interface IRoomBLL
    {
        List<Room> Get();

        void Add(Room room);
    }
}
