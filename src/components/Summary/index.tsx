import EntradaImg from '../../assets/entrada.svg';
import SaidaImg from '../../assets/saida.svg';
import CifraoImg from '../../assets/cifrao.svg';

import { Container } from "./styles";

export function Summary(){
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={EntradaImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={SaidaImg} alt="Entradas" />
                </header>
                <strong>R$-500,00</strong>
            </div>
            
            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={CifraoImg} alt="Entradas" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    );
}