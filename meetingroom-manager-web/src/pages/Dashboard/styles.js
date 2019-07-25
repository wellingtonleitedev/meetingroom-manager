import styled from 'styled-components'

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 90vh;
    width: 100%;
`
export const Menu = styled.ul`
    align-items: center;
    background-color: #FFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
    padding: 40px 20px;
    width: 100%;
`

export const Item = styled.li`
    border-bottom: 1px solid #ecd7d7;
    margin-bottom: 20px;

    :last-child{
        margin-bottom: 0;
    }
`