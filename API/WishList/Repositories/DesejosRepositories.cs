﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WishList.Contexts;
using WishList.Domains;
using WishList.Interfaces;

namespace WishList.Repositories
{
    public class DesejosRepositories : IdesejoRepository
    {
        private WishListContext ctx = new WishListContext();
        public void CadastrarDesejo(Desejo newDesejo)
        {
            ctx.Desejos.Add(newDesejo);
            ctx.SaveChanges();

        }

        public List<Desejo> ListarDesejo()
        {
            return ctx.Desejos.Include(d => d.DesejoUsuarioNavigation).ToList();
        }
    }
}
