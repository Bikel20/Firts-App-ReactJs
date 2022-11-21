//criando na pasta src styles/global.ts

import { createGlobalStyle } from "styled-components"; // criando um estili global de dentro do styled comopenents que instalamos no: npm add @types/styled-components -D

export const GlobalStyle = createGlobalStyle` // exportando nosso component. smpre iniciamos com letra maiusc quando se trata de um component, para passar as porpriedades css, usamos as crazes invertidas
:root {
    
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33cc95 ;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --background: #f0f2f5;
    
    --shape: #ffffff;

    
}




*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

// font size padrão para desktop e 16 px
html {
    @media (max-width: 1080px){ // se o usuario tiver uma tela MENOR Q 1080 px eu vou diminuir o font-size: 93.75%.
        font-size: 93.75%; // no resultado dara 15px
    }
    @media (max-width: 720px) {
        font-size: 87.5%; // 14px
    }
    // 1 REM = o tamanho padrão, nesse caso 16px
}

body {
background: var(--background);
-webkit-font-smoothing: antialiased; // para adptar melhor as fontes em engenis em diferentes browsers
}

body, input, textarea, button {// se nescessario subscrever com oq passaremos nas tags
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {// tamanho em negrito que iremos usar, todas medidas e fonte esta no figma do app
font-weight: 600;
}

button {
    cursor: pointer; // para deixar o botão clicavel
}

[disabled] { // tudo q estiver desabilitado na nossa app, como botoes e imputs
opacity: 0.6;
cursor: not-allowed; // aparecera um plaquinha de n permetido na ação
}




`

