using MeetingRoomManager.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace MeetingRoomManager.DAL.Infra.Repositories
{
    public interface IRoomUserRepository
    {
        List<RoomUser> Get(int id, DateTime initial);
        void Add(RoomUser roomUser);
    }
}
