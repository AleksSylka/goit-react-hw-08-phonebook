import { ContactAdded } from "components/ContactAdded/ContactAdded";
import { ContactsList } from "components/ContactsList/ContactsList";
import { useEffect } from "react";
import { ColorRing } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectLoading } from "redux/contacts/selectors";

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <ContactAdded />
            <div style={{
                padding: "20px",
                display: "flex",
                justifyContent: "center",
            }}>
                <ColorRing
                    visible={isLoading}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    colors={['#301ddc', '#1870f3', '#26f6b4', '#f6cf0f', '#f52f1d']}
                />
            </div>
            
            <ContactsList/>
        </>
    )
}