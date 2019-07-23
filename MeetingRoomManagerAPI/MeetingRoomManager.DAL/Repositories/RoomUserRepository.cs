using MeetingRoomManager.DAL.Infra;
using MeetingRoomManager.DAL.Infra.Repositories;
using MeetingRoomManager.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MeetingRoomManager.DAL.Repositories
{
    public class RoomUserRepository : IRoomUserRepository
    {
        private IRoomsDbContext _roomsDbContext;
        public RoomUserRepository(IRoomsDbContext roomsDbContext)
        {
            _roomsDbContext = roomsDbContext;
        }

        public List<RoomUser> Get(int id, DateTime initial)
        {
            return _roomsDbContext.RoomUserQuery.Where(x => x.RoomId == id && initial < x.EndPeriod).ToList();
        }

        public void Add(RoomUser roomUser)
        {
            _roomsDbContext.Add(roomUser);
        }
    }
}
