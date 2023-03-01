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