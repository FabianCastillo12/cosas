// Elementos de la interfaz
const page1_2Button = document.getElementById('page1_2Button');
const coverButton = document.getElementById('coverButton');
const closeButton = document.getElementById('closeButton');
const page3_4Button = document.getElementById('page3-4Button');
const page5_6Button = document.getElementById('page5-6Button');
const page7_8Button = document.getElementById('page7-8Button');
const page9_10Button = document.getElementById('page9-10Button');
const page11_12Button = document.getElementById('page11-12Button');
const cover = document.getElementById('cover');
const page1_2 = document.getElementById('pages1-2');
const page3_4 = document.getElementById('pages3-4');
const page5_6 = document.getElementById('pages5-6');
const page7_8 = document.getElementById('pages7-8');
const page9_10 = document.getElementById('pages9-10');
const page11_12 = document.getElementById('pages11-12');
const book = document.getElementById('book');
const buttons = document.getElementById('buttons');

// Funciones para mostrar páginas y cambiar botones
function showPage1_2() {
    cover.style.display = 'none';
    page1_2.style.display = 'flex';
    page3_4.style.display = 'none';
    page1_2Button.style.display = 'none';
    coverButton.style.display = 'block';
    page3_4Button.style.display = 'block';
    page3_4Button.textContent = 'Siguiente';
    page5_6Button.style.display = 'none';
    book.style.width = '600px';
    buttons.style.flexDirection = 'row'
}

function showCover() {
    cover.style.display = 'block';
    page1_2.style.display = 'none';
    page11_12.style.display = 'none';
    page1_2Button.style.display = 'block';
    page1_2Button.textContent = 'Abrir';
    coverButton.style.display = 'none';
    page3_4Button.style.display = 'none';
    page9_10Button.style.display = 'none';
    book.style.width = '300px';
    buttons.style.flexDirection = 'row-reverse'
}

function showPage3_4() {
    page1_2Button.style.display = 'block';
    page1_2Button.textContent = 'Atras';
    coverButton.style.display = 'none';
    page1_2.style.display = 'none';
    page3_4Button.style.display = 'none';
    page3_4.style.display = 'flex';
    page5_6.style.display = 'none';
    page5_6Button.style.display = 'block';
    page5_6Button.textContent = 'Siguiente';
    page7_8Button.style.display = 'none';
}

function showPage5_6() {
    page1_2Button.style.display = 'none';
    page3_4.style.display = 'none';
    page3_4Button.style.display = 'block';
    page3_4Button.textContent = 'Atras';
    page5_6.style.display = 'flex';
    page5_6Button.style.display = 'none';
    page7_8Button.style.display = 'block';
    page9_10Button.style.display = 'none';
    page7_8.style.display = 'none';
    page7_8Button.textContent = 'Siguiente';
}

function showPage7_8() {
    page3_4Button.style.display = 'none';
    page5_6Button.style.display = 'block';
    page5_6Button.textContent = 'Atras';
    page5_6.style.display = 'none';
    page7_8.style.display = 'flex';
    page7_8Button.style.display = 'none';
    page9_10.style.display = 'none';
    page9_10Button.style.display = 'block';
    page11_12Button.style.display = 'none';
    page9_10Button.textContent = 'Siguiente';
}

function showPage9_10() {
    page5_6Button.style.display = 'none';
    page7_8.style.display = 'none';
    page11_12.style.display = 'none';
    page9_10.style.display = 'flex';
    page9_10Button.style.display = 'none';
    page5_6Button.style.display = 'none';
    page7_8Button.style.display = 'block';
    page7_8Button.textContent = 'Atras';
    page11_12Button.style.display = 'block';
    coverButton.style.display = 'none';
    buttons.style.flexDirection = 'row'
}

function showPage11_12() {
    page9_10.style.display = 'none';
    page11_12.style.display = 'flex';
    page9_10Button.style.display = 'block';
    page9_10Button.textContent = 'Atras';
    page11_12Button.style.display = 'none';
    coverButton.style.display = 'block';
    coverButton.textContent = 'Cerrar';
    page7_8Button.style.display = 'none'; 
    buttons.style.flexDirection = 'row-reverse'
}

// Event Listeners
page1_2Button.addEventListener('click', showPage1_2);
coverButton.addEventListener('click', showCover);
page3_4Button.addEventListener('click', showPage3_4);
page5_6Button.addEventListener('click', showPage5_6);
page7_8Button.addEventListener('click', showPage7_8);
page9_10Button.addEventListener('click', showPage9_10);
page11_12Button.addEventListener('click', showPage11_12);

$(document).ready(function(){
    $('.slick-carousel').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  });