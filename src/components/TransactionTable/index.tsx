import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(){
useEffect(() => { // criando uma api ficticia antes de receber a original do back-end
    api.get('transactions') // get: requisao de busca a informaçoes
    .then(Response => console.log(Response.data))
},[]);

    return (
        <Container>
          <table>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Desenvolvimento De Website</td>
                    <td className="deposit">R$12.000</td>
                    <td>Desenvolvimento</td>
                    <td>20/02/2021</td>
                </tr>

                <tr>
                    <td>Aluguel</td>
                    <td className="withdrawn">-R$500.000</td>
                    <td>Casa</td>
                    <td>10/02/2021</td>
                </tr>

                
            </tbody>
          </table>
        </Container>
    )
}