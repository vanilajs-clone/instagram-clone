import '../../scss/header.scss';
import logo from '../../assets/logo.png';
import {
  search,
  home,
  fasHeart,
  farHeart,
  fasPaperPlane,
  farPaperPlane,
  fasCompass,
  farCompass,
} from '../modules/icons';

const header = `
  <div class="logo">
    <a href="/" tabIndex="0">
      <img alt="logo" />
    </a>
  </div>
  <div class="search">
    ${search}    
    <input type="text" placeholder="검색" />
  </div>
  <div class="icons">
    ${home}
    ${farPaperPlane}
    ${farCompass}
    ${farHeart}
  </div>
`;

const headerContainer = document.querySelector('#header .container');
headerContainer.innerHTML = header;

const logoEl = headerContainer.querySelector('.logo img');
logoEl.src = logo;
