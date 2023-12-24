const content = document.querySelector('.content');



const initializeFooter = () => {
    //create footer
    let footer = document.createElement('div')
    footer.classList.add('footer');
    content.parentNode.insertBefore(footer, content.nextSibling);//inserts footer after content div

    //create footer content
    let footerContent = [];
    for (let i = 0; i < 3; i++) {
        footerContent[i] = document.createElement('div');
    };

    footerContent[0].innerText = '3730 SugerCane Crescent, WhinePeg, ON L4T 2Z4, America';
    footerContent[1].innerText = 'Follow us!';
    footerContent[2].innerText = 'bring a wheelchair!';

    footerContent.forEach(ele => {
        footer.appendChild(ele);
    });

};

export { initializeFooter };