
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div className="">
            <ul className="">
                <li><Link to="/">Continents</Link></li>
                <li><Link to="/country">Pays</Link></li>
                <li><Link to="/details">Details</Link></li>
            </ul>
        </div>
    );
}

export default NavBar;
