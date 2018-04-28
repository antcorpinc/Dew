using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MG.Jarvis.Web.Settings
{
    public class AppSettings
    {
         public BaserUrls BaserUrls { get; set; }
         public IdentityClient IdentityClient {get;set;}

         public Domain Domain {get;set;}

         public AppConfig AppConfig { get; set; }
    }

    public class BaserUrls {
        public string Auth { get; set; }
        public string Api { get; set; }
        public string Web { get; set; }
        public string ExtranetWeb { get; set; }
        public string BackOfficeApi { get; set; }
        public string ExtranetApi { get; set; }
        public string UserMgmtApi {get; set;}
    }

    public class IdentityClient {
        public string ClientId {get;set;}
        public string ClientSecret {get;set;}

        public string ExtranetClientId { get; set; }
        public string ExtranetClientSecret { get; set; }
    }

    public class Domain {
        public string Auth {get;set;}
    }

    public class AppConfig  {
        public string ExtranetOnly { get; set; }
    }

}
