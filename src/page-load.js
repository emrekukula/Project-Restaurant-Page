export { homePage };


function homePage() {
    const content = document.getElementById('content');

    const h1 = document.createElement('h1');
    h1.textContent = 'WELCOME!';
    content.appendChild(h1);

    const p = document.createElement('p');
    p.classList.add('desc');
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    content.appendChild(p);

    const img = document.createElement('img');
    img.src = '../src/icon.png'
    content.appendChild(img);
    
}  
