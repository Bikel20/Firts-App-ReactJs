import styled from "styled-components";

export const Container = styled.div`
display: grid; // quando trabalhamos com mais de 1 elemento igual um do lado do outro,display grid e uma boa opção
grid-template-columns: repeat(3,1fr);//  repeat msma coisa que: 1fr 1fr 1fr
gap: 2rem;
margin-top: -10rem;

div {
    background:var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

    }

    strong {
      display: block; // por padrao o strong vem  inline e o margin top n funciona
      margin-top: 1rem ;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
    
    &.highlight-background {
        background: var(--green);
        color: #fff;
    }
}
`;