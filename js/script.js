

function replaceName() {
    let name = prompt('Masukan nama anda');
    console.log(name);
    document.getElementById('user-name').innerHTML = name;
}

function validateForm() {
    let inputName = document.getElementById('input-name').value;
    if (inputName == '') {
        alert('Inputan Kosong');
    } else {
        alert('Sukses Submit Form');
    }
}

let indexSlide = 1;
showSlide();

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function showSlide(index) {
    // get DOM semua img baner
    let listImage = document.getElementsByClassName('banner');
    console.log(indexSlide);
    console.log(listImage);
    
    // riset slide
    if (index > listImage.length) indexSlide = 1;

    // hide img
    let i = 0;
    while (i < listImage.length) {
        listImage[i].style.display = 'none';
        i++;
    }

    // show selected img
    listImage[indexSlide - 1].style.display = 'block';
}

setInterval(() => nextSlide(1), 2000);