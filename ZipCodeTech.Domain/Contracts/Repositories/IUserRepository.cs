using System;
using System.Collections.Generic;
using ZipCodeTech.Domain.Models;

namespace ZipCodeTech.Domain.Contracts.Repositories
{
    public interface IUserRepository : IDisposable
    {
        User Get(string email);
        User Get(Guid id);
        List<User> Get(int skip, int take);
        void Create(User user);
        void Update(User user);
        void Delete(User user);
    }
}
