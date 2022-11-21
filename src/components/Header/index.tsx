
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'// adicionando os containers dentro de {}

interface HeaderProps {
    onOpenNewTransactionsModal: () => void;
}

export function Header({onOpenNewTransactionsModal}: HeaderProps){
    
return (
        <Container>
            <Content>
           <img src={logoImg} alt="DT Money" />
           <button type="button" onClick={onOpenNewTransactionsModal}>
            Nova Transação
           </button>

          
           
           </Content>
        </Container>
    )
}