import { Banner,  Container } from "./styles";

export function Home() {
  return (
    <main>
      <Banner>
      <h1>Seja Bem Vindo!</h1>
      </Banner>
     <Container>
      
         <div>Carrosel Categorias</div>
         <div>Carrosel Produtos</div>
       
     </Container>
    </main>
  );
}