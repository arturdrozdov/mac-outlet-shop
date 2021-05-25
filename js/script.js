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

    itemCard.onclick=function(){
      showModal(element);
    }

});
//=================================================================modal=======================
const modal=document.createElement('div');
modal.className='modal';
document.querySelector('body').appendChild(modal);
const modalInner=document.createElement('div');
modalInner.className='modal__inner';
modal.appendChild(modalInner);

const showModal=(elemData)=>{
  modal.classList.add('modal__active');
  modal.onclick=e=>{
    if(modal===e.target){
      modal.classList.remove("modal__active");
      return;
    }
  }
  
  modalInner.innerHTML=`<h6>${elemData.name}</h6>`


}

//=================================================================accordion=======================

let accordion = document.getElementsByClassName('accordion');

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function() {

    this.classList.toggle('active');

    let panel = this.nextElementSibling;
    panel.style.display === 'flex'?panel.style.display = 'none':panel.style.display = 'flex';
   
  });
}
//-------------------------------------------------------------------------------------------------------
let filterButton=document.querySelector('.filter-button');

filterButton.onclick=function(){
  let sectionFilter=document.querySelector('.main__section-filter'),
      prodCards=document.querySelector('.prod__cards');

  prodCards.classList.toggle('prod__cards-toogle');
  sectionFilter.style.display=='none'?sectionFilter.style.display='block':sectionFilter.style.display = 'none';

}

