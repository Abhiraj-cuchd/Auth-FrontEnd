import styled from 'styled-components';



export const InputBar = styled.div`
    width: 45%;
    border: 1px solid grey;
    display: flex;
    justify-content:space-between;
    padding: 0.5rem 1.5rem;
    align-items: center;
    gap: 2px;
    background-color: #fff;
    height: 28px;
    border-radius: 50px;
    margin-right: 4rem;
    margin-bottom: 1rem;
    position: relative;
    

    & > div {
        display: block;
    }

   
 
    input {
       text-decoration: none
        height: 50%;
        border: none;
        outline: none;
    } 

    input::placeholder {
        color: black;
        font-size: 1rem;
        opacity: 1; /* Firefox */
      }
    
    select {
        text-decoration: none
        height: 50%;
        border: none;
        outline: none;
        align-self: end;
    }

`


export const SelectBar = styled.div`
    width: 75%;
    border: 1px solid grey;
    display: flex;
    justify-content:space-between;
    padding: 0.5rem 1.5rem;
    align-items: center;
    gap: 2px;
    background-color: #fff;
    height: 28px;
    border-radius: 50px;
    margin-right: 4rem;
    margin-bottom: 1rem;
    position: relative;
    

    & > div {
        display: block;
    }

   
 
    input {
       text-decoration: none
        height: 50%;
        border: none;
        outline: none;
    } 

    input::placeholder {
        color: black;
        font-size: 1rem;
        opacity: 1; /* Firefox */
      }
    
    select {
        text-decoration: none
        height: 50%;
        border: none;
        outline: none;
        align-self: end;
    }
`



