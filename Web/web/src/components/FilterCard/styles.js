import styled from 'styled-components'

export const Container = styled.div`
width: 260px;
height: 60px;
background: red;
border-radius: 8px;
padding: 10px;
display: flex;
flex-direction: column;
justify-content: space-around;
    img{
        width: 20px;
        height: 20px;
        
    }

    span{
        color:white;
        font-weight: bold;
        align-self: end;
    }

    &:hover{
        background: #2C2F30;
    }
`