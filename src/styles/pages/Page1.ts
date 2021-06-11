import styled from "styled-components";
type Props = {
    divLeft:string,
}

export const Container1 =  styled.div.attrs((props:Props) => ({
    divLeft: props.divLeft
}))`
    position: relative;
    width: 100vw;
    height: 50vh;
    background-color: red;
    left: ${props => props.divLeft};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: left 5s ease-in-out;
`
export const Container2 = styled.div`
    width: 100vw;
    height: 50vh;
    background-color: black;

`
export const Container3 = styled.div`
    width: 100vw;
    height: 50vh;
    background-color: green;

`
export const Container4 = styled.div`
    width: 100vw;
    height: 50vh;
    background-color: yellow;

`
