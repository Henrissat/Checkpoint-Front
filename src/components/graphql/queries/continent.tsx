import { gql } from "@apollo/client";

export const GET_CONTINENT = gql`
    query GetContinent($code: ID!){
        continent(code: $code) {
            countries {
                code
                name
            }
        }
    }
`