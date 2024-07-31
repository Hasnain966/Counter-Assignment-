let count = 0;

    function updateCounter() {
        const counterElement = document.getElementById('counter');
        counterElement.textContent = count;
        if (count < 0) {
            counterElement.classList.add('red');
        } else {
            counterElement.classList.remove('red');
        }
    }

    function increment() {
        count++;
        updateCounter();
    }

    function decrement() {
        count--;
        updateCounter();
    }

    function reset() {
        count = 0;
        updateCounter();
    }