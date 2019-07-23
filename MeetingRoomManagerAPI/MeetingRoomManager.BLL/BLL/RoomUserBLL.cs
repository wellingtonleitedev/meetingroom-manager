using MeetingRoomManager.BLL.Infra.BLL;
using MeetingRoomManager.DAL.Infra;
using MeetingRoomManager.DAL.Infra.Repositories;
using MeetingRoomManager.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MeetingRoomManager.BLL.BLL
{
    public class RoomUserBLL : IRoomUserBLL
    {
        private IRoomsDbContext _roomsDbContext;
        private IRoomUserRepository _roomUserRepository;
        public RoomUserBLL(IRoomsDbContext roomsDbContext, IRoomUserRepository roomUserRepository)
        {
            _roomsDbContext = roomsDbContext;
            _roomUserRepository = roomUserRepository;
        }

        public List<RoomUser> Get(int id, DateTime initial)
        {
            return _roomUserRepository.Get(id, initial);
        }

        bool IRoomUserBLL.Add(RoomUser roomUser)
        {
            var book = this.Get(roomUser.RoomId, roomUser.InitialPeriod).Count();

            if (book == 0)
            {
                _roomUserRepository.Add(roomUser);
                _roomsDbContext.SaveChanges();
                return true;
            }

            return false;
        }
    }
}
