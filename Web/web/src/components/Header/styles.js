import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: red;
    display: flex;
    border-bottom: 5px solid #1d1d1d;

`
export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    
    img {
        width: 170px;
        height: 55px;
        padding-left: 5px;
    }
    display: flex;
    align-items: center;
`

export const RightSide = styled.div`
    width: 50%;
    height: 70px;
    
    a{
        text-decoration: none;
        color: white;
    }
    img {
    width: 40px;   

     }
    display: flex;
    align-items: center;
    justify-content: flex-end;

    
    hr{
        height: 80%; 
        display: flex;

    }
`