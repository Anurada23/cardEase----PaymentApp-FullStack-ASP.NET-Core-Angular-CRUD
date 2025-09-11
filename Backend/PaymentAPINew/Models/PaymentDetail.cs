using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PaymentAPINew.Models
{
    public class PaymentDetail
    {
        [Key]
        public int PaymentDetailsId { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string CardOwnersName { get; set; } = "";

        public string CardNumber { get; set; } = "";

        public string ExpirationDate { get; set; } = "";

        public string SecurityCode { get; set; } = "";
    }
}
