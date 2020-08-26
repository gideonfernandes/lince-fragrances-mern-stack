import React from 'react';

import { formatPrice } from '../../utils/format';
import { PurchaseContent } from './styles';

const Purchase = ({ purchaseData }) => {
  const { order, buyer } = purchaseData;

  return (
    <PurchaseContent>
      {!(order === undefined || buyer === undefined) && (
        <>
          <h1>Compra realizada com sucesso!</h1>
          <h2>Detalhes do pedido abaixo:</h2>
          <h3>Cliente: <strong>{`${buyer.name} ${buyer.last_name}`}</strong></h3>
          <h4>Produtos:</h4>
          <ul>
            {order.map(product => (
              <li key={product.product_id}>
                <p>
                  <strong>Item:</strong>
                  {`${product.title}, Quantidade: ${product.amount}`}
                </p>
                <p><strong>Subtotal:</strong>{formatPrice(product.subtotal)}</p>
                <hr></hr>
              </li>
            ))}
          </ul>
        </>
      )}
    </PurchaseContent>
  );
};

export default Purchase;
