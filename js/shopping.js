// /memory Function start from here
function memory() {
    const bestPrice = document.getElementById('best-price');
    const bestPriceText = bestPrice.innerText;
    const newBestPrice = parseFloat(bestPriceText);

    const extramemory = document.getElementById('extra-memory');
    const newextramemory = '00';
    extramemory.innerText = newextramemory;

    const extraStorage = document.getElementById('extra-storage');
    const extraStorageText = extraStorage.innerText;
    const newextraStorage = parseFloat(extraStorageText);

    const extradelivery = document.getElementById('extra-delivery');
    const extradeliveryText = extradelivery.innerText;
    const newextradelivery = parseFloat(extradeliveryText);

    const totalprice = document.getElementById('total-price');
    totalprice.innerText = newextradelivery + newextraStorage + newBestPrice;

    //total money update
    totalchange()

}

//this function click for  8gb memory start from here
document.getElementById('memory-8').addEventListener('click', function () {
    memory()

});


//this function click for  16gb memory here
document.getElementById('memory-16').addEventListener('click', function () {
    const bestPrice = document.getElementById('best-price');
    const bestPriceText = bestPrice.innerText;
    const newBestPrice = parseFloat(bestPriceText);

    const extramemory = document.getElementById('extra-memory');
    const newextramemory = parseFloat(180);
    extramemory.innerText = newextramemory;

    const extraStorage = document.getElementById('extra-storage');
    const extraStorageText = extraStorage.innerText;
    const newextraStorage = parseFloat(extraStorageText);

    const extradelivery = document.getElementById('extra-delivery');
    const extradeliveryText = extradelivery.innerText;
    const newextradelivery = parseFloat(extradeliveryText);

    const totalprice = document.getElementById('total-price');
    totalprice.innerText = newextradelivery + newextraStorage + newBestPrice + newextramemory;

    //total money update here
    totalchange()

});


//this function click for  storage256 start from here

document.getElementById('storage256').addEventListener('click', function () {
    const bestPrice = document.getElementById('best-price');
    const bestPriceText = bestPrice.innerText;
    const newBestPrice = parseFloat(bestPriceText);

    const extramemory = document.getElementById('extra-memory');
    const extramemoryText = extramemory.innerText;
    const newextramemory = parseFloat(extramemoryText);

    const extraStorage = document.getElementById('extra-storage');
    const newextraStorage = '00';
    extraStorage.innerText = newextraStorage;

    const extradelivery = document.getElementById('extra-delivery');
    const extradeliveryText = extradelivery.innerText;
    const newextradelivery = parseFloat(extradeliveryText);

    const totalprice = document.getElementById('total-price');
    totalprice.innerText = newextradelivery + newBestPrice + newextramemory;

    //total money update from here
    totalchange()
});


//this function click for  storage512GB here

document.getElementById('storage512').addEventListener('click', function () {
    const bestPrice = document.getElementById('best-price');
    const bestPriceText = bestPrice.innerText;
    const newBestPrice = parseFloat(bestPriceText);

    const extramemory = document.getElementById('extra-memory');
    const extramemoryText = extramemory.innerText;
    const newextramemory = parseFloat(extramemoryText);

    const extraStorage = document.getElementById('extra-storage');
    const newextraStorage = parseFloat(100);
    extraStorage.innerText = newextraStorage;

    const extradelivery = document.getElementById('extra-delivery');
    const extradeliveryText = extradelivery.innerText;
    const newextradelivery = parseFloat(extradeliveryText);

    const totalprice = document.getElementById('total-price');
    totalprice.innerText = newextradelivery + newextraStorage + newBestPrice + newextramemory;

    //total money update here
    totalchange()
});

//this function click for  storage512GB here

