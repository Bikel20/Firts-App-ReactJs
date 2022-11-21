// todas estilizaçoes do meu header sera neste arquivo

import styled from "styled-components";

export const Container = styled.header`
background:var(--blue);

`;

export const Content = styled.div`
max-width: 1120px;
margin: 0 auto;

padding: 2rem 1rem 10rem;
display: flex;
align-items: center;
justify-content: space-between; // espaço entre os elementos do meu Content, neste caso a logo e o botão

button {
font-size: 0.8rem;
color: #fff;
background: var(--blue-light);
border: 0;
padding: 0 2rem;
border-radius: 0.25rem;
height: 2rem;

transition: filter 0.2s; // transação de filtro do hover.

&:hover {
    filter: brightness(0.9);
}

}




`;
