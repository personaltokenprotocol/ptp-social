import { gql } from "graphql-request";

const GetPing = gql`
  query Query {
    ping
  }
`;

export { GetPing };
