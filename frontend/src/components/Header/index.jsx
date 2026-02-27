import { Container, Navigation, HeaderLink, LinkContainer, Options, Profile, Content } from "../Header/styles";
import { UserCircle, ShoppingCart } from "@phosphor-icons/react";
import { useNavigate, useResolvedPath } from "react-router-dom";
import useUser from "../../hooks/UserContext";
export function Header() {
    const navigate = useNavigate()
    const { pathname } = useResolvedPath()
    const { logout, userInfo } = useUser()
    console.log(pathname)
    function logoutUser() {
        logout()
        navigate('/login')
    }

    return (
        <Container>

            <Content>
                <Navigation>
                    <div>
                        <HeaderLink to="/" $isActive={pathname === '/'}>Home
                        </HeaderLink>
                        <hr />
                        <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>Cardápio
                        </HeaderLink>
                    </div>
                </Navigation>
                <Options>
                    <Profile>
                        <UserCircle color="#fff " size={24} />
                        <div>
                            <p>Olá, <span>{userInfo.name}</span></p>
                            <Logout onClick={logoutUser}>Sair</Logout>
                        </div>

                    </Profile>
                    <LinkContainer>
                        <HeaderLink to="/carrinho">Carrinho
                            <ShoppingCart color="#fff" size={24} />
                        </HeaderLink >
                    </LinkContainer>
                </Options>

            </Content>

        </Container>
    )
}