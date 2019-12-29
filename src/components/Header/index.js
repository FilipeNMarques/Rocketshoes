import React from 'react';
// Redux
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// Styles
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';
// Images
import Logo from '../../assets/images/logo.svg';

function Header({ cartSize }) {
  console.log('TCL: Header -> cart', cartSize);
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="RocketShoes Logo" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize}itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}
export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
