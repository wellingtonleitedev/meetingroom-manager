using MeetingRoomManager.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace MeetingRoomManager.DAL.Infra.Repositories
{
    public interface IRoomRepository
    {
        List<Room> Get();
    }
}
