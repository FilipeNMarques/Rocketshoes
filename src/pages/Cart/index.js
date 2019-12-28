import React from 'react';
// Styles
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-everlast-cave-crossfit-masculino/06/AXB-2393-406/AXB-2393-406_detalhe2.jpg?ims=326x"
                alt="Tenis Crosstraining"
              />
            </td>
            <td>
              <strong>Tenis de Crosstraining</strong>
              <span>R$259.90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$519,80</strong>
            </td>
            <td>
              <MdDelete size={20} color="#7159c1" />
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>RS1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}
