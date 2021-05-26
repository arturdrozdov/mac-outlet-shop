items.forEach(element => {

  const itemCard = document.createElement('div');

  itemCard.className = `card`;

  itemCard.id = `card-${element.id}`;

  itemCard.innerHTML = `
    <div class='topCard__inner'>
        <button type='submit' class='heard-button'><img src='img/icons/like_empty.svg' class='icon-heart' alt=''></button>
        <div class='topCard-image'><img class='item-image' src='img/${element.imgUrl}' alt=''></div>
        <h1 class='product-name'>${element.name}</h1>
        <div class='quantity'><b>${element.orderInfo.inStock}</b> left in stock </div>
        <div class='price'>Price: <b>${element.price}</b> $</div>
        <button class='addButton'>Add to cart</button>
    </div>
    <div class='botCard__inner'>
        <div class='botCard__inner-left'>
            <span>${element.orderInfo.reviews}% Positive reviews</span>
            <span>Above avarage</span>
        </div>
        <div class='botCard__inner-right'>
            <span>1234</span>
            <span>Orders</span>
        </div>
    </div>`;

  document.querySelector('.prod__cards').appendChild(itemCard);

  itemCard.onclick = function () {
    showModal(element);
  }


});



const arrOfAllColors = [];
items.map(element => element.color).forEach(item => arrOfAllColors.push(...item));
const arrOfColors = arrOfAllColors.filter((item, pos, arr) => arr.indexOf(item) == pos);

console.log(arrOfColors)


const accordionColors = document.querySelector('.panel-color__inner');

arrOfColors.forEach(item => {

  const labelColor = document.createElement('label');
  labelColor.innerText= item;

  const checkboxColor = document.createElement('input');
  checkboxColor.type = 'checkbox';
  labelColor.appendChild(checkboxColor);
  accordionColors.appendChild(labelColor);


})


//=================================================================modal=======================
const modal = document.createElement('div');
modal.className = 'modal';
document.querySelector('body').appendChild(modal);
const modalInner = document.createElement('div');
modalInner.className = 'modal__inner';
modal.appendChild(modalInner);

const showModal = (elemData) => {

  modal.classList.add('modal__active');
  modal.onclick = e => {
    if (modal === e.target) {
      modal.classList.remove("modal__active");
      return;
    }
  }

  modal.innerHTML = `
  <div class="modal__inner">
  <div class='topCard-image'><img class='item-image' src='img/${elemData.imgUrl}' alt=''></div>
  <div class="item__info">
      <h3 class="item__info-name">${elemData.name}</h3>
      <div class="botCard__inner botCard__inner-modal "><h2>HELLO WORLD</h2></div>
      <div class="item__info-mainInfo">
          <span class="item--color">${elemData.color}</span>
          <span class="item--os">${elemData.os}</span>
          <span class="item--chip">${elemData.chip.name} ${elemData.chip.cores} cores </span>
          <span class="item--height">345</span>
          <span class="item--width">123</span>
          <span class="item--depth">5252</span>
          <span class="item--weight">1234</span>
      </div>
  </div>
  <div class="item__price">
      <div class="item__price-price">$${elemData.price}</div>
      <div class="item__price-stock">Stock: ${elemData.orderInfo.inStock} pcs.</div>
      <button type="button" class="addButton addButton-modal">add to cart</button>
  </div>
  </div>
  `


}

//=================================================================accordion=======================

let accordion = document.getElementsByClassName('accordion');

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {

    this.classList.toggle('active');

    let panel = this.nextElementSibling;
    panel.style.display === 'flex' ? panel.style.display = 'none' : panel.style.display = 'flex';


  });
}
//==================================================================================================
let filterButton = document.querySelector('.filter-button');

filterButton.onclick = function () {



  let sectionFilter = document.querySelector('.main__section-filter'),
    prodCards = document.querySelector('.prod__cards');

  prodCards.classList.toggle('prod__cards-toogle');
  sectionFilter.style.display == 'none' ? sectionFilter.style.display = 'block' : sectionFilter.style.display = 'none';

}