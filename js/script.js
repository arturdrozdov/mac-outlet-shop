

const renderCard = function(item){

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
        showModal(item);
        console.log(item);
      }

    return itemCard;


}

const renderCards = function(arrItems){

  arrItems.forEach(item => {

    document.querySelector('.prod__cards').appendChild(renderCard(item));
   })
};
renderCards(items);



// items.forEach(element => {

  

//   const itemCard = document.createElement('div');

//   itemCard.className = `card`;

//   itemCard.id = `card-${element.id}`;

//   itemCard.innerHTML = `
//     <div class='topCard__inner'>
//         <button type='submit' class='heard-button'><img src='img/icons/like_empty.svg' class='icon-heart' alt=''></button>
//         <div class='topCard-image'><img class='item-image' src='img/${element.imgUrl}' alt=''></div>
//         <h1 class='product-name'>${element.name}</h1>
//         <div class='quantity'><b>${element.orderInfo.inStock}</b> left in stock </div>
//         <div class='price'>Price: <b>${element.price}</b> $</div>
//         <button class='addButton'>Add to cart</button>
//     </div>
//     <div class='botCard__inner'>
//         <div class='botCard__inner-left'>
//             <span>${element.orderInfo.reviews}% Positive reviews</span>
//             <span>Above avarage</span>
//         </div>
//         <div class='botCard__inner-right'>
//             <span>1234</span>
//             <span>Orders</span>
//         </div>
//     </div>`;

//   document.querySelector('.prod__cards').appendChild(itemCard);

//   itemCard.onclick = function () {
//     showModal(element);
//   }


// });



const arrOfAllColors = [];
items.map(element => element.color).forEach(item => arrOfAllColors.push(...item));
const arrOfColors = arrOfAllColors.filter((item, pos, arr) => arr.indexOf(item) == pos);

const arrOfOS=items.map(element=>element.os).filter((item, pos, arr) => arr.indexOf(item) == pos);

const arrOfDisplays=items.map(element=>element.display).filter((item, pos, arr) => arr.indexOf(item) == pos).sort((a,b)=>a-b);
console.log(arrOfDisplays);

const arrOfMemory=items.map(element=>element.storage).filter((item, pos, arr) => arr.indexOf(item) == pos).sort((a,b)=>a-b);

console.log(arrOfMemory);

// const accordionColors = document.querySelector('.panel-color__inner');
{/* <input type="checkbox" id="check2"><label for="check2">Ipsum</label> */}

// function renderFilter(divClass, arrData){
//   let accordionClass = document.querySelector(divClass);

//   arrData.forEach(item =>{

//     const label = document.createElement('label');
//     label.innerText= item;

//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     label.appendChild(checkbox);
//     accordionClass.appendChild(label);
//   })

// }

function renderFilter(divClass, arrData){

  let accordionClass = document.querySelector(divClass);
  arrData.forEach(item =>{

    const innerDiv=document.createElement('div');
    innerDiv.className=`panel__inner-div ${item}-div`;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id=`checkbox${item}`;
    const label = document.createElement('label');
    label.innerText= item;
    label.setAttribute('for',`checkbox${item}`);
    innerDiv.append(checkbox,label);
    accordionClass.append(innerDiv);
  })
}


renderFilter('.panel-color__inner', arrOfColors);
renderFilter('.panel-memory__inner', arrOfMemory);
renderFilter('.panel-os__inner', arrOfOS);
renderFilter('.panel-display__inner', arrOfDisplays);

// arrOfColors.forEach(item => {

//   const labelColor = document.createElement('label');
//   labelColor.innerText= item;

//   const checkboxColor = document.createElement('input');
//   checkboxColor.type = 'checkbox';
//   labelColor.appendChild(checkboxColor);
//   accordionColors.appendChild(labelColor);


// })
// let accordionMenuCheckboxes=document.querySelectorAll('.panel-color__inner label');
// accordionMenuCheckboxes.forEach(box=>{
//   box.onclick=e=>{
//   console.log(e.currentTarget)
//   e.stopPropagation();
// };

// })

let accordionMenuLabels=document.querySelectorAll('.panel-color__inner label');
let accordionMenuCheckboxes=document.querySelectorAll('.panel-color__inner input');

accordionMenuLabels.forEach(box=>{
  box.addEventListener('click',foo);
  
  function foo(e){
  console.dir(e.currentTarget)
  e.stopPropagation();
};
});
accordionMenuCheckboxes.forEach(box=>{
  box.addEventListener('click',foo);
  box.addEventListener('click',foo);
  
  function foo(e){
  console.dir(e.currentTarget)
  e.stopPropagation();
};

});



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


$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 75, 300 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range" ).slider( "values", 1 ) );
} );