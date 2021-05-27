using System;
using System.Collections.Generic;

#nullable disable

namespace WishList.Domains
{
    public partial class Desejo
    {
        public int IdDesejo { get; set; }
        public string DescricaoDesejo { get; set; }
        public int? DesejoUsuario { get; set; }

        public virtual Usuario DesejoUsuarioNavigation { get; set; }
    }
}
