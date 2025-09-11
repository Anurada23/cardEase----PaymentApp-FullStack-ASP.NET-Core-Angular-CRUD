using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace PaymentAPINew.Models
{
    public class PaymentDetailContext : DbContext
    {
        public PaymentDetailContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<PaymentDetail> PaymentDetails { get; set; }


    }
}
