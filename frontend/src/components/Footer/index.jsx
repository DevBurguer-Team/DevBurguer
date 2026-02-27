import { Container } from './styles';

export function Footer() {
    const yearDate = new Date().getFullYear();

    return (
        <Container>
            <p>
                Desenvolvido por DevClub - {yearDate} - Todos os direitos reservados{' '}
            </p>
        </Container>
    );
}