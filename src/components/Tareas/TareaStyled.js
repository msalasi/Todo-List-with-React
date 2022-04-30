import styled from 'styled-components';

export const DivTareas = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 80% 10% 10%;
    grid-template-rows: 1fr;
    margin: 10px auto;
    align-items: center;
    background-color: #005086;
    padding: 10px 0px;
    border-radius: 10px;
    border: 1px solid #ffffff47
`
export const SpanName = styled.span`
    color: white;
`

export const FormEdit = styled.form`
    align-items: center;
    background-color: #005086;
    border-radius: 10px;
    width: 100%;
    display: grid;
    grid-template-columns: 80% 15%;
    grid-template-rows: 1fr;
    margin: 10px auto;
    padding: 10px 0;
    justify-content: space-around;
`
export const InputEditArea = styled.input`
    border: 1px solid #0000002b;
    height: 80%;
    border-radius: 5px;
    
`

export const ButtonEdit =  styled.button`
    border-radius: 5px;
    border: 1px solid #0000002b;
    background-color: #4646FF;
    color: white;
    font-size: 15px;
    padding: 5px;
`



