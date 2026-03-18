import {  SignOutIcon } from '@phosphor-icons/react';
import { useResolvedPath } from 'react-router-dom';

import Logo from '../../assets/logo.svg'
import { navLinks } from "./NavLinks";
import { Container, NavLink, NavLinkContainer, Footer} from './styles'
import { useUser } from '../../hooks/UserContext'


export function SideNavAdmin() {
    const { logout } = useUser();
    const { pathname } = useResolvedPath();
   
    return (
    <Container>
       <img src={Logo} alt='Hamburger Logo Devburger'/>
       <NavLinkContainer>
         {navLinks.map((link) => (
            <NavLink 
            key={link.id} 
            to={link.path}
              $isActive={ pathname === link.path }
            >
             {link.icon}
               <span>{link.label}</span>
            </NavLink>
          ))}
          </NavLinkContainer>
          <Footer>
             <NavLink  to="/login" onClick={logout}>
               <SignOutIcon />
               <span>Sair</span>
             </NavLink>
          </Footer>
    </Container>
   );
}