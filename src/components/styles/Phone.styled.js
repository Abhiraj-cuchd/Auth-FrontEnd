import styled from 'styled-components';

export const PhoneDiv = styled.div`

    img {
        height: 100px;
        widht: 70px;
    }

`

export const VerifyDiv = styled.div`

    & > div {
        background-color: #FFE569;
        margin-bottom:  1rem;
        margin-top:  1rem;
        padding: 0.7rem 0.7rem;
        border-radius: 50px;
        display: flex;
        align-items: center;
    }
    
`

export const NumberTag = styled.div`
    display: flex;
    margin-top: 3rem;
    width: 50%;
    justify-content : space-between;

    

    span {
        color: #f94327;
    }

    img {
        height: 50px;
        width: 50px;
    }
`