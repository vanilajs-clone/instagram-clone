import '../../scss/header.scss';
import logo from '../../assets/logo.png';

const header = `
  <div class="logo">
    <img alt="logo" />
  </div>
  <div class="search">Search</div>
  <div class="icons">Icon</div>
`;

const headerEl = document.querySelector('#header .container');
headerEl.innerHTML = header;

const logoEl = document.querySelector('img');
logoEl.src = logo;
