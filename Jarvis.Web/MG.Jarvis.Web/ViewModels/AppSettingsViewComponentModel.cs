using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MG.Jarvis.Web.ViewModels
{
    public class AppSettingsViewComponentModel
    {
        public string ApiUrl;
        public string AuthUrl;
        public string WebUrl;
        public string ExtranetWebUrl;
        public string BackOfficeApiUrl;
        public string ExtranetApiUrl;
        public string UserMgmtApiUrl;

        public string ExtranetOnly;

        public string AccessToken;
        public string IdToken;//ToOD: Not needed here - WE just need the access token

        // Test Claims
        public string Name;
        public string FirstName;
        public string SubjectId;
     //   public string Disabled;

    }
}
