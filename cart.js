const itemPrices = [
  {
    name: "TOMATOES",
    price: "53",
    quantityUni: "kg",
  },
  {
    name: "ONIONS",
    price: "35",
    quantityUni: "kg",
  },
  {
    name: "CARROTS",
    price: "63",
    quantityUni: "kg",
  },
  {
    name: "POTATOES",
    price: "43",
    quantityUni: "kg",
  },
  {
    name: "CAPSICUMS",
    price: "70",
    quantityUni: "kg",
  },
  {
    name: "CAULIFLOWERS",
    price: "15",
    quantityUni: "kg",
  },
  {
    name: "APPLES",
    price: "220",
    quantityUni: "kg",
  },
  {
    name: "ORANGES",
    price: "200",
    quantityUni: "kg",
  },
  {
    name: "MANGOES",
    price: "100",
    quantityUni: "kg",
  },
  {
    name: "WATERMELON",
    price: "40",
    quantityUni: "kg",
  },
  {
    name: "BANANAS",
    price: "50",
    quantityUni: "kg",
  },
  {
    name: "PINEAPPLES",
    price: "90",
    quantityUni: "kg",
  },
  {
    name: "MILK",
    price: "30",
    quantityUni: "Lit",
  },
  {
    name: "CHEESE",
    price: "90",
    quantityUni: "gm",
  },
  {
    name: "YOUGURT",
    price: "50",
    quantityUni: "kg",
  },
  {
    name: "BUTTER",
    price: "50",
    quantityUni: "gm",
  },
  {
    name: "PANEER",
    price: "42",
    quantityUni: "gm",
  },
  {
    name: "BUTTERMILK",
    price: "50",
    quantityUni: "Lit",
  },
  {
    name: "CHICKEN",
    price: "200",
    quantityUni: "kg",
  },
  {
    name: "FISH",
    price: "300",
    quantityUni: "kg",
  },
  {
    name: "SHRIMP",
    price: "300",
    quantityUni: "kg",
  },
  {
    name: "EGGS",
    price: "55",
    quantityUni: "dz",
  },
  {
    name: "MUTTON",
    price: "705",
    quantityUni: "kg",
  },
  {
    name: "BEEF",
    price: "195",
    quantityUni: "kg",
  },
];
// calling all functions
document.addEventListener('DOMContentLoaded',()=>{
  getData();
  addNOitems();
  delAllitems();
  addNoOrder();
})
// addNoitemDiv();
let getTotalbtn = document.querySelector(".gettotal");
getTotalbtn.addEventListener('click',adddelbtnstyle);
getTotalbtn.addEventListener("click",total);

//orderbtn        

let orderbtn = document.querySelector(".orderbtn");
orderbtn.addEventListener("click",addOrder);
function addOrder() {
   AddtoOrder();
   adddelbtnstyle();
   total();
   orderbtn.removeEventListener("click",addOrder);
}
function adddelbtnstyle(){
  let all = document.querySelectorAll(".cartItem");
  if (all.length!=0) {
    let x=document.querySelector(".totalvalue");
    console.log(x);
    x.classList.add("showdelBtn");
  }


}
//end 
function getData(name) {
  let x = [];
  for (let i = 1; i <= 24; i++) {
    if (localStorage.getItem(i)) {
      x[i] = localStorage.getItem(i);
    } else {
      x[i] = "false";
    }
  }
  for (let i = 1; i < x.length; i++) {
    const element = x[i];
    if (element != "false") {
      // console.log(element);
      createCartitem(element);
    }
  }
  // localStorage.clear();
}

