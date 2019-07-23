using MeetingRoomManager.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace MeetingRoomManager.DAL.Infra.Repositories
{
    public interface IUserRepository
    {
        void Add(User user);
        User Get(string email, string password);
    }
}
