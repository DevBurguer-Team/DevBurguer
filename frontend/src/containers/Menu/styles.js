import styled from "styled-components";
import BannerHamburguer from '../../assets/banner-hamburger.svg';
import Background from '../../assets/background.svg';
import { Link } from "react-router-dom";

export const Container = styled.div`
width: 100%;
min-height:100vh;
background-color: #f0f0f0;
height: 400px;
width: 100%;
background: linear-gradient(
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.6)
), url('${Background}');
`

export const Banner = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 480px;
width: 100%;
background:url('${BannerHamburguer}');
background-color:#1f1f1f;
background-position:center;
background-size:cover;
position: relative;


h1{
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    line-height: 60px;
    color: #f4f4f4;
    position: absolute;
    right: 20%;
    top: 30%;
}

span{
    display: block;
    color: #fff;
    font-size:20px;
}


`

export const CategoryMenu = styled.div`
display: flex;
justify-content: center;
gap: 50px;
margin-top: 30px;
`

export const categoryButton = styled(Link)`
text-decoration: none;
cursor: pointer;
color: ${props => props.$isActiveCategory ? '#9858a6' : '#9758ad'};
font-size: 20px;
font-weight: 500;
padding-bottom: 5px;
line-height: 20px;
background: none;
border: none;
border-bottom: ${(props) => props.$isActiveCategory && '3px solid #9758ad'};

`
export const ProductsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
padding: 40px;
justify-content: center;
max-width: 1280px;
gap: 60px;
margin: 50px auto 0;
`

