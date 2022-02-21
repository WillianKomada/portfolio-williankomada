import { Experiences } from '../components/Experiences';
import { Footer } from '../components/Footer';
import { FormContact } from '../components/FormContact';
import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { LastProjects } from '../components/LastProjects';
import { Skills } from '../components/Skills';

import { HomeContainer } from '../styles/HomeStyles';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experiences />
        <LastProjects />
        <Skills />
        <FormContact />
      </main>

      <Footer />
    </HomeContainer>
  );
}
