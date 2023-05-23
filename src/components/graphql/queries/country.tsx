import { gql } from "@apollo/client";

export const GET_COUNTRY = gql`
    query getCountry($code: ID!){
        country(code: $code) {
            capital
            currency
            name
            code
        }
    }
`