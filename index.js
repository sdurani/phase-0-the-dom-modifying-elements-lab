document.addEventListener('DOMContentLoaded', function() {

    const main = document.querySelector('main#main');
    if (main) {
        main.remove();
    }


    const newHeader = document.createElement('h1');
    newHeader.id = 'victory';
    newHeader.textContent = 'BOB is the champion'; 


    document.body.appendChild(newHeader);
});