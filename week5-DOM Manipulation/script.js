// Change the text content dynamically
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('text').textContent = 'The text has been changed!';
});

// Modify CSS styles via JavaScript
document.getElementById('styleTextBtn').addEventListener('click', function() {
    document.getElementById('styledText').style.color = 'red';
    document.getElementById('styledText').style.fontSize = '24px';
});

// Add or remove an element when the button is clicked
let elementAdded = false;

document.getElementById('toggleElementBtn').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a dynamically added element!';
    
    if (elementAdded) {
        newElement.remove();
    } else {
        document.body.appendChild(newElement);
    }
    elementAdded = !elementAdded;
});