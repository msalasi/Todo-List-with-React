import styled from 'styled-components';

export const DivTareas = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 80% 10% 10%;
    grid-template-rows: 1fr;
    margin: 10px auto;
    align-items: center;
    backdrop-filter: blur(10px);
    background: #ffffff40!important;
    padding: 10px 0px;
    border-radius: 10px;
    border: 1px solid #ffffff47;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
export const SpanName = styled.span`
    color: white;
`

export const FormEdit = styled.form`
    align-items: center;
    backdrop-filter: blur(10px);
    background: #ffffff40!important;
    border-radius: 10px;
    width: 100%;
    display: grid;
    grid-template-columns: 80% 15%;
    grid-template-rows: 1fr;
    margin: 10px auto;
    padding: 10px 0;
    justify-content: space-around;
    border: 1px solid #ffffff47;
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



