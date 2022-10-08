const product = {
    nameProduct: [
    "Макарон з гороху жовтого",
    "Макарони з гороху зеленого",
    "Макарони із квасолі",
    "Макарони із сочевиці зеленої",
    "Макарони із сочевиці червоної"
    ],
    productPrice: [
        85 + 'грн',
        95 + 'грн'
    ],
}
let templet ='';
for (let i=0; i<3; i++){
    templet += '<div class="content-menu">\
                    <div class="menu-1">\
                        <div class="avatar" id="productImg[i]">\
                            <img src="img/peas.jpg">\
                            <div class="product-type"><img src="img/spiral.png"></div></div>\
                        <div class="btn-price">\
                            <h4 class="name-prod" id="name.1"></h4>\
                            <div class="menu-botom">\
                                <a class="btn">Недоступно</a>\
                                <h2 class="price" id="price.product1"></h2>\
                                <div class="help"><span class="fab fa-question"></span></div>\
                            </div>\
                        </div>\
                    </div>\
                </div>';   
         } 

document.getElementById("one").innerHTML = templet;
document.getElementById("name.1").innerHTML = product.nameProduct[1];
document.getElementById("price.product1").innerHTML = product.productPrice[1];

