import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { OffersCarousel } from "../../components/OffersCarousel";
import useUser from "../../hooks/UserContext";
import { Banner, Container } from "./styles";

export function Home() {
  console.log(useUser)
  return (
    <main>
      <Banner>
        <h1>Seja Bem Vindo!</h1>
      </Banner>
      <Container>
        <div>
          <CategoriesCarousel />
          <OffersCarousel />
        </div>
      </Container>
    </main>
  );
} 