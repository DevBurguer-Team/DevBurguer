import Logo from '../../assets/logo.svg';
import { CartItems, CartResume } from './frontend/src/components';
import { Banner, Container, Content, Title } from './frontend/src/containers/Cart/styles';

export function Cart() {
    return (
        <Container>
            <Banner>
                <img src={Logo} alt="logo devburger" />
            </Banner>
            <Title>Checkout - Pedido</Title>;
            <Content>
                <CartItems />
                <CartResume />
            </Content>
        </Container>
    );
}