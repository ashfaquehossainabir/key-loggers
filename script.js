const userInput = document.getElementById('userInput');
const keyList = document.getElementById('keyList');
const keyPressed = [];

if(keyList.textContent == '') {
    keyList.innerHTML = '<p style="margin-left: -40px;">No key logs here</p>'
}

userInput.addEventListener('keydown', function(event) {
    if (event.shiftKey) {
        console.log('User pressed shift key!');
    }

    if (event.ctrlKey) {
        console.log('User pressed ctrl key!');
    }

    console.log(`User pressed: ${event.key}, Shift key pressed: ${event.shiftKey}, Ctrl key pressed: ${event.ctrlKey}`);

    // For Display in HTML Content
    keyPressed.push(`User pressed: ${event.key}`);
    keyPressed.push(`Ctrl Key pressed: ${event.ctrlKey}`);
    keyPressed.push(`Shift Key pressed: ${event.shiftKey}`);
    keyPressed.push('------------------------------------');

    // Clear the current list
    keyList.innerHTML = '';

    keyPressed.forEach((key, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = key;
        listItem.id = index;
        keyList.appendChild(listItem);
    });

    // Log URL
    // console.log(event.target.baseURI)
});