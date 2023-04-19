import { gql } from "@apollo/client";

export const POST_REGISTER = gql`
  mutation Register($registerCred: registerCred) {
    register(registerCred: $registerCred) {
      access_token
      username
    }
  }
`;

export const POST_LOGIN = gql`
  mutation Login($loginCred: loginCred) {
    login(loginCred: $loginCred) {
      access_token
      username
    }
  }
`;
