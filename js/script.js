items.forEach(element => {

    const itemCard = document.createElement('div');

    itemCard.className = `card`;

    itemCard.id = `card-${element.id}`;

    itemCard.innerHTML = `
    <div class="topCard__inner">
        <button type="submit" class="heard-button"><img src="img/icons/like_empty.svg" class="icon-heart" alt=""></button>
        <div class="topCard-image"><img class="item-image" src="img/${element.imgUrl}" alt=""></div>
        <h1 class="product-name">${element.name}</h1>
        <div class="quantity"><b>${element.orderInfo.inStock}</b> left in stock </div>
        <div class="price">Price: <b>${element.price}</b> $</div>
        <button class="addButton">Add to cart</button>
    </div>
    <div class="botCard__inner">
        <div class="botCard__inner-left">
            <span>${element.orderInfo.reviews}% Positive reviews</span>
            <span>Above avarage</span>
        </div>
        <div class="botCard__inner-right">
            <span>1234</span>
            <span>Orders</span>
        </div>
    </div>`;

    document.querySelector('.prod__cards-inner').appendChild(itemCard);

});