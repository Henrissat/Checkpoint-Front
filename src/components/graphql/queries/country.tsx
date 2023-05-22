import { gql } from "apollo-boost";
const countryCode = "AF"

export const GET_COUNTRY = gql`
    query getCountry {
        countries(filter: {code: {eq: $countryCode}}) {
            capital
            currency
            name
            code
        }
    }
`