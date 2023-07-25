import { Link } from "components/Link/Link.styled";

export const AuthNav = () => {
    return (
        <div>
            <Link to="/register">Register</Link>
            <Link to="/login">
                Log In
            </Link>
        </div>
    )
}