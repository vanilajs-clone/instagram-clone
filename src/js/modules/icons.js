import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';

library.add(faSearch);

export const search = icon({ prefix: 'fas', iconName: 'search' }).html;