document.getElementById('storage1tb').addEventListener('click', function () {
    const bestPrice = document.getElementById('best-price');
    const bestPriceText = bestPrice.innerText;
    const newBestPrice = parseFloat(bestPriceText);

    const extramemory = document.getElementById('extra-memory');
    const extramemoryText = extramemory.innerText;
    const newextramemory = parseFloat(extramemoryText);

    const extraStorage = document.getElementById('extra-storage');
    const newextraStorage = parseFloat(180);
    extraStorage.innerText = newextraStorage;

    const extradelivery = document.getElementById('extra-delivery');
    const extradeliveryText = extradelivery.innerText;
    const newextradelivery = parseFloat(extradeliveryText);

    const totalprice = document.getElementById('total-price');
    totalprice.innerText = newextradelivery + newextraStorage + newBestPrice + newextramemory;

    //total money update here
    totalchange()
});

//this function click for  deliveryfree here

document.getElementById('deliveryfree').addEventListener('click', function () {
    const bestPrice = document.getElementById('best-price');
    const bestPriceText = bestPrice.innerText;
    const newBestPrice = parseFloat(bestPriceText);

    const extramemory = document.getElementById('extra-memory');
    const extramemoryText = extramemory.innerText;
    const newextramemory = parseFloat(extramemoryText);

    const extraStorage = document.getElementById('extra-storage');
    const extraStorageText = extraStorage.innerText;
    const newextraStorage = parseFloat(extraStorageText);

    const extradelivery = document.getElementById('extra-delivery');
    const newextradelivery = '00';
    extradelivery.innerText = newextradelivery;

    const totalprice = document.getElementById('total-price');
    totalprice.innerText = newextraStorage + newBestPrice + newextramemory;

    //total money update start from here
    totalchange()
})


//this function click for  delivery paid here


document.getElementById('paidDelivery').addEventListener('click', function () {
    const bestPrice = document.getElementById('best-price');
    const bestPriceText = bestPrice.innerText;
    const newBestPrice = parseFloat(bestPriceText);

    const extramemory = document.getElementById('extra-memory');
    const extramemoryText = extramemory.innerText;
    const newextramemory = parseFloat(extramemoryText);

    const extraStorage = document.getElementById('extra-storage');
    const extraStorageText = extraStorage.innerText;
    const newextraStorage = parseFloat(extraStorageText);

    const extradelivery = document.getElementById('extra-delivery');
    const newextradelivery = parseFloat(20);
    extradelivery.innerText = newextradelivery;

    const totalprice = document.getElementById('total-price');
    totalprice.innerText = newextradelivery + newextraStorage + newBestPrice + newextramemory;

    //total money update from here
    totalchange()
})

//javaScript Button Design here
const buttons = document.getElementsByTagName('button');
for (const button of buttons) {
    button.style.padding = '6px 20px';
    button.style.borderRadius = '5px';
    button.style.borderColor = 'green';
}

const inputs = document.getElementsByTagName('input');
for (const input of inputs) {
    input.style.padding = '5px 20px';
    input.style.borderRadius = '5px';
    input.style.borderColor = 'green';
}
//total money update here

function totalchange() {
    const updateTotal = document.getElementById('total-price').innerText;
    const total = parseFloat(updateTotal);
    const newtotaltext = document.getElementById('totalAmmount');
    const totalAmmount = parseFloat(00);
    const newprice = total + totalAmmount;
    newtotaltext.innerText = newprice;
}



//discont function pomocode start from here

document.getElementById('apply-button').addEventListener('click', function () {
    const updateTotal = document.getElementById('total-price').innerText;
    const total = parseFloat(updateTotal);
    const newtotaltext = document.getElementById('totalAmmount');
    const totalAmmount = parseFloat(00);
    const newprice = total + totalAmmount;
    newtotaltext.innerText = newprice;
    const pomocode = document.getElementById('pomocode');

    const descount = parseFloat(20);

    if (pomocode.value == 'stevekaku') {
        newtotaltext.innerText = newprice - (newprice * descount / 100)
        pomocode.value = '';
    } else {
        pomocode.style.borderColor = 'red';
        pomocode.value = '';
    }


})
 