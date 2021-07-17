import '../../scss/header.scss';
import logo from '../../assets/logo.png';

const header = `
  <div class="logo">
    <a href="/" tabIndex="0">
      <img alt="logo" />
    </a>
  </div>
  <div class="search">Search</div>
  <div class="icons">Icon</div>
`;

const headerEl = document.querySelector('#header .container');
headerEl.innerHTML = header;

const logoEl = document.querySelector('img');
logoEl.src = logo;
