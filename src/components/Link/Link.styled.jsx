import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    font-family: sans-serif;
    text-decoration: none;
    padding: 10px;

    &:active {
        color: #04ffee;
    }
`