import './style.css';
import { home } from './home.js';
import { menu } from './menu.js';
import { contact } from './contact.js';
import { initializeHeader } from './initializeHeader.js';
import { initializeFooter } from './initializeFooter.js';

initializeHeader();
initializeFooter();

// clicking on tabs
const content = document.querySelector('.content');
let tabs = [...document.querySelector('.tabs').children];

// home tab clicked by default
tabs[0].classList.add('clicked');
home();

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('clicked');
        });

        tab.classList.add('clicked');

        content.innerHTML = '';

        switch (tab.textContent) {
            case 'Home':
                home();
                break;
            case 'Menu':
                menu();
                break;
            case 'Contact':
                contact();
                break;
        };
    });
});