import { gql } from "apollo-boost";

export const GET_CONTINENTS = gql`
  query {
    continents {
      code
      name
    }
  }
`