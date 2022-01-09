import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 50px;
    background: red;
    display: flex;
    border-top: 5px solid #1d1d1d;
    align-items: center;
    position: fixed;
    bottom: 0;
    justify-content: center;

    #drewSmile {
        width: 25px;
        padding: 5px;
    }

    span{
        display: flex;
        align-items: center;
        font-size: 17px;
        color: white;
        padding: 5px;
    }
   
`