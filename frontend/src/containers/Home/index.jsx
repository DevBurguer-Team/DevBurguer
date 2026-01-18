import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { Banner,  Container } from "./styles";

export function Home() {
  return (
    <main>
      <Banner>
      <h1>Seja Bem Vindo!</h1>
      </Banner>
     <Container>
      
         <CategoriesCarousel />
         <div>Carrosel Produtos</div>
       
     </Container>
    </main>
  );
}