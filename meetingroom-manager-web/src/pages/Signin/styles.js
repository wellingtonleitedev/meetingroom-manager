import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  background-color: #FFF;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  padding: 20px;
  width: 100%;

  h5{
    color: #f04141;
    margin-bottom: 10px;
    text-align: center;
  }
`;

export const Input = styled.input`
  background-color: #fff;
  border: 0;
  margin-bottom: 10px;
  padding: 10px 20px;
`;

export const Button = styled.button`
  border: 0;
  padding: 10px;
`


