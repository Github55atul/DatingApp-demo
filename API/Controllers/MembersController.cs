using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MembersController : ControllerBase
    {
        // 1. Private field banyi jisme hum dependency store karenge
        private readonly AppDbContext _context;

        // 2. Traditional Constructor jahan dependency inject ho rhi hai
        public MembersController(AppDbContext context)
        {
            _context = context; // Constructor ke andar field ko assign kiya
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Appuser>>> Getmember()
        {
            // Ab pure controller mein hum '_context' ka use karenge
            var members = await _context.Users.ToListAsync();
            return members;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Appuser>> Getmember(string id)
        {
            var member = await _context.Users.FindAsync(id);
            if (member == null)
                return NotFound();

            return member;
        }
    }
}