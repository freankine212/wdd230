const url = 'https://freankine212.github.io/wdd230/chamber/directory.json';

async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.businessNames);
    displayDirectory(data.businessNames);
}

const displayDirectory = (businessNames) => {
    const cards=document.querySelector('div.cards');

    businessNames.forEach((business) => {
        let card = document.createElement ('section');
        let businessName = document.createElement('h1')
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let websiteUrl = document.createElement('a');
        let portrait = document.createElement('img');

        businessName.textContent = `${business.businessName}`;
        address.textContent = `Address: ${business.address}`;
        phoneNumber.innerHTML = `Phone number: ${business.phoneNumber}<br>`;

        websiteUrl.innerHTML= `${business.websiteUrl}`;

        //Logo here
        portrait.setAttribute('src', business.Logo);
        portrait.setAttribute('alt', `Logo of ${business.businessName}`);
        portrait.setAttribute('loading','lazy');
        portrait.setAttribute('width', '140');
        portrait.setAttribute('height', '240');

        card.appendChild(businessName);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(websiteUrl);
        card.appendChild(portrait);

        cards.appendChild(card);
    })
}

getDirectoryData();