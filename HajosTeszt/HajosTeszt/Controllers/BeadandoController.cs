using HajosTeszt.BeaddModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajosTeszt.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class BeadandoController : ControllerBase
    {
        //1. API végpont létrehozása a tábla rekordjainak számának megjelenítésére (2 pont)
        [HttpGet]
        [Route("bead/count")]
        public int N1()
        {
            SzamhaloBeadContext context = new SzamhaloBeadContext();
            int repulokSzama = context.Repulos.Count();
            return repulokSzama;
        }
        //2. API végpont létrehozása a tábla teljes tartalmának listázására (2 pont)
        [HttpGet]
        [Route("bead/all")]
        public IEnumerable<Repulo> Get()
        {
            SzamhaloBeadContext context = new SzamhaloBeadContext();
            return context.Repulos.ToList();
        }

        //3. API végpont létrehozása egy rekord lekérdezésére kulcs alapján(2 pont)
        [HttpGet("bead/{id}")]
        public Repulo Get(int id)
        {
            SzamhaloBeadContext context = new SzamhaloBeadContext();
            var rep = (from x in context.Repulos
                         where x.Id == id
                         select x).FirstOrDefault();
            return rep;
        }

        //4. API végpont létrehozása egy rekord törlésére kulcs alapján (2 pont)
        [HttpDelete("bead/del/{id}")]
        public void Delete(int id)
        {
            SzamhaloBeadContext context = new SzamhaloBeadContext();
            var delRep = (from x in context.Repulos
                          where x.Id == id
                          select x).FirstOrDefault();
            context.Remove(delRep);
            context.SaveChanges();
        }

        ////5. API végpont létrehozása új rekord rögzítésére(2 pont)
        //[HttpPost]
        //public void Post([FromBody] Repulo ujRep)
        //{
        //    SzamhaloBeadContext context = new SzamhaloBeadContext();
        //    ujRep.Id = 5;
        //    ujRep.Nev = "fds";
        //    ujRep.Meret = 1;
        //    context.Repulos.Add(ujRep);
        //    context.SaveChanges();
        //}


    }
}
