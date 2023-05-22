import Header from "../../components/header/header";
import { useQuery } from 'react-apollo';
import { GET_CONTINENTS } from "../../components/graphql/queries/continents";

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

    console.log('data', data)

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
                            <a>{continent.name} ({continent.code})</a>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Continents;
