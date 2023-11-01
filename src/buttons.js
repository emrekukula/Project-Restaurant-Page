import { homePage } from "./page-load";
import { menuPage } from "./menu";
import { contactPage } from "./contact";

export { buttons } ;

function buttons() {
    const content = document.getElementById('content');

    const div = document.createElement('div');
    document.body.insertBefore(div, content);

    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homeBtn.textContent = 'HOME';
    menuBtn.textContent = 'MENU';
    contactBtn.textContent = 'CONTACT';

    div.appendChild(homeBtn);
    div.appendChild(menuBtn);
    div.appendChild(contactBtn);

    homeBtn.addEventListener('click', () => {
        clearContent();
        homePage();
    })

    menuBtn.addEventListener('click', () => {
        clearContent();
        menuPage();
    })
    
    contactBtn.addEventListener('click', () => {
        clearContent();
        contactPage();
    })
}

function clearContent() {
    const content = document.getElementById('content');
    content.textContent = '';
}