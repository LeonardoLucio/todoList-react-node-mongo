import styled from 'styled-components'

export const Container = styled.div`
   
`

export const FilterArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 30px;

    button{
        background: none;
        border: none;
    }
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 65px;
    flex-wrap: wrap;
    margin: 5px;
`


export const Title = styled.div`
    width: 100%;
    border-bottom: 1px solid red;
    justify-content: center;
    display: flex;
    margin-bottom: 30px;

    h3{
        color: red;
        position: relative;
        top: 30px;
        background: #fff;
        padding: 0 10px;
    }
`