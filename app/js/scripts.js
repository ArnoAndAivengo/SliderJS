var description = $('.description');
var footer = $('.card-footer');
var images = $('.card-images');


let fullScreen = document.querySelector('.fullScreen');


function hiddenElem(){
    for(var i = 0; i < description.length; i++){
        description[i].classList.toggle('hidden');
    }
    for(var i = 0; i < footer.length; i++){
        footer[i].classList.toggle('hidden');
    }
    for(var i = 0; i < images.length; i++){
        images[i].classList.toggle('hidden');
    }
    let slider = document.querySelector('.sp-slides-container');
    slider.className = 'mySlides';

    let center = document.querySelector('#center');
    center.className = 'center';
};


function showElem(){
    console.log('Dron');



    for(var i = 0; i < description.length; i++){
        description[i].classList.remove('hidden');
    }
    for(var i = 0; i < footer.length; i++){
        footer[i].classList.remove('hidden');
    }
    for(var i = 0; i < images.length; i++){
        images[i].classList.remove('hidden');
    }

    let slider = document.querySelector('.mySlides');
    slider.className = 'sp-slides-container';
};


// //дожидаемся полной загрузки страницы
// window.onload = function () {
//
//     //получаем идентификатор элемента
//     var a = document.querySelector('.switch');
//     var x = document.querySelector('.center:not(.switch)');
//
//     //вешаем на него событие
//     a.onclick = function() {
//         //производим какие-то действия
//         $('.description').hide();
//         $('.card-footer').hide();
//         $('.card-images').hide();
//         let spSlides = document.querySelector('.sp-slides-container');
//         spSlides.className = 'mySlides';
//
//     }
//
//    function  center() {
//
//             $('.description').show();
//             $('.card-footer').show();
//             $('.card-images').show();
//             console.log('hello');
//
//     }
//
// }
