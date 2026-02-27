import PropTypes from 'prop-types';
import { Container, CardImage } from './styles';

export function CardProduct({ product }) {
    console.log(product)
    return (
        <Container  >
            <CardImage src={product.url} alt={product.name}>
                <div>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                </div>

            </CardImage>
        </Container >
    );
}
CardProduct.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
}; 