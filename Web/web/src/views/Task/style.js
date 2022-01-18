import styled from 'styled-components'

export const Container = styled.div`
   
`
export const Form = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    
    span{
        font-size: 20px;
    }
    
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 450px;
    margin-top: 20px;
    margin-bottom: 70px;

`

export const Type = styled.div`
    button {
        border: none;
        background: none;
        cursor: pointer;

        &:hover{
            opacity: 0.5;


        
        }
        img {
            width: 50px;
        }
    }
    inative(){
        opacity: 0.5;
    }
`

export const Input = styled.div`
    width: 100%;
    margin-bottom: 20px;
   input {
        width: 100%;
        border: none;
        border-bottom: 1px solid red;
        
    }
`

export const TextArea = styled.div`
    width: 100%;
    textarea{
        width: 100%;
        border-color: red;
        height: 100px;
    }
    margin-bottom: 20px;
`

export const CheckBox = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   margin-bottom: 10px;
   span{
       font-size: 15px;
       font-weight: bold;
       Color: red;
       
   }
   button{
       position: relative;
       left: 320px;
       border: none;
       background: none;
       font-weight: bold;
       font-size: 15px;
       cursor: pointer;
   }
`
export const SaveTask = styled.div`
   width: 100%;
   button {
       width: 100%;
       height: 30px;
       background: red;
       border-radius: 10px;
       border: none;
       color: white;   
        font-weight: bold;

    }

`