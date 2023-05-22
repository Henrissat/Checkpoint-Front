import { gql } from "apollo-boost";
const continentCode = "AF"

export const GET_CONTINENT = gql`
    query {
        continent(code: $continentCode) {
            countries {
            name
            }
        }
    }
`