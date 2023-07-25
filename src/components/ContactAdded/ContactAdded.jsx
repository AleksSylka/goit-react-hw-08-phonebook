import { Formik } from "formik";
import { Toaster, toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux"
import { addContact } from "redux/contacts/operations";
import { selectAllContacts } from "redux/contacts/selectors";
import * as Yup from 'yup';
import { LabelForm, FormInput, SectionForm, ContainerForm, FormBlock } from "./ContactAdded.styled";
import { ButtonContact } from "components/Button/Button.styled";
import { Validation } from "components/Validation/Validation.styled";

export const ContactAdded = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectAllContacts);

    const phoneValidation = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const handleSubmit = (values, { resetForm }) => {
        if (values.name === "" || values.phone === "") {
            return toast.error('Please enter Name and phone number')
        };
        const check = contacts.find(contact => contact.name.toLowerCase() === values.name.toLowerCase());
        if (check) {
            resetForm();
            return toast.error('This contact has already been added to your phonebook');
        }
        dispatch(addContact(values));
        resetForm();
    }

    return (
        <SectionForm>
            <ContainerForm>
            <Formik
                initialValues={{
                    name: '',
                    number: '',
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    number: Yup.string().matches(phoneValidation, 'Phone number is not valid'),
                })}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, errors, touched }) => (
                    <FormBlock>
                        <LabelForm htmlFor="name">Name
                            <FormInput type="text" name="name" />
                            {errors.name && touched.name ? (<Validation>{errors.name}</Validation>) : null}
                        </LabelForm>
                    
                        <LabelForm htmlFor="number">Number
                            <FormInput type="phone" name="number" />
                            {errors.number && touched.number ? (<Validation>{errors.number}</Validation>) : null}
                        </LabelForm>
                    
                        <ButtonContact type="submit" disabled={isSubmitting}>
                            Add Contact
                        </ButtonContact>
                    </FormBlock>
                )}
            </Formik>
            <Toaster
                position="top-right"
                reverseOrder={false}
                />
                </ContainerForm>
        </SectionForm>
    )
}