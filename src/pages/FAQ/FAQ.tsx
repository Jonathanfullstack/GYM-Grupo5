import { Accordion } from "../../components/Accordion";
import { AccordionContainer } from "../../components/AccordionContainer";
import { Layout } from "../../components/Layout";
import { Section } from "../../components/Section";
import { Title } from "../../components/Title";
import { Container } from "./styles";

export function FAQ() {
  return (
    <Layout>
      <Container>
        <Section>
          <Title>Fichas de Treino - Tech Fit</Title>
          <AccordionContainer>
            <Accordion
              title="Dia A - Peito, Ombros e Tríceps"
              content={
                <div>
                  <h3>Peito:</h3>
                  <ul>
                    <li>
                      Supino reto (barra ou halteres): 4 séries de 8-12
                      repetições
                    </li>
                    <li>
                      Supino inclinado (halteres): 3 séries de 10-12 repetições
                    </li>
                    <li>
                      Crucifixo inclinado (halteres): 3 séries de 10-12
                      repetições
                    </li>
                    <li>Crossover no cabo: 3 séries de 12-15 repetições</li>
                  </ul>
                  <h3>Ombros:</h3>
                  <ul>
                    <li>
                      Desenvolvimento com halteres: 4 séries de 8-12 repetições
                    </li>
                    <li>
                      Elevação lateral (halteres): 3 séries de 12-15 repetições
                    </li>
                    <li>
                      Elevação frontal (halteres): 3 séries de 12-15 repetições
                    </li>
                  </ul>
                  <h3>Tríceps:</h3>
                  <ul>
                    <li>
                      Tríceps no pulley (barra reta ou corda): 4 séries de 10-12
                      repetições
                    </li>
                    <li>
                      Tríceps francês (halteres): 3 séries de 10-12 repetições
                    </li>
                    <li>Mergulho em banco: 3 séries de 12-15 repetições</li>
                  </ul>
                </div>
              }
            />

            <Accordion
              title="Dia B - Costas e Bíceps"
              content={
                <div>
                  <h3>Costas:</h3>
                  <ul>
                    <li>
                      Puxada na polia alta (pegada aberta): 4 séries de 8-12
                      repetições
                    </li>
                    <li>
                      Remada baixa (com cabo): 3 séries de 10-12 repetições
                    </li>
                    <li>
                      Barra fixa (assistida, se necessário): 3 séries até a
                      falha
                    </li>
                    <li>
                      Pullover no cabo ou halter: 3 séries de 12-15 repetições
                    </li>
                  </ul>
                  <h3>Bíceps:</h3>
                  <ul>
                    <li>
                      Rosca direta (barra reta ou W): 4 séries de 10-12
                      repetições
                    </li>
                    <li>
                      Rosca alternada (halteres): 3 séries de 10-12 repetições
                    </li>
                    <li>
                      Rosca martelo (halteres): 3 séries de 12-15 repetições
                    </li>
                  </ul>
                </div>
              }
            />

            <Accordion
              title="Dia C - Pernas e Abdômen"
              content={
                <div>
                  <h3>Pernas:</h3>
                  <ul>
                    <li>Agachamento livre: 4 séries de 8-12 repetições</li>
                    <li>Leg press: 3 séries de 10-12 repetições</li>
                    <li>Cadeira extensora: 3 séries de 12-15 repetições</li>
                    <li>Cadeira flexora: 3 séries de 12-15 repetições</li>
                    <li>
                      Elevação de panturrilhas: 4 séries de 15-20 repetições
                    </li>
                  </ul>
                  <h3>Abdômen:</h3>
                  <ul>
                    <li>
                      Abdominal supra (tradicional): 3 séries de 20-30
                      repetições
                    </li>
                    <li>Prancha isométrica: 3 séries de 30-60 segundos</li>
                    <li>
                      Abdominal oblíquo (toque no calcanhar): 3 séries de 20
                      repetições de cada lado
                    </li>
                  </ul>
                </div>
              }
            />
          </AccordionContainer>
        </Section>
      </Container>
    </Layout>
  );
}
