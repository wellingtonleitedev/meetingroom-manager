import styled from 'styled-components'

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-top: 100px;
    height: 100vh;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    width: 100%;

    .datepicker{
        width: 145px;
    }
`

export const TitleInput = styled.input`
    margin-bottom: 10px;
`

export const Select = styled.select`
    margin-bottom: 10px;
`

export const TimeSelect = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px 0;
`

export const Button = styled.button`
  border: 0;
  padding: 10px;
`