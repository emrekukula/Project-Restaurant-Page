export { menuPage };

function menuPage() {
    const content = document.getElementById('content');
    const pageContent = document.createElement('div');
    content.appendChild(pageContent);
    
    const menuList = document.createElement('ul');
    menuList.classList.add('menu-list');
    pageContent.appendChild(menuList); 

    const menuItem1 = document.createElement('li');
    menuItem1.classList.add('menuItem1');
    menuItem1.textContent = 'Chicken';
    menuList.appendChild(menuItem1);

    const menuItem2 = document.createElement('li');
    menuItem2.classList.add('menuItem2');
    menuItem2.textContent = 'Chicken';
    menuList.appendChild(menuItem2);

    const menuItem3 = document.createElement('li');
    menuItem3.classList.add('menuItem3');
    menuItem3.textContent = 'Chicken';
    menuList.appendChild(menuItem3);


}