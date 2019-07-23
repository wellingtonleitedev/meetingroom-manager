using MeetingRoomManager.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MeetingRoomManager.DAL.Infra
{
    public interface IRoomsDbContext
    {
        int SaveChanges();
        void Add<TEntity>(TEntity entity) where TEntity : class;
        void Edit<TEntity>(TEntity entity) where TEntity : class;
        void Delete<TEntity>(TEntity entity) where TEntity : class;

        IQueryable<User> UserQuery { get; }
        IQueryable<Room> RoomQuery { get; }
        IQueryable<RoomUser> RoomUserQuery { get; }
    }
}
