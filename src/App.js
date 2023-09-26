import { Amplify } from 'aws-amplify';
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);
// Amplify.configure({
//   "aws_project_region": process.env.REACT_APP_cognito_region,
//   "aws_cognito_identity_pool_id": process.env.AMPLIFY_IDENTITYPOOL_ID,
//   "aws_cognito_region": process.env.REACT_APP_cognito_region,
//   "aws_user_pools_id": process.env.AMPLIFY_USERPOOL_ID,
//   "aws_user_pools_web_client_id": process.env.AMPLIFY_WEBCLIENT_ID,
//   "oauth": {
//       "domain": process.env.REACT_APP_oauth_domain,
//       "scope": [
//           "phone",
//           "email",
//           "openid",
//           "profile",
//           "aws.cognito.signin.user.admin"
//       ],
//       "redirectSignIn": process.env.REACT_APP_redirect_sign_in,
//       "redirectSignOut": process.env.REACT_APP_redirect_sign_in,
//       "responseType": "code"
//   },
//   "federationTarget": "COGNITO_USER_POOLS",
//   "aws_cognito_username_attributes": [
//       "EMAIL"
//   ],
//   "aws_cognito_social_providers": [
//       "GOOGLE"
//   ],
//   "aws_cognito_signup_attributes": [],
//   "aws_cognito_mfa_configuration": "OFF",
//   "aws_cognito_mfa_types": [
//       "SMS"
//   ],
//   "aws_cognito_password_protection_settings": {
//       "passwordPolicyMinLength": 8,
//       "passwordPolicyCharacters": [
//           "REQUIRES_LOWERCASE",
//           "REQUIRES_NUMBERS",
//           "REQUIRES_SYMBOLS",
//           "REQUIRES_UPPERCASE"
//       ]
//   },
//   "aws_cognito_verification_mechanisms": [
//       "EMAIL"
//   ]

// });

// Amplify.configure({
//   aws_project_region: process.env.REACT_APP_cognito_region,
//   aws_cognito_identity_pool_id: process.env.REACT_APP_cognito_identity_pool_id,
//   aws_cognito_region: process.env.REACT_APP_cognito_region,
//   aws_user_pools_id: process.env.REACT_APP_user_pools_id,
//   aws_user_pools_web_client_id: process.env.REACT_APP_user_pools_web_client_id,
//   oauth: {
//     domain: process.env.REACT_APP_oauth_domain,
//     scope: ["aws.cognito.signin.user.admin", "openid", "phone", "profile", "email"],
//     redirectSignIn: process.env.REACT_APP_redirect_sign_in,
//     redirectSignOut: process.env.REACT_APP_redirect_sign_out,
//     responseType: "code",
//   },
//   federationTarget: "COGNITO_USER_POOLS",
//   aws_cognito_username_attributes: [],
//   aws_cognito_social_providers: [],
//   aws_cognito_signup_attributes: ["EMAIL"],
//   aws_cognito_mfa_configuration: "OFF",
//   aws_cognito_mfa_types: [],
//   aws_cognito_password_protection_settings: {
//     passwordPolicyMinLength: 8,
//     passwordPolicyCharacters: [],
//   },
//   aws_cognito_verification_mechanisms: ["EMAIL"],
//   cookieStorage: {
//     domain: process.env.REACT_APP_cookie_domain,
//     secure: !(process.env.NODE_ENV === "development"),
//     path: "/",
//     expires: 365,
//   },
// });

export default function App() {
  return (
    <Authenticator socialProviders={["google"]}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
