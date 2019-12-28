import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';
// Images
import Logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="RocketShoes Logo" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}
