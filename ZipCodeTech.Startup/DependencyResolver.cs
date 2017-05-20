using Microsoft.Practices.Unity;
using ZipCodeTech.Business.Services;
using ZipCodeTech.Domain.Contracts.Repositories;
using ZipCodeTech.Domain.Contracts.Services;
using ZipCodeTech.Domain.Models;
using ZipCodeTech.Infraestructure.Data;
using ZipCodeTech.Infraestructure.Repositories;

namespace ZipCodeTech.Startup
{
    public static class DependencyResolver
    {
        public static void Resolve(UnityContainer container)
        {
            container.RegisterType<AppDataContext, AppDataContext>(new HierarchicalLifetimeManager());
            container.RegisterType<IUserRepository, UserRepository>(new HierarchicalLifetimeManager());
            container.RegisterType<IUserService, UserService>(new HierarchicalLifetimeManager());

            container.RegisterType<User, User>(new HierarchicalLifetimeManager());
        }
    }
}
