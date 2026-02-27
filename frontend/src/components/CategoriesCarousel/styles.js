import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Container = styled.div`
   .carousel-item {
    padding-right: 40px;
   }
    padding-left: 40px;
    overflow-x :hidden;
    
    .react-multi-carousel-list{
        overflow: visible;
    }

    .react-multiple-carousel_arrow--left{
        left: 15px;
        top: 10px; 
    }
    .react-multiple-carousel_arrow--right{
        right: 15px;
        top: 10px; 
    }
`;

export const Title = styled.h2`
font-size: 32px;
font-weight: 800;
color: #9858a6;
padding-bottom: 12px;
position: relative;
text-align: center;
margin-bottom: 40px;

&::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background: #9858a6;
    left: calc(50% - 28px);
}
`;

export const ContainerItems = styled.div`
    background: url('${(props) => props.imageUrl}');
    background-position: center;
    background-size: cover;

    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 100%;
    height: 250px;
    border-radius: 20px;

  
`;

export const CategoryButton = styled(Link)`
  color: #ffffff;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 22.5px;
    font-weight: 500;
    margin-top: 50px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
        background-color: #9858a6;
    }
`
