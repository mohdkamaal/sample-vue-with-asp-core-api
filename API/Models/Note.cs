using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace notesApp.Models
{
    [Table("note")]
    public partial class Note
    {
        [Key]
        [Column("ID")]
        public int Id { get; set; }
        [Column("Note")]
        [StringLength(50)]
        public string Note1 { get; set; }
        [StringLength(50)]
        public string Color { get; set; }
    }
}
