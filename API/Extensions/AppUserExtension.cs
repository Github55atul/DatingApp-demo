using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Interfaces;

namespace API.Extensions
{
    public static class AppUserExtension
    {
        public static UserDto ToDto(this Appuser user,ITokenService tokenService)
        {
            return new UserDto
            {
                Id=user.Id,
                DisplayName=user.DisplayName,
                Email=user.Email,
                Token=tokenService.CreateToken(user)
            };
        }
        
    }
}