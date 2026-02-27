import { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { api } from '../../services/api';
import { Container, ContainerItems, Title, CategoryButton } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';

export function CategoriesCarousel() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate()
  const { search } = useLocation()
  console.log(search)

  const queryParams = new URLSearchParams(search)
  const [activeCategory, setActiveCategory] = useState(() => {

    const categoryId = +queryParams.get('categoria')
    if (categoryId) {
      return categoryId
    }
    return 0
  })


  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      setCategories(data);
      console.log(data);
    }
    loadCategories();
  }, [])

  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Container>
      <Title>Categorias</Title>

      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisible={false}
        itemClass="carousel-item"
      >
        {categories.map((category) => (
          <ContainerItems key={category.id} imageUrl={category.url}>

            <CategoryButton
              onClick={() => {
                navigate(
                  {
                    pathname: '/cardapio',
                    search: `?categoria=${category.id}`
                  },

                  {
                    replace: true,
                  },
                )
              }}
            >
              {category.name}

            </CategoryButton>
          </ContainerItems>
        ))}
      </Carousel>

    </Container>
  );
}