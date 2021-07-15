import '../scss/header.scss';
import Header from '../html/header.html';
import logo from '../assets/logo.png';

const headerEl = document.querySelector('#header');
headerEl.innerHTML = Header;

const logoEl = document.querySelector('img');
logoEl.src = logo;
