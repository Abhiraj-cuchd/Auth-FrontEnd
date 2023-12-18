import styled from 'styled-components';

export const StyledHeader = styled.div`
    width: 100%
`


export const UpperNav = styled.div`
    display: flex;
    width:100%;
    justify-content: space-between;
    align-items-center;
    height: 50px;
    background-color: #f94327;
    background-image: linear-gradient(316deg, #f94327 0%, #ff7d14 74%);
`

export const Refer = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    color: #272829;
`

export const Pincode = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    color: #fff;
    margin-right: 1rem;

    img {
        height: 30px;
        width: 40px;
        border-radius: 50%
    }
`

export const MidNav = styled.div`
    display: flex;
    background-color: #F5E8B7;
    justify-content: space-evenly;
    align-items: center;
    height: 70px;
    box-shadow: 0 6px 3px -3px rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid grey;
    margin-bottom: 0.2rem;

    img {
        height: 60%;
    }
`

export const SearchBar = styled.div`
    width: 300px;
    border: 2px solid orange;
    display: flex;
    justify-content:space-between;
    padding: 0 1.5rem;
    align-items: center;
    gap: 2px;
    background-color: #fff;
    height: 28px;
    border-radius: 50px;

    input {
        text-decoration: none
        height: 50%;
        border: none;
        outline: none;
    }

`

export const Menu = styled.div`
    display: flex;

`

export const MenuIcons = styled.div`
    display: flex;
    align-Items: center;
    justify-content: center;
    gap: 1.5rem;
    font-size: 1.5rem;

    & > div {
        cursor: pointer;
    }

    span {
        font-size: 0.8rem;
    }
`

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > div {
        display: flex;
        align-items: center;
        gap: 5px;
    }
`

export const Line = styled.div`
    width: inherit
    background-color: #f94327;
    height: 10px;
`

export const BottomNav = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    background-color: #E5E5CB;
    
    ul {
        width: inherit;
        display: flex;
        align-items: center;
        justify-content: space-around;
        list-style-type: none;
    }
`




//F5E8B7