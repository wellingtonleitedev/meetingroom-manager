import styled from 'styled-components'

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 90vh;
    width: 100%;
`
export const Form = styled.form`
    background-color: #FFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    padding: 20px;
    width: 100%;

    h5{
        color: #f04141;
        margin-bottom: 10px;
        text-align: center;
    }

    input{
        background-color: #fff;
        border: 0;
        margin-bottom: 10px;
        padding: 10px 20px;
        width: 100%;
    }

    .react-datepicker__input-container{
        width: 100%;
    }
`

export const TitleInput = styled.input`
    margin-bottom: 10px;
`

export const Select = styled.select`
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px 20px;
`

export const Button = styled.button`
  border: 0;
  padding: 10px;
`