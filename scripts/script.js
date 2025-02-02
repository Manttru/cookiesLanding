document.getElementById('main-action-button').onclick = function () {
    document.getElementById('products').scrollIntoView({behavior: 'smooth'});
}

// scroll for Top-menu
const links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: 'smooth'});
    }
}

// scroll for buttons
const buttons = document.querySelectorAll(".products-item .button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("order").scrollIntoView({behavior: 'smooth'});
    }
}

//change currency for button id="change-currency"
const prices = document.getElementsByClassName("products-item-price");
document.getElementById("change-currency").onclick = function (e) {
    const currentCurrency = e.target.innerText;

    //change currency
    let newCurrency = "$";
    let coefficient = 1;
    if (currentCurrency === "$") {
        newCurrency = "₽";
        coefficient = 90;
    } else if (currentCurrency === "₽") {
        newCurrency = "BYN";
        coefficient = 3;
    } else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }
    e.target.innerText = newCurrency;

    for (let i = 0; i < prices.length; i++) {
        prices[i].innerHTML = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
    }
}

// active the button-order
const product = document.getElementById("product");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const buttonOrderAction = document.getElementById("order-action");


document.getElementById("order-action").onclick = function () {
    let hasError = false;

    [product, name, phone].forEach((item) => {
        if (!item.value) {
            item.style.borderColor = "red";
            item.style.animation = "pulse-order 1.5s infinite"; //Реализовано самостоятельно
            buttonOrderAction.style.background = "#CC0000FF"; //Реализовано самостоятельно
            buttonOrderAction.innerText = "Заполните все поля"; //Реализовано самостоятельно
            hasError = true;
        } else {
            item.style.borderColor = "";
            item.style.animation = "";
            buttonOrderAction.style.background = "#5243F4";
            buttonOrderAction.innerText = "Оформить заказ";
        }
    });

    if (!hasError) {
        [product, name, phone].forEach((item) => {
            item.value = "";
        });
        alert("Спасибо за заказ! Мы скоро свяжемся с вами!");
    }
}