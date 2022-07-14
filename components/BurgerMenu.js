import Link from 'next/link';
import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu'

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.4em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    lineHeight: '40px'
  },
  bmItem: {
    display: 'block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Menu styles={styles} isOpen={menuOpen} onOpen={() => setMenuOpen(true)}>
      <Link href="/">
        <a onClick={() => setMenuOpen(false)} id="home" className="block">Home</a>
      </Link>
      <Link href="/pricing">
        <a onClick={() => setMenuOpen(false)} id="pricing" className="block">Pricing</a>
      </Link>
      <Link href="/book">
        <a onClick={() => setMenuOpen(false)} id="book" className="block">Book</a>
      </Link>
      <Link href="/contact">
        <a onClick={() => setMenuOpen(false)} id="contact" className="block">Contact</a>
      </Link>
    </Menu>
  );
}

export default BurgerMenu;