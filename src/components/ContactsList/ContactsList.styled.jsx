import { styled } from "styled-components";

export const SectionList = styled.section`
    padding-top: 15px;
    padding-bottom: 15px;
`;

export const ContainerList = styled.div`
    padding-left: 15px;
    padding-right: 15px;  
`;

export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    max-width: 50%;
`;

export const ItemContact = styled.li`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ContactBlock = styled.div`
    display: flex;
    gap: 20px;
`;

export const NameContact = styled.h3`
    margin: 0;
`;

export const NumberContact = styled.p`
    margin: 0;
`;