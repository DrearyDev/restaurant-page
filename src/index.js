import './style.css';
import { home } from './home.js';
import { menu } from './menu.js';
import { contact } from './contact.js';
import { initializeHeader } from './initializeHeader.js';

initializeHeader();

// clicking on tabs
let tabs = [...document.querySelector('.tabs').children];
tabs[0].classList.add('clicked'); // home tab clicked by default
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('clicked');
        });

        tab.classList.add('clicked');

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