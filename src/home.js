const content = document.querySelector('.content');

function home() {
    console.log(content);
    content.textContent = 'test';

    let test = document.createElement('div');
    test.style.backgroundColor = 'red';
    test.style.width = '20px';
    test.style.height = '20px';

    content.appendChild(test);

};

export { home };
