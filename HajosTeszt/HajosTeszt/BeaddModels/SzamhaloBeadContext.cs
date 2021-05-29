using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace HajosTeszt.BeaddModels
{
    public partial class SzamhaloBeadContext : DbContext
    {
        public SzamhaloBeadContext()
        {
        }

        public SzamhaloBeadContext(DbContextOptions<SzamhaloBeadContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Repulo> Repulos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=corvinus2021.database.windows.net;Initial Catalog=SzamhaloBead;Persist Security Info=True;User ID=hallgato;Password=Bricsi99");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Repulo>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Repulo");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Nev)
                    .HasMaxLength(50)
                    .IsFixedLength(true);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
