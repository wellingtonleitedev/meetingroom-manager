using MeetingRoomManager.DAL.Infra;
using MeetingRoomManager.DAL.Infra.Repositories;
using MeetingRoomManager.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MeetingRoomManager.DAL.Repositories
{
    public class UserRepository : IUserRepository
    {
        private IRoomsDbContext _dbContext;
        public UserRepository(IRoomsDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public void Add(User user)
        {
            _dbContext.Add(user);
        }

        public User Get(string email, string password)
        {
            return _dbContext.UserQuery.Where(x => x.Email == email && x.Password == password).FirstOrDefault();

        }
    }
}
