import styled from 'styled-components';

export const Container = styled.div`

    width: 1000px;
    max-width: 100%;
    padding: 0 20px;
    margin: 0 40rem;

`

export const SubContainer = styled.div`
    display: flex;
    flex-direction : ${({ id }) => id === 1 ? 'column' : "row"}
    gap: 3px;
    width: 50%;
`