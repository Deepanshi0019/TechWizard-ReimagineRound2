let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');

    next.addEventListener('click', function() {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
    });

    prev.addEventListener('click', function() {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1]);
    });

    let items = document.querySelectorAll('.item');

    items.forEach((item, index) => {
        item.addEventListener('click', function() {
            let itemsArray = Array.from(document.querySelectorAll('.item'));
            let clickedIndex = itemsArray.indexOf(item);

            for (let i = 0; i < clickedIndex; i++) {
                document.querySelector('.slide').appendChild(itemsArray[i]);
            }
        });
    });