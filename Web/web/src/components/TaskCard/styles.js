import styled from 'styled-components'

export const Container = styled.div`
    width: 260px;
    height: 190px;
   
    display: flex;
    
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
    border-radius: 10px;
`
export const TopCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    img{
        width: 50px;
        height: 50px;

    }
    h1{
        font-size: 25px;
    }
`

export const BottomCard = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: space-around;


    strong{
        color: red;
    }

    span{
        color: #bdbebd
    }
`
