import '../../scss/header.scss';
import logo from '../../assets/logo.png';
import { search } from '../modules/icons';

const header = `
  <div class="logo">
    <a href="/" tabIndex="0">
      <img alt="logo" />
    </a>
  </div>
  <div class="search">    
    <input type="text" placeholder="검색" />
  </div>
  <div class="icons">Icon</div>
`;

const headerContainer = document.querySelector('#header .container');
headerContainer.innerHTML = header;

const logoEl = headerContainer.querySelector('.logo img');
logoEl.src = logo;

const searchEl = headerContainer.querySelector('.search');
searchEl.innerHTML += search;
