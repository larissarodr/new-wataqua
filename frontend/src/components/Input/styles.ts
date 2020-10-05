import styled from 'styled-components';

export const Container = styled.div`
  background: #f9f9f9;
  border-radius: 10px;
  border: 2px solid #f9f9f9;
  padding: 16px;
  width: 100%;
  color: #000;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #000;

    &::placeholder {
      color: #000;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
