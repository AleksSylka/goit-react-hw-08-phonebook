import { Link } from "components/Link/Link.styled";
import { useAuth } from "hooks/useAuth";
/* import { NavLink } from "react-router-dom"; */


export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav>
            <Link to="/">
                Home
            </Link>
            {isLoggedIn && (<Link to="/contacts">
                Contacts
            </Link>)}
        </nav>
    )
}