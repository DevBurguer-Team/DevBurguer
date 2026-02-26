import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
   background-color: #1f1f1f;
   width:100%;
   height: 72px;
   padding: 0 56px;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #000;
    color: #fff;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
`

export const Navigation = styled.nav`
    display: flex;
 align-items: center;
 justify-content: center;
 height: 72px;
 div{
    margin-left: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
 }
 hr{
    color: #fff;
    width: 2px;
    height: 20px;
    border: 1px solid #625E5E
 }
`

export const HeaderLink = styled(Link)`
    color: ${(props) => props.$isActive ? '#9758a6' : '#fff'};
    border-bottom: ${(props) => props.$isActive ? '2px solid #9758a6' : 'none'};
    font-size: 14px;

    font-weight: 300;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
        color: #9758a6;
    }
`

export const Profile = styled.div`
display: flex;
align-items: center;
gap: 12px;
font-size: 14px;
p{
    color: #fff;
    line-height: 90%;
    font-weight: 300;
}
span{
    font-weight: 700;
    color: #9758a6;

}
`
export const LinkContainer = styled.div`
    display:flex;
    align-items: center;
    gap:10px;
   
`

export const Options = styled.div` 
    
`

export const Logout = styled.div`
color: #ff3205;
text-decoration:none;
font-weight: 700;
cursor: pointer;
background-color: transparent;
border: none;

`