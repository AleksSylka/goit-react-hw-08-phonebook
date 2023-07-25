import { Field, Form } from 'formik';
import styled from 'styled-components';

export const LabelForm = styled.label`

    color: #353535;
	font-size: 1.5em;
	justify-content: center;
	display: flex;
    align-items: center;
    flex-direction: column;
	font-weight: 500;
	transition: .5s ease-in-out;
    
`;

export const FormInput = styled(Field)`
    width: 70%;
	height: 20px;
	background: #e0dede;
	justify-content: center;
	display: flex;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
	padding: 10px;
	border: none;
	outline: none;
	border-radius: 5px;
`;

export const SectionForm = styled.section`
    padding-top: 15px;
    padding-bottom: 15px;
`;

export const ContainerForm = styled.div`
    padding-left: 15px;
    padding-right: 15px;
    
`;

export const FormBlock = styled(Form)`
    max-width: 50%;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid #4e4d4d;
    border-radius: 5px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;



