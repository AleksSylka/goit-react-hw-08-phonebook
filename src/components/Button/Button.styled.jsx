import styled from 'styled-components';

export const ButtonTop = styled.button`
    background-color: rgba(255, 255, 255, 0.881);
    border-radius: 8px;
    border-width: 0;
    color: #333333;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 500;
    list-style: none;
    margin: 0;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 0px;
    padding-bottom: 0px;
    text-align: center;
    transition: all 200ms;
    vertical-align: baseline;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &:hover {
        background-color: #f7fafa;
    }
    &:focus {
        border-color: #008296;
        box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
        outline: 0;
    }
`;

export const ButtonContact = styled.button`

  background-image: linear-gradient(#42A1EC, #301ddc);
  border: 1px solid #0077CC;
  border-radius: 4px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  direction: ltr;
  display: block;
  font-family: sans-serif;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -.022em;
  line-height: 1.47059;
  min-width: 30px;
  overflow: visible;
  padding: 4px 15px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  /* vertical-align: baseline; */
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;

&:disabled {
  cursor: default;
  opacity: .3;
}

&:hover {
  background-image: linear-gradient(#51A9EE, #147BCD);
  border-color: #1482D0;
  text-decoration: none;
}

&:active {
  background-image: linear-gradient(#3D94D9, #0067B9);
  border-color: #006DBC;
  outline: none;
}

&:focus {
  box-shadow: rgba(131, 192, 253, 0.5) 0 0 0 3px;
  outline: none;
}
`;

export const ButtonDelete = styled.button`

  background-image: linear-gradient(#42A1EC, #301ddc);
  border: 1px solid #0077CC;
  border-radius: 50%;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  font-size: 24px;
  padding: 5px 8px;
  overflow: visible;
  text-align: center;
  touch-action: manipulation;
  white-space: nowrap;

&:disabled {
  cursor: default;
  opacity: .3;
}

&:hover {
  background-image: linear-gradient(#51A9EE, #147BCD);
  border-color: #1482D0;
  text-decoration: none;
}

&:active {
  background-image: linear-gradient(#3D94D9, #0067B9);
  border-color: #006DBC;
  outline: none;
}

&:focus {
  box-shadow: rgba(131, 192, 253, 0.5) 0 0 0 3px;
  outline: none;
}
`;