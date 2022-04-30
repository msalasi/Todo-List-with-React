import styled from 'styled-components';


export const Div = styled.div`
    text-align: center;
    margin: 10vh auto 10vh auto;
    width: 30%;


    @media (max-width: 1024px) {
        width: 60%;
    }

    @media (max-width: 640px) {
        width: 80%;
    }

    @media (max-width: 425px) {
        width: 100%;
    }
`