function createCartitem(itemName) {
  let mainParDiv = document.querySelector(".cartItemss");
  // console.log(mainParDiv);
  // mainParDiv.firstElementChild.firstElementChild.innerHTML=itemName;
  // let x=document.querySelector('.cartItem').firstElementChild.textContent;
  let cartItemDiv = document.createElement("div");
  cartItemDiv.classList.add("cartItem");
  let cartheadingDiv = document.createElement("div");
  cartheadingDiv.innerHTML = itemName;
  cartheadingDiv.classList.add("cartItemhead");
  cartItemDiv.appendChild(cartheadingDiv);
  //price
  let cartPriceDiv = document.createElement("div");
  let price = itemPrices.filter((item) => {
    if (item.name == itemName) {
      return item;
    }
  });

  cartPriceDiv.innerHTML = `₹${price[0].price}`;
  cartPriceDiv.classList.add("cartItemPrice");
  cartItemDiv.appendChild(cartPriceDiv);

  //select quantity section
  let quantityform = document.createElement("form");
  let selectquan = document.createElement("select");
  selectquan.addEventListener("change", selectOnchange);
  if (itemName == "PANEER" || itemName == "CHEESE" || itemName == "BUTTER") {
    selectquan.setAttribute("id", "quantitySelect");
    let option1 = document.createElement("option");
    option1.value = "100";
    option1.innerHTML = "100";

    let option2 = document.createElement("option");
    option2.value = "200";
    option2.innerHTML = "200";

    let option3 = document.createElement("option");
    option3.value = "300";
    option3.innerHTML = "300";

    let option4 = document.createElement("option");
    option4.value = "400";
    option4.innerHTML = "400";

    let option5 = document.createElement("option");
    option5.value = "500";
    option5.innerHTML = "500";

    selectquan.appendChild(option1);
    selectquan.appendChild(option2);
    selectquan.appendChild(option3);
    selectquan.appendChild(option4);
    selectquan.appendChild(option5);
  } else {
    selectquan.setAttribute("id", "quantitySelect");
    let option1 = document.createElement("option");
    option1.value = "1";
    option1.innerHTML = "1";

    let option2 = document.createElement("option");
    option2.value = "2";
    option2.innerHTML = "2";

    let option3 = document.createElement("option");
    option3.value = "3";
    option3.innerHTML = "3";

    let option4 = document.createElement("option");
    option4.value = "4";
    option4.innerHTML = "4";

    let option5 = document.createElement("option");
    option5.value = "5";
    option5.innerHTML = "5";

    selectquan.appendChild(option1);
    selectquan.appendChild(option2);
    selectquan.appendChild(option3);
    selectquan.appendChild(option4);
    selectquan.appendChild(option5);
  }

  let quantityUnitlabel = document.createElement("label");
  quantityUnitlabel.innerHTML = `${price[0].quantityUni}`;

  quantityform.appendChild(selectquan);
  quantityform.appendChild(quantityUnitlabel);

  let quantityDiv = document.createElement("div");
  quantityDiv.classList.add("cartItemquantity");
  quantityDiv.appendChild(quantityform);
  cartItemDiv.appendChild(quantityDiv);

  let quantityPrice = document.createElement("div");
  quantityPrice.classList.add("cartItempPrice");
  quantityPrice.innerHTML = `₹${price[0].price}`;
  //label not added
  cartItemDiv.appendChild(quantityPrice);

  // let quandelbtnDiv = document.createElement("div");
  // quandelbtnDiv.classList.add("removeBtn");
  let quandelbtn = document.createElement("button");
  quandelbtn.classList.add("removeBtn");
  quandelbtn.addEventListener('click',deleteCartitem)
  quandelbtn.innerHTML = " <i class='fa-solid fa-trash fa-lg'></i>";
  // quandelbtnDiv.appendChild(quandelbtn);

  cartItemDiv.appendChild(quandelbtn);

  mainParDiv.append(cartItemDiv);
}
function selectOnchange(e) {
  let subTotal = 0;
  let ParSelect = e.target;
  let outputStr = "";
  let selectedOptText = ParSelect.options[ParSelect.selectedIndex].text;
  let subTotalText = e.target.parentElement.parentElement.previousSibling.innerHTML;
  console.log();
  // console.log(selectedOptText);
  if (parseInt(selectedOptText / 10) === 0) {
    subTotalText = subTotalText.substring(1);
    subTotal = parseInt(subTotalText);
    parseInt(selectedOptText);
    subTotal = subTotal * selectedOptText;
    // onchangeChgTotal(subTotalText, selectedOptText, subTotal, ParSelect);
    toString(subTotal);
    // console.log(typeof(subTotal));
    outputStr = `₹${subTotal}`;
    e.target.parentElement.parentElement.nextSibling.innerHTML = outputStr;
    total();
  } 
  else {
    if (ParSelect.parentElement.parentElement.parentElement.firstChild.innerHTML == "PANEER") {
      switch (selectedOptText) {
        case "100":
          ParSelect.parentNode.parentNode.previousSibling.innerHTML = "₹42";
          ParSelect.parentNode.parentNode.nextSibling.innerHTML = "₹42";
          break;
        case "200":
          ParSelect.parentNode.parentNode.previousSibling.innerHTML = "₹90";
          ParSelect.parentNode.parentNode.nextSibling.innerHTML = "₹90";
          break;
        case "300":
          ParSelect.parentNode.parentNode.previousSibling.innerHTML = "₹125";
          ParSelect.parentNode.parentNode.nextSibling.innerHTML = "₹125";
          break;
        case "400":
          ParSelect.parentNode.parentNode.previousSibling.innerHTML = "₹180";
          ParSelect.parentNode.parentNode.nextSibling.innerHTML = "₹180";
          break;
        case "500":
          ParSelect.parentNode.parentNode.previousSibling.innerHTML = "₹250";
          ParSelect.parentNode.parentNode.nextSibling.innerHTML = "₹250";
          break;
      }
    } else if (ParSelect.parentElement.parentElement.parentElement.firstChild.innerHTML ==   "CHEESE") {
      switch (selectedOptText) {
        case "100":
          ParSelect.parentNode.parentNode.previousSibling.innerHTML = "₹90";
          ParSelect.parentNode.parentNode.nextSibling.innerHTML = "₹90";
          break;
        case "200":
          ParSelect.parentNode.parentNode.previousSibling.innerHTML = "₹125";
          ParSelect.parentNode.parentNode.nextSibling.innerHTML = "₹125";
          break;
        case "300":
          ParSelect.parentNode.parentNode.previousSibling.innerHTML = "₹175";
          ParSelect.parentNode.parentNode.nextSibling.innerHTML = "₹175";
          break;
        case "400":
          ParSelect.parentNode.parentNode.previousSibling.innerHTML = "₹220";
          ParSelect.parentNode.parentNode.nextSibling.innerHTML = "₹220";
          break;
        case "500":
          ParSelect.parentNode.parentNode.previousSibling.innerHTML = "₹255";
          ParSelect.parentNode.parentNode.nextSibling.innerHTML = "₹255";
          break;
      }
    }else {
      switch (selectedOptText) {
        case "100":
          ParSelect.parentNode.parentNode.previousSibling.innerHTML = "₹50";
          ParSelect.parentNode.parentNode.nextSibling.innerHTML = "₹50";
          break;
        case "200":
          ParSelect.parentNode.parentNode.previousSibling.innerHTML = "₹100";
          ParSelect.parentNode.parentNode.nextSibling.innerHTML = "₹100";
          break;
        case "300":
          ParSelect.parentNode.parentNode.previousSibling.innerHTML = "₹150";
          ParSelect.parentNode.parentNode.nextSibling.innerHTML = "₹150";
          break;
        case "400":
          ParSelect.parentNode.parentNode.previousSibling.innerHTML = "₹210";
          ParSelect.parentNode.parentNode.nextSibling.innerHTML = "₹210";
          break;
        case "500":
          ParSelect.parentNode.parentNode.previousSibling.innerHTML = "₹255";
          ParSelect.parentNode.parentNode.nextSibling.innerHTML = "₹255";
          break;
      }
    }
  total();
 }
}
function deleteCartitem(e) {
  let parDiv = document.querySelector(".cartItemss");
  if (parDiv.childElementCount==1) {
    addNoitemDiv();
    e.target.parentElement.parentElement.remove();
    localStorage.clear();
    let x = document.querySelector(".totalvalue");
     x.classList.remove("showdelBtn");
     
    }else{
      e.target.parentElement.parentElement.remove();
      total();  
    
  }
  // console.log();
}
function delAllitems() {
  let parDiv = document.querySelector(".cartItemss");
  let delBtn = document.querySelector(".delallbtn");
  delBtn.addEventListener('click',(e)=>{
    // console.log("hello");
    if (parDiv.firstElementChild.innerHTML != "No items added to cart") {
       let child = parDiv.lastElementChild;
       while (child) {
         parDiv.removeChild(child)
         child = parDiv.lastElementChild;
       }
      addNoitemDiv();
      localStorage.clear();
      let x = document.querySelector(".totalvalue");
      x.classList.remove("showdelBtn");
    }
  })
}

