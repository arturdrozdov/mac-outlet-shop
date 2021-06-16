// 
// ===================================render card======================================
const renderCard = function (item) {

  const itemCard = document.createElement('div');

  itemCard.className = `card`;

  itemCard.id = `card-${item.id}`;

  itemCard.innerHTML = `
    <div class='topCard__inner'>
        <button type='submit' class='heard-button'><img src='img/icons/like_empty.svg' class='icon-heart' alt=''></button>
        <div class='topCard-image'><img class='item-image' src='img/${item.imgUrl}' alt=''></div>
        <h1 class='product-name'>${item.name}</h1>
        <div class='quantity'><b>${item.orderInfo.inStock}</b> left in stock </div>
        <div class='price'>Price: <b>${item.price}</b> $</div>
        <button class='addButton'>Add to cart</button>
    </div>
    <div class='botCard__inner'>
        <div class='botCard__inner-left'>
            <span>${item.orderInfo.reviews}% Positive reviews</span>
            <span>Above avarage</span>
        </div>
        <div class='botCard__inner-right'>
            <span>1234</span>
            <span>Orders</span>
        </div>
    </div>`;

  itemCard.onclick = function (e) {

    e.target.className == 'addButton' ? addToCart(item) : showModal(item);

    console.dir(e.target)

  }
  return itemCard;
}
// 
// ===================================render cards======================================
const renderCards = function (arrItems) {

  arrItems.forEach(item => {

    document.querySelector('.prod__cards').appendChild(renderCard(item));
  })
};
renderCards(items);



// 
// ===================================render cards======================================
const arrOfAllColors = [];
items.map(element => element.color).forEach(item => arrOfAllColors.push(...item));
const arrOfColors = arrOfAllColors.filter((item, pos, arr) => arr.indexOf(item) == pos);

const arrOfOS = items.map(element => element.os).filter((item, pos, arr) => arr.indexOf(item) == pos);

const arrOfDisplays = items.map(element => element.display).filter((item, pos, arr) => arr.indexOf(item) == pos).sort((a, b) => a - b);
console.log(arrOfDisplays);

const arrOfMemory = items.map(element => element.storage).filter((item, pos, arr) => arr.indexOf(item) == pos).sort((a, b) => a - b);

console.log(arrOfMemory);

// 
// ===================================render filter======================================
function renderFilter(divClass, arrData) {
  let accordionClass = document.querySelector(divClass);

  arrData.forEach(item => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `checkbox${item}`;
    checkbox.name = item;

    const label = document.createElement('label');
    label.innerText = item;
    label.setAttribute('for', `checkbox${item}`);

    accordionClass.append(checkbox, label);

  })
}

renderFilter('.panel-color__inner', arrOfColors);
renderFilter('.panel-memory__inner', arrOfMemory);
renderFilter('.panel-os__inner', arrOfOS);
renderFilter('.panel-display__inner', arrOfDisplays);

// 
// ===================================filter logic======================================


const objOfFilters = {};
let arrOfFilteredItems = [];
let accordionMenuCheckboxes = document.querySelectorAll('.panel__inner input');
accordionMenuCheckboxes.forEach(checkbox => {
  checkbox.onclick =

    function createObjWithFilters(e) {
      let val = e.currentTarget.name;
      let key = e.currentTarget.closest('.panel').previousElementSibling.innerText;
      console.log(val, key)
      console.log(arrOfFilteredItems)
      if (e.currentTarget.name == val) {
        document.querySelector('.prod__cards').innerHTML = '';
        arrOfFilteredItems.forEach(item => {
          arrOfFilteredItems.forEach(item => {

            if (item[key.toLowerCase()] == e.currentTarget.name) {
              arrOfFilteredItems.splice(arrOfFilteredItems.indexOf(item), 1);

            }
            document.querySelector('.prod__cards').innerHTML = '';

            renderCards(arrOfFilteredItems.filter((item, pos, arr) => arr.indexOf(item) == pos));
            return;
          })
          if (item[key.toLowerCase()].includes(e.currentTarget.name)) {
            for (let i = 0; i < 5; i++) {
              arrOfFilteredItems.forEach(item => arrOfFilteredItems.splice(arrOfFilteredItems.indexOf(item), 1))
            }

            document.querySelector('.prod__cards').innerHTML = '';
            renderCards(arrOfFilteredItems);
            return;
          }
        })
      }
      if (arrOfFilteredItems.length == 0) {
        renderCards(items);
      }

      if (!Object.keys(objOfFilters).includes(key))
        objOfFilters[key] = [val];
      else {
        if (objOfFilters[key].includes(val)) {
          // console.log(objOfFilters[key].indexOf(val))
          objOfFilters[key].splice(objOfFilters[key].indexOf(val), 1);
          return;
        }
        Object.keys(objOfFilters).includes(key) ? objOfFilters[key].push(val) : objOfFilters.key = val;
      }
      console.log(objOfFilters);


      renderFilteredArr();
    }

});



function renderFilteredArr() {

  document.querySelector('.prod__cards').innerHTML = '';

  for (key in objOfFilters) {
    items.forEach(item => {

      objOfFilters[key].forEach(val => {

        if (item[key.toLowerCase()].includes(val)) {
          arrOfFilteredItems.push(item)
        }

      })

    })
  }
  renderCards(arrOfFilteredItems.filter((item, pos, arr) => arr.indexOf(item) == pos));
}

//
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

let filterButton = document.querySelector('.filter-button');

filterButton.onclick = function () {

  let sectionFilter = document.querySelector('.main__section-filter'),
    prodCards = document.querySelector('.prod__cards');

  prodCards.classList.toggle('prod__cards-toogle');
  sectionFilter.style.display == 'none' ? sectionFilter.style.display = 'block' : sectionFilter.style.display = 'none';

}


//=================================================================cart=======================

const cart = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
}

function addToCart(item) {
  const itemInCart = cart.items.find(itemInCart => itemInCart.id === item.id);


  if (!itemInCart) {
    cart.items.push({
      id: item.id,
      data: item,
      amount: 1,
    })
  } else {
    itemInCart.amount++;
  }
  const totalParams = cart.items.reduce((acum, item) => {
    return {
      totalItems: acum.totalItems + item.amount,
      totalPrice: acum.totalPrice + (item.amount * item.data.price),
    }
  }, {
    totalItems: 0,
    totalPrice: 0,
  })

  Object.assign(cart, totalParams);
  renderCart();
}
// console.log(cart);


const cartInner = document.querySelector('.cart');
if (cart.items.length == 0) {
  // console.log(cart.items.length)
  cartInner.innerHTML = '<span>Card is empty</span>';
}

function renderCart() {

  const cartInner = document.querySelector('.cart');

  cartInner.innerHTML = '';
  cart.items.forEach(item => {

    cartInner.innerHTML += `
    <img src='img/${item.data.imgUrl}'>
    <span>${item.data.name}</span>
    <span>Items:${cart.totalItems}</span>
    <span>TotalPrice:${cart.totalPrice}</span>
    `

  })

}

const basket = document.querySelector('.basket img');
basket.onclick = function () {


  const cart__inner = document.querySelector('.cart');
  cart__inner.classList.toggle('cart__toggle');
}

$(function () {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 500,
    values: [150, 300],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    }

  });

  $("#amount").val("$" + $("#slider-range").slider("values", 0) +
    " - $" + $("#slider-range").slider("values", 1));
});