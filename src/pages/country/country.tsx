import { useLazyQuery, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../../components/header/header";
import { gql } from "@apollo/client";
import { GET_CONTINENT } from "../../components/graphql/queries/continent";




const Country = () => {

    const location = useLocation();
    const code = location.state.code;

    const { loading, error, data } = useQuery(GET_CONTINENT,{
        variables: {code: code},
    });


    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error.message}</p>;
    }


    if (data) {

        return (
            <div className="">
                <Header />
                <div className="">
                <div className="">
                    <h3 className="">
                    PAYS
                    </h3>
                    <ul>
                        {data.continent.countries.map((countries: any) => (
                        <li key={countries.code}>
                            <Link to={`/details/${countries.code}`} state={{ code: countries.code }}>{countries.name} ({countries.code})</Link>
                        </li>
                        ))}
                    </ul>
                </div>
                </div>
            </div>
        );
    }

    return <p>Loading...</p>;
};

export default Country;
