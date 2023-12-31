import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "hooks/useAuth"
import { TopLine } from "./AppBar.styled";


export const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <TopLine>
            <Navigation />
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </TopLine>
    )
}