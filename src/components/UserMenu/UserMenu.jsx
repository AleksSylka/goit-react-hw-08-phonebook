import { ButtonTop } from "components/Button/Button.styled";
import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux"
import { logOut } from "redux/auth/operations";
import { Greeting, UserBlock } from "./UserMenu.styled";
import { AiOutlineLogout } from "react-icons/ai";


export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <UserBlock>
            <Greeting>Welcome, {user.name}</Greeting>
            <ButtonTop type="button" onClick={() => dispatch(logOut())}>
                <AiOutlineLogout/>
                Logout
            </ButtonTop>
        </UserBlock>
    );
};