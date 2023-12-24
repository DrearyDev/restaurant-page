import pastelImg from './pastel.png';
import reviewerImg from './reviewer.jpg';
import locationImg from './location.png';

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

const createReview = (() => {
    //create image of reviewer
    const reviewer = new Image();
    reviewer.src = reviewerImg;
    reviewer.setAttribute('draggable', false);
    reviewer.classList.add('reviewer');

    //create div for text
    let comment = document.createElement('div');
    comment.innerHTML = `"I was given Diabetes after
    just <span class="bold">ONE MEAL</span> at Pastels Mellow Food!!!"
    <span class="end">- fat gus</span>`;

    //combine reviewerImg and comment
    let review = document.createElement('div');
    review.classList.add('review');
    review.appendChild(reviewer);
    review.appendChild(comment);

    return review;
})();

const createLocationTitle = (() => {
    //create title for section with location
    let title = document.createElement('div');
    title.textContent = `Come Visit Us at:`;
    title.classList.add('location-title');

    return title;
})();

const createLocation = (() => {
    //create image of location
    const location = new Image();
    location.src = locationImg;
    location.setAttribute('draggable', false);

    //create div for text
    let address = document.createElement('p');
    address.classList.add('address')
    address.innerText = `3730 SugerCane Crescent, WhinePeg, ON L4T 2Z4, America`;

    //combine locationImg and address
    let locationDiv = document.createElement('div');
    locationDiv.classList.add('location');
    let div = document.createElement('div');
    div.appendChild(address);
    div.appendChild(location);
    locationDiv.appendChild(div);

    return locationDiv;
})();

function home() {
    content.appendChild(createHomeHeading);
    content.appendChild(createReview);
    content.appendChild(createLocationTitle);
    content.appendChild(createLocation);

};

export { home };
