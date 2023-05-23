import { useQuery } from "@apollo/client";
import { Link, useLocation } from "react-router-dom";
import { GET_COUNTRY } from "../../components/graphql/queries/country";
import Header from "../../components/header/header";

const DetailsCountry = () => {

    const location = useLocation();
    let code = location.state.code;
    console.log(code)

    const { loading, error, data } = useQuery(GET_COUNTRY,{
        variables: {code : code}
    });


    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error.message}</p>;
    }

    console.log(data.country)

    if (data.country) {
        const { capital, currency, name, code } = data.country;
        return (
            <div className="">
                <Header/>
                <div className="">
                    <div className="">
                        <h3 className="">
                            DETAILS DU PAYS
                        </h3>
                        <div>
                            <p>Capital: {capital}</p>
                            <p>Currency: {currency}</p>
                            <p>Name: {name}</p>
                            <p>Code: {code}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

return <p>Loading...</p>;
}

export default DetailsCountry;
