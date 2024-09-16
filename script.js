const addBtns = document.querySelectorAll(
  ".content-container .dessert-content .container .product .upper .add"
);

const upperPart = document.querySelectorAll(
  ".content-container .dessert-content .container .product .upper"
);

const cartCon = document.querySelector(
  ".content-container .cart-container .cart-content"
);
const replacedEle = document.querySelector(
  ".content-container .cart-container .cart-content .replaced"
);

let totalItems = 0;

// let num;
// console.log(addBtns);

//   const dessertName = product.querySelector(".lower p:nth-child(2)");

addBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("hidden");
    btn.parentElement.parentElement.classList.add("active");
    let itemCount = 0;
    const products = document.querySelectorAll(
      ".content-container .dessert-content .container .product.active"
    );
    const dessertName = document.querySelectorAll(
      ".content-container .dessert-content .container .product.active .lower p:nth-child(2)"
    );

    const price = document.querySelectorAll(
      ".content-container .dessert-content .container .product.active .lower .price span"
    );
    // console.log(typeof price);
    // console.log(porducts);
    const newDiv = document.createElement("div");
    newDiv.className = "instead";
    const minIcon = document.createElement("i");
    minIcon.classList.add("fa-solid", "fa-minus");
    const numOfItems = document.createElement("p");
    let newTxt = document.createTextNode(`${itemCount}`);
    const incIcon = document.createElement("i");
    incIcon.classList.add("fa-solid", "fa-plus");
    incIcon.src = "images/icon-increment-quantity.svg";

    numOfItems.appendChild(newTxt);
    newDiv.appendChild(minIcon);
    newDiv.appendChild(numOfItems);
    newDiv.appendChild(incIcon);
    btn.parentElement.appendChild(newDiv);

    // let num = Number(newTxt.nodeValue);
    // console.log(num);

    // let prr = Number(price.nodeValue);
    // console.log(prr);

    const increse = document.querySelector(
      ".content-container .dessert-content .container .product .upper .instead .fa-plus"
    );
    const decrese = document.querySelector(
      ".content-container .dessert-content .container .product .upper .instead .fa-minus"
    );
    // console.log(increse);
    // click on icon

    increse.addEventListener("click", () => {
      itemCount = itemCount + 1;
      newTxt.textContent = `${itemCount}`;
      //   products.forEach((product) => {
      //     if (itemCount > 0) {
      //       replacedEle.classList.add("hidden");
      //       const cartDiv = document.createElement("div");
      //       cartDiv.className = "did-replaced";
      //       const productDiv = document.createElement("div");
      //       productDiv.className = "new-items";
      //       const divP = document.createElement("p");
      //       const productName = document.createTextNode(`${dessertName}`);
      //       const divPrice = document.createElement("p");
      //       let tot = itemCount * price;
      //       const productprice = document.createTextNode(
      //         `${itemCount}x  @$${price} $${tot}`
      //       );
      //       const iconDiv = document.createElement("div");
      //       iconDiv.className = "icon-div";
      //       const deleteIcon = document.createElement("img");
      //       deleteIcon.src = "images/icon-remove-item.svg";
      //       iconDiv.appendChild(deleteIcon);
      //       divPrice.appendChild(productprice);
      //       divP.appendChild(productName);
      //       productDiv.appendChild(iconDiv);
      //       productDiv.appendChild(divPrice);
      //       productDiv.appendChild(divP);
      //       cartDiv.appendChild(productDiv);
      //       cartCon.appendChild(cartDiv);
      //     }
      //   });
    });

    decrese.addEventListener("click", () => {
      itemCount = itemCount - 1;
      newTxt.textContent = `${itemCount}`;
      if (itemCount < 0) {
        btn.parentElement.parentElement.classList.remove("active");
        newDiv.remove();
        btn.classList.remove("hidden");
        itemCount = 0;
        replacedEle.classList.remove("hidden");
      }
    });
  });
});
