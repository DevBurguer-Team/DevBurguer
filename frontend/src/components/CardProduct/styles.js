import styled from "styled-components";


export const Container = styled.div`
.carousel-item{
    padding-right:40px;
}
overflow-x:hidden;
padding-left: 40px;
display: flex;
flex-direction: column; 
align-items: center;
gap: 20px;
padding: 20px;
border-radius: 10px;
background: #fff;
box-shadow: 0px 0px 5px 15px rgba(82, 26, 26, 0.25);
position: relative;
div{
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: grab;
    
}
p{
font-size: 18px;
color: #ff8c05;
font-weight: 700;
line-height: 20px;

}
strong{

}
`

export const CardImage = styled.div`
height: 100px;
position: absolute;
top: -50px;
z-index:999999999999;
`