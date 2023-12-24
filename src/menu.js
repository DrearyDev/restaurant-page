import mellowpudding from './mellowpudding.png';
import mellowcoffee from './mellowcoffee.png';
import mellowcereal from './mellowcereal.png';


const content = document.querySelector('.content');

const addMenuName = (title) => {
    let itemName = document.createElement('div');
    itemName.classList.add('item-name');
    itemName.textContent = title;

    return itemName;
};

const AddMenuItem = (img, desc, reverse) => {
    let menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');


    let newImage = new Image();
    newImage.src = img;

    let description = document.createElement('div');
    description.textContent = desc;

    if (reverse){
        newImage.classList.add('reverse');
        menuItem.appendChild(description);
        menuItem.appendChild(newImage);
    } else {
        menuItem.appendChild(newImage);
        menuItem.appendChild(description);
    };

    return menuItem;
};

function menu() {
    content.appendChild(addMenuName('Mellow Pudding'));
    content.appendChild(AddMenuItem(mellowpudding,
    'Mellow pudding is the most sweet pudding with marshmellows and sugar sprinkled on top!', false));

    content.appendChild(addMenuName('Mellow Coffee'));
    content.appendChild(AddMenuItem(mellowcoffee,
    'Mellow Coffee is the nice taste of coffee with the sweetness of marshmellows!', true));

    content.appendChild(addMenuName('Mellow Cereal'));
    content.appendChild(AddMenuItem(mellowcereal,
    'Mellow Cereal is literally just marshmellows in a bowl...', false));
};

export { menu };