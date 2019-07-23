using MeetingRoomManager.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace MeetingRoomManager.BLL.Infra.BLL
{
    public interface IUserBLL
    {
        void Add(User user);
        User Get(string email, string password);
    }
}