function addNoitemDiv() {
    let parDiv = document.querySelector(".cartItemss");
   let noitemDiv = document.createElement("div");
   noitemDiv.classList.add("Noitemhead");
   noitemDiv.innerHTML = "No items added to cart";
   parDiv.classList.add("parDivStyles");
   parDiv.appendChild(noitemDiv);
}
function addNOitems() {
   let parDiv = document.querySelector(".cartItemss");
    if (parDiv.childElementCount == 0) {
      addNoitemDiv();
    }
}

function total() {
  let TotalVal=0;
  // console.log(NumVal);
  let all=document.querySelectorAll('.cartItem');
  let totaldiv=document.querySelector('.totalvalue');
  // console.log(all.length);
  if (all.length!=0) {
    all.forEach((citem)=>{
      let price = citem.lastElementChild.previousElementSibling.innerHTML;
      // console.log(price);
      price = price.substring(1);
      let num=parseInt(price);
      // console.log(price);
      // console.log(typeof(num));
      TotalVal =TotalVal+num;
    })
    toString(TotalVal);
    totaldiv.innerHTML=`₹${TotalVal}`;
  }
 
}
function AddtoOrder() {
  let exsitingDiv = document.querySelector(".noitemorder");
  let all = document.querySelectorAll(".cartItem");
  console.log(all.length);
  if (exsitingDiv!=null&&all.length!=0) {
    exsitingDiv.remove();
  }
  let parDiv = document.querySelector(".Numoforders");
  if (all.length!=0) {
    let orderPlacediv = document.createElement("div");
    orderPlacediv.classList.add("orderitem");
    orderPlacediv.innerHTML = "Order placed";
    let desaboutproDiv = document.createElement("div");
    desaboutproDiv.classList.add("desaboutpro");
    desaboutproDiv.innerHTML =
      "The payment and authentication part is not implemented as the project is front-end specific";
    orderPlacediv.append(desaboutproDiv);
    parDiv.appendChild(orderPlacediv);

  }
}
function addNoOrder() {
  let maindiv = document.querySelector(".Numoforders");
  // console.log(maindiv);
  let ordernotPlacediv = document.createElement("div");
  ordernotPlacediv.innerHTML = "No Orders";
  ordernotPlacediv.classList.add("noitemorder");
  maindiv.appendChild(ordernotPlacediv)
}