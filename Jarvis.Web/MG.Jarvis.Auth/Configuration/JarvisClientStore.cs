
using System.Collections.Generic;
using System.Threading.Tasks;
using IdentityServer4;
using IdentityServer4.Models;
using IdentityServer4.Stores;
using MG.Jarvis.Auth.Settings;
using Microsoft.Extensions.Options;

namespace MG.Jarvis.Auth.Configuration {

    public class JarvisClientStore : IClientStore
    {
        private readonly AppSettings _appSettings;
        public JarvisClientStore(IOptions<AppSettings> appSettings)
        {
            _appSettings = appSettings.Value;
        }
        public  Task<Client> FindClientByIdAsync(string clientId)
        {
            if(clientId == "mg.jarvis.web")
            {
                return Task.FromResult(GetJarvisMvcClient());
            }
            else if(clientId == "mg.jarvis.extranet")
            {
                return Task.FromResult(GetJarvisExtranetMvcClient());
            }
            // Add Other Clients as needed
            return null;
        }

        private Client GetJarvisMvcClient()
        {
            return new Client
            {
                ClientId = "mg.jarvis.web",
                ClientName = "MG Jarvis Web Application",
                AllowedGrantTypes = GrantTypes.Hybrid,
                ClientSecrets = {new Secret("02F97D49-18F8-4E20-AD8D-0EA51F3450A0".Sha256())},
                RedirectUris= { $"{_appSettings.BaserUrls.Web}signin-oidc" },
                FrontChannelLogoutUri = $"{_appSettings.BaserUrls.Web}signout-oidc",
             //   BackChannelLogoutUri = $"{_appSettings.BaserUrls.Web}logout",
                PostLogoutRedirectUris= new List<string>{$"{_appSettings.BaserUrls.Web}signout-callback-oidc" },
                 
                    AllowedScopes = new List<string>
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "firstname",                     
                        "mg.jarvis.api.backoffice",
                        "mg.jarvis.api.extranet",
                   //     "disabled"
                    },
                    AllowOfflineAccess = true,
                    //AllowAccessTokensViaBrowser=true,
                    //RefreshTokenUsage
                    RequireConsent=false,
                    AlwaysIncludeUserClaimsInIdToken=true,
                    RefreshTokenUsage = TokenUsage.ReUse,
                    RefreshTokenExpiration = TokenExpiration.Absolute,
                    // Todo Remove this later - FOr testing only.
                  //  AccessTokenLifetime = 120,                    
                    AbsoluteRefreshTokenLifetime = 157700000  // 5 years
            };
        }

        private Client GetJarvisExtranetMvcClient()
        {
            return new Client
            {
                ClientId = "mg.jarvis.extranet",
                ClientName = "MG Jarvis Extranet Web Application",
                AllowedGrantTypes = GrantTypes.Hybrid,
                ClientSecrets = { new Secret("2C353098-643A-40B7-989C-C62582C47439".Sha256()) },
                RedirectUris = { $"{_appSettings.BaserUrls.ExtranetWeb}signin-oidc" },
                FrontChannelLogoutUri = $"{_appSettings.BaserUrls.ExtranetWeb}signout-oidc",
                PostLogoutRedirectUris = new List<string> { $"{_appSettings.BaserUrls.ExtranetWeb}signout-callback-oidc" },

                AllowedScopes = new List<string>
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "firstname",
                        "mg.jarvis.api.backoffice",
                        "mg.jarvis.api.extranet",
                  },
                AllowOfflineAccess = true,
                RequireConsent = false,
                AlwaysIncludeUserClaimsInIdToken = true,
                RefreshTokenUsage = TokenUsage.ReUse,
                RefreshTokenExpiration = TokenExpiration.Absolute,
                AbsoluteRefreshTokenLifetime = 157700000  // 5 years
            };
        }
    }

}