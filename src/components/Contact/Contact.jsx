import { ButtonDelete } from "components/Button/Button.styled";
import { ContactBlock, NameContact, NumberContact } from "components/ContactsList/ContactsList.styled";
import { useDispatch } from "react-redux"
import { deleteContact } from "redux/contacts/operations";
import { AiOutlineDelete } from "react-icons/ai";

export const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();
    
    const handleDelete = (event) => {
        dispatch(deleteContact(event.currentTarget.value));
    }

    return (
            <>
                <ContactBlock>
	                <NameContact>{name}</NameContact>
	                <NumberContact>{number}</NumberContact>
                </ContactBlock>
                <ButtonDelete type="button" value={id} onClick={handleDelete}><AiOutlineDelete/></ButtonDelete>
            </>
    )
}