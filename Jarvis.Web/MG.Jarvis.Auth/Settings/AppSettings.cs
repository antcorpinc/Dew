using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MG.Jarvis.Auth.Settings
{
    public class AppSettings
    {
        public BaserUrls BaserUrls { get; set; }  
        public Domain Domain {get;set;}     
    }

    public class BaserUrls {
        public string Web { get; set; }    
        public string ExtranetWeb { get; set; }
    }

     public class Domain {
        public string Auth {get;set;}
    }

}
