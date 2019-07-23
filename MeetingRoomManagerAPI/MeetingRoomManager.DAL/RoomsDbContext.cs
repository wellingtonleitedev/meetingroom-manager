using MeetingRoomManager.DAL.Infra;
using MeetingRoomManager.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MeetingRoomManager.DAL
{
    public class RoomsDbContext : DbContext, IRoomsDbContext
    {
        public RoomsDbContext(DbContextOptions<RoomsDbContext> options) : base(options) {}

        public DbSet<User> User { get; set; }
        public DbSet<Room> Room { get; set; }
        public DbSet<RoomUser> RoomUser { get; set; }
        public IQueryable<User> UserQuery { get { return User; } }

        public IQueryable<Room> RoomQuery { get { return Room; } }

        public IQueryable<RoomUser> RoomUserQuery { get { return RoomUser; } }

        public void Delete<TEntity>(TEntity entity) where TEntity : class
        {
            base.Remove(entity);
        }

        public void Edit<TEntity>(TEntity entity) where TEntity : class
        {
            base.Update(entity);
        }

        public int SaveChanges()
        {
            return base.SaveChanges();
        }

        void IRoomsDbContext.Add<TEntity>(TEntity entity)
        {
            base.Add(entity);
        }
    }
}
