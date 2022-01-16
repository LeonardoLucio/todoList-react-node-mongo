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
        padding-left: 10px;
    }
    display: flex;
    align-items: center;
`

export const RightSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    padding-left: 320px;

    a{
        text-decoration: none;
        color: white;
        font-size: 13px;
        font-weight: bold;
        &:hover{
            color:#2C2F30;
        }
    }
    #notification {
     img {
     width: 25px;   

     }
     span {
         font-size: 12px;
        background: #fff;
        color: red;
        border-radius: 50%;
        padding: 0.5px 4.5px;
        position: relative;
        top: -18px;
        right: 11px;
    }
    &:hover{
        opacity: 0.5;
    }
    }
    
    hr{
        height:50%; 
        display: flex;
        margin: 8px, 8px;
        opacity: 0.5;
    }
`