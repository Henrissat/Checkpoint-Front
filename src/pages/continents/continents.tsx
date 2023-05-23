import Header from "../../components/header/header";
import { useQuery } from '@apollo/client';
import { GET_CONTINENTS } from "../../components/graphql/queries/continents";
import { Link } from "react-router-dom";

// interface Continents {
//     code: string
//     name: string
// }

const Continents = () => {
    const { loading, error, data } = useQuery(GET_CONTINENTS);

    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error.message}</p>;
    }


    return (
        <div className="">
            <Header/>
            <div className="">
                <div className="">
                    <h3 className="">
                        WORLD
                    </h3>
                    <ul>
                        {data.continents.map((continent: any) => (
                        <li key={continent.code}>
                            <Link to={`/country/${continent.code}`} state={{ code: continent.code }}>{continent.name} ({continent.code})</Link>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Continents;
