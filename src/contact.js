export { contactPage };

function contactPage() {
    const content = document.getElementById('content');

    const form = document.createElement('form');
    content.appendChild(form);

    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name: ';
    form.appendChild(nameLabel);
    
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameLabel.appendChild(nameInput);

    const phoneLabel = document.createElement('label');
    phoneLabel.setAttribute('for', 'phone');
    phoneLabel.textContent = 'Phone: ';
    form.appendChild(phoneLabel);
    
    const phoneInput= document.createElement('input');
    phoneInput.setAttribute('type', 'number');
    phoneInput.setAttribute('id', 'phone');
    phoneLabel.appendChild(phoneInput);

    const mailLabel = document.createElement('label');
    mailLabel.setAttribute('for', 'email');
    mailLabel.textContent = 'Email: ';
    form.appendChild(mailLabel);
    
    const mailInput= document.createElement('input');
    mailInput.setAttribute('type', 'email');
    mailInput.setAttribute('id', 'email');
    mailLabel.appendChild(mailInput);

    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.textContent = 'SUBMIT';
    button.addEventListener('click', (e) => e.preventDefault());
    form.appendChild(button);
}