import pastelImg from './pastel.png';

const content = document.querySelector('.content');

const createHomeHeading = (() => {
    //create pastel image element
    const pastel = new Image();
    pastel.src = pastelImg;
    pastel.setAttribute('draggable', false);
    pastel.classList.add('pastel');

    //create title element
    let title = document.createElement('p');
    title.innerHTML = `<span class="big">Pastels</span><br>Mellow<br><span class="small">Food</span>`;

    //combine pastelImg and Title
    let homeHeading = document.createElement('div');
    homeHeading.classList.add('home-heading');
    homeHeading.appendChild(pastel);
    homeHeading.appendChild(title);

    return homeHeading;
})();

function home() {
    content.appendChild(createHomeHeading);


};

export { home };
