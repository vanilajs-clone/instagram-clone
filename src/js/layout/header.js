import '../../scss/header.scss';
import logo from '../../assets/logo.png';
import noProfile from '../../assets/noProfile.jpg';
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
    <a href="/" tabIndex="0">${home}</a>
    <a href="/" tabIndex="0">${farPaperPlane}</a>
    <a href="/" tabIndex="0">${farCompass}</a>
    ${farHeart}
    <img src="${noProfile}" />
  </div>
`;

const headerContainer = document.querySelector('#header .container');
headerContainer.innerHTML = header;

const logoEl = headerContainer.querySelector('.logo img');
logoEl.src = logo;
