using MeetingRoomManager.DAL.Infra;
using MeetingRoomManager.DAL.Infra.Repositories;
using MeetingRoomManager.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MeetingRoomManager.DAL.Repositories
{
    public class RoomRepository : IRoomRepository
    {
        private IRoomsDbContext _dbContext;
        public RoomRepository(IRoomsDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Room> Get()
        {
            return _dbContext.RoomQuery.ToList();
        }

        public void Add(Room room)
        {
            _dbContext.Add(room);
        }
    }
}
