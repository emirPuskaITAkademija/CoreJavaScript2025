function onSummerButtonClick() {
    const imageElement = document.getElementById('seasonImage');
    imageElement.src = 'summer.jpg';
}


function onWinterButtonClick() {
    const imageElement = document.getElementById('seasonImage');
    imageElement.src = 'winter.jpg';
}

function onHideImageButtonClick() {
    const imageElement = document.getElementById('seasonImage');
    imageElement.style.display = 'none';
}

function onShowImageButtonClick() {
    const imageElement = document.getElementById('seasonImage');
    imageElement.style.display = '';
}

function onShowHideButtonClick() {
    const imageElement = document.getElementById('seasonImage');
    const showHideButtonElement = document.getElementById('showHideButton');
    if (imageElement.style.display === 'none') {
        imageElement.style.display = 'inline';
        showHideButtonElement.innerHTML = 'Hide';
    } else {
        imageElement.style.display = 'none';
        showHideButtonElement.innerHTML = 'Show';
    }
}