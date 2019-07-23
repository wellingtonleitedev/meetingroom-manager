using MeetingRoomManager.BLL.Infra.BLL;
using MeetingRoomManager.DAL.Infra;
using MeetingRoomManager.DAL.Infra.Repositories;
using MeetingRoomManager.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace MeetingRoomManager.BLL.BLL
{
    public class RoomBLL : IRoomBLL
    {
        private IRoomsDbContext _dbContext;
        private IRoomRepository _roomRepository;

        public RoomBLL(IRoomsDbContext dbContext, IRoomRepository roomRepository)
        {
            _dbContext = dbContext;
            _roomRepository = roomRepository;
        }

        public List<Room> Get()
        {
            return _roomRepository.Get();
        }
    }
}
