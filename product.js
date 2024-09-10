
let totalCount = 0;
let totalAmount = 0;


function buyItem(priceId, buttonId) {
    const priceElement = document.getElementById(priceId);
    const price = parseInt(priceElement.innerText);
    
    totalCount += 1;
    totalAmount += price;


    document.querySelector('.blue span').innerText = totalCount;
    document.querySelector('.green span').innerText = totalAmount;

    const button = document.getElementById(buttonId);
    button.innerText = "Sold Out";
    button.disabled = true;
}


document.getElementById('buyShoes').addEventListener('click', function() {
    buyItem('priceShoes', 'buyShoes');
});

document.getElementById('buyTshirt').addEventListener('click', function() {
    buyItem('priceTshirt', 'buyTshirt');
});

document.getElementById('buyWatch').addEventListener('click', function() {
    buyItem('priceWatch', 'buyWatch');
});

document.getElementById('buyCShoes').addEventListener('click', function() {
    buyItem('priceCShoes', 'buyCShoes');
});

document.getElementById('buyCap').addEventListener('click', function() {
    buyItem('priceCap', 'buyCap');
});

document.getElementById('buyShirt').addEventListener('click', function() {
    buyItem('priceShirt', 'buyShirt');
});

document.getElementById('buyGJacket').addEventListener('click', function() {
    buyItem('priceGJacket', 'buyGJacket');
});

document.getElementById('buySJacket').addEventListener('click', function() {
    buyItem('priceSJacket', 'buySJacket');
});

document.getElementById('buyRJacket').addEventListener('click', function() {
    buyItem('priceRJacket', 'buyRJacket');
});
