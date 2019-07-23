using MeetingRoomManager.BLL.Infra.BLL;
using MeetingRoomManager.DAL.Infra;
using MeetingRoomManager.DAL.Infra.Repositories;
using MeetingRoomManager.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace MeetingRoomManager.BLL.BLL
{
    public class UserBLL : IUserBLL
    {
        private IRoomsDbContext _dbContext;
        private IUserRepository _userRepository;
        public UserBLL(IRoomsDbContext dbContext, IUserRepository userRepository)
        {
            _dbContext = dbContext;
            _userRepository = userRepository;
        }
        public void Add(User user)
        {
            _userRepository.Add(user);
            _dbContext.SaveChanges();
        }

        public User Get(string email, string password)
        {
            return _userRepository.Get(email, password);

        }
    }
}
