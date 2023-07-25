import { ButtonContact } from 'components/Button/Button.styled';
import { ContainerForm, SectionForm, FormBlock, FormInput, LabelForm } from 'components/ContactAdded/ContactAdded.styled';
import { Validation } from 'components/Validation/Validation.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import * as Yup from 'yup';

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event, { resetForm }) => {
        dispatch(register(event));
        resetForm();
    }

    return (
        <SectionForm>
            <ContainerForm>
                <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    password: Yup.string()
                        .required('No password provided.') 
                        .min(8, 'Password is too short - should be 8 chars minimum.')
                        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
                })}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, errors, touched }) => (
                    <FormBlock>
                        <LabelForm htmlFor="userName">Username
                            <FormInput type="text" name="name" />
                            {errors.name && touched.name ? (<Validation>{errors.name}</Validation>) : null}
                        </LabelForm>
                        <LabelForm htmlFor="emailAddress">Email Address
                            <FormInput type="email" name="email" />
                            {errors.email && touched.email ? (<Validation>{errors.email}</Validation>) : null}
                        </LabelForm>
                    
                        <LabelForm htmlFor="password">Password
                            <FormInput type="password" name="password" />
                            {errors.password && touched.password ? (<Validation>{errors.password}</Validation>) : null}
                        </LabelForm>
                    
                        <ButtonContact type="submit" disabled={isSubmitting}>
                            Submit
                        </ButtonContact>
                    </FormBlock>
                )}
            </Formik>
            </ContainerForm>
        </SectionForm>
            
    );
};