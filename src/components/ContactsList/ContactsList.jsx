import { Contact } from "components/Contact/Contact";
import { useSelector } from "react-redux"
import { selectAllContacts } from "redux/contacts/selectors"
import { List, SectionList, ContainerList, ItemContact } from "./ContactsList.styled";
import { FilterForm } from "components/FilterForm/FilterForm";
import { getFiltersContacts } from "redux/filter/selectors";

const getFilteredContacts = (contacts, queryFilter) => {
    if (!queryFilter) {
        return contacts
    }
    return contacts.filter(({ name }) => name.toLowerCase().includes(queryFilter.toLowerCase()));
};

export const ContactsList = () => {

    const contacts = useSelector(selectAllContacts);
    const filter = useSelector(getFiltersContacts);
    const filteredContacts = getFilteredContacts(contacts, filter);

    return (
        <SectionList>
            <ContainerList>
                {contacts && <h2>Your list contacts</h2>}
                {contacts && <FilterForm/>}
                <List>
                    {filteredContacts.map(({ name, number, id }) => (
                        <ItemContact key={id}>
                            <Contact name={name} number={number} id={id} />
                        </ItemContact>
                    ))}
                </List>
            </ContainerList>
        </SectionList>
    )
};