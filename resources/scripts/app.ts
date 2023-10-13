import alpine from 'alpinejs';

Object.assign(window, {Alpine: alpine}).Alpine.start();

import.meta.webpackHot?.accept(console.error);
