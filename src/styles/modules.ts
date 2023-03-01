import styled from "styled-components";

export const RowFlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ColumnFlexBox = styled(RowFlexBox)`
  flex-direction: column;
`

export const ErrorMessage = styled.span`
  color: red;
  font-weight: bold;
  font-size: 11px;
`;

export const Title = styled.h1`
  color:${props=>props.theme.accentColor};
  font-size: 16px;
  font-weight: bold;
`;

export const SubTitle = styled.h2`
  color: ${props => props.theme.mainTextColor};
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  background-color: #cd84f1;
  border: none;
  border-radius: 5px;
  height: 20px;
  color: ${props => props.theme.mainBgColor};

  :hover {
    transform: scale(1.2);
  }

  transition: transform 0.3s ease-out;
`

export const Wrapper = styled(ColumnFlexBox)`
  margin-top: 20px;
  width: 400px;
  padding: 10px 0 20px 0;
  justify-content: space-evenly;
`;