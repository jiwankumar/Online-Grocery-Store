//nav bar end

//text scroller start
let mainHead = document.querySelector(".chgTextheading");
mainHead.addEventListener("mouseover", ChangeAnimation);
let chgTextdiv = document.querySelectorAll(".chgTxt");
function ChangeAnimation() {
  chgTextdiv.forEach((item) => {
    item.classList.add("animationclass");
  });
  setInterval(removeanimation, 9000);
}
function removeanimation() {
  chgTextdiv.forEach((item) => {
    item.classList.remove("animationclass");
  });
}
//text scroller end
// category section start

//object data start
const items = [
  {
    name: "TOMATOES",
    category: "vegetable",
    des: "Fresh, and delicious tomatoes are a summertime favourite. Tomatoes are perfect for sauces and salsas",
    img: "ProjectImages/Tomato.jpg",
  },
  {
    name: "ONIONS",
    category: "vegetable",
    des: "The beauty of an Onion is that it can go just about anywhere. Cut it into thin slices to top off your favourite burger or hot dog",
    img: "ProjectImages/onion.jpg",
  },
  {
    name: "CARROTS",
    category: "vegetable",
    des: "Carrots are a great addition to soups and stews, appetizers and hors d'oeuvres, side dishes and salads",
    img: "ProjectImages/carrot.jpg",
  },
  {
    name: "POTATOES",
    category: "vegetable",
    des: "Potatoes are a good source of fiber, which can help you lose weight by keeping you full longer",
    img: "ProjectImages/pexels-pixabay-144248.jpg",
  },
  {
    name: "CAPSICUMS",
    category: "vegetable",
    des: "Capsicum is very high in Vitamin C and great for your health",
    img: "ProjectImages/capesicum.jpg",
  },
  {
    name: "CAULIFLOWERS",
    category: "vegetable",
    des: "Cauliflower is a cruciferous vegetable that is naturally high in fiber and B-vitamins.",
    img: "ProjectImages/califloer.jpg",
  },
  {
    name: "APPLES",
    category: "fruit",
    des: "Apples has tremendous health benefits grab the fresh juicy apples now",
    img: "ProjectImages/Apple.jpg",
  },
  {
    name: "ORANGES",
    category: "fruit",
    des: "Oranges are a favourite snack for many people. They can be eaten out-of-hand or used as a garnish",
    img: "ProjectImages/orange.jpg",
  },
  {
    name: "MANGOES",
    category: "fruit",
    des: "Fresh and juicy sweetest mangoes add it to lunch for this summer",
    img: "ProjectImages/mango.jpg",
  },
  {
    name: "WATERMELON",
    category: "fruit",
    des: "reat for hydration have a slice for this summer",
    img: "ProjectImages/watermaleon.jpg",
  },
  {
    name: "BANANAS",
    category: "fruit",
    des: "Bananas are incredibly healthy, convenient, delicious, and one of the most inexpensive fresh fruits you can buy",
    img: "ProjectImages/bananas.jpg",
  },
  {
    name: "PINEAPPLES",
    category: "fruit",
    des: "Pineapple gives you a healthy dose of several B vitamins, including thiamin, niacin, B6 and folate.",
    img: "ProjectImages/Pineapple.jpg",
  },
  {
    name: "MILK",
    category: "dairyprod",
    des: "Milk is the most common dairy product that is used every day by almost everyone. Consume directly or add to your breakfast",
    img: "ProjectImages/milk.jpg",
  },
  {
    name: "CHEESE",
    category: "dairyprod",
    des: "Cheese is a dairy product, derived from milk and produced in wide ranges of flavours",
    img: "ProjectImages/chesse.jpg",
  },
  {
    name: "YOUGURT",
    category: "dairyprod",
    des: "Yogurt is produced by bacterial fermentation of milk and is best known for health benefits.",
    img: "ProjectImages/youg.jpg",
  },
  {
    name: "BUTTER",
    category: "dairyprod",
    des: "Butter contains vitamin D, a nutrient that is vital for bone growth and development",
    img: "ProjectImages/butter.jpg",
  },
  {
    name: "PANEER",
    category: "dairyprod",
    des: "Rich in protein best vegin diet",
    img: "ProjectImages/pan.jpg",
  },
  {
    name: "BUTTERMILK",
    category: "dairyprod",
    des: "Best coolent for your body order now",
    img: "ProjectImages/buttermilk.jpg",
  },
  {
    name: "CHICKEN",
    category: "meat",
    des: "With our Chicken Curry Cut on hand, making a delicious chicken curry has never been easier!",
    img: "ProjectImages/chicken.jpg",
  },
  {
    name: "FISH",
    category: "meat",
    des: "filled with omega-3 fatty acids and vitamins such as D and B2 powerpacked with nutrients",
    img: "ProjectImages/Fish.jpg",
  },
  {
    name: "SHRIMP",
    category: "meat",
    des: "Shrimp has an impressive nutrition profiles and they are very tasty and yummy",
    img: "ProjectImages/prawn.jpg",
  },
  {
    name: "EGGS",
    category: "meat",
    des: "rich in protein and great for health",
    img: "ProjectImages/egg.jpg",
  },
  {
    name: "MUTTON",
    category: "meat",
    des: "fresh juicy mutton for your biryani order now",
    img: "ProjectImages/mutton.jpeg",
  },
  {
    name: "BEEF",
    category: "meat",
    des: "Beef is one of the most popular types of meat. It's exceptionally rich in high-quality protein, vitamins, and minerals",
    img: "ProjectImages/beef.jpg",
  },
];

let vegbtn = document.querySelector(".vegBtn");
let fruBtn = document.querySelector(".fruBtn");
let dairyProducts = document.querySelector(".dpBtn");
let Meat = document.querySelector(".meatBtn");
let catDiv = document.querySelector(".categories");
// console.log(catDiv);

vegbtn.addEventListener("click", () => {
  let vegArry = items.filter((itr) => {
    if (itr.category == "vegetable") {
      return itr;
    }
  });

  let itemarry = document.querySelectorAll(".catitem");
  for (let i = 0; i < vegArry.length; i++) {
    const item = itemarry[i];
    var child = item.lastElementChild;
    while (child) {
      item.removeChild(child);
      child = item.lastElementChild;
    }
    let imgcre = document.createElement("img");
    imgcre.src = vegArry[i].img;
    item.append(imgcre);
    let contDiv = document.createElement("div");
    contDiv.classList.add("item-content");
    let contHead = document.createElement("h1");
    contHead.innerHTML = vegArry[i].name;
    let contPara = document.createElement("p");
    contPara.innerHTML = vegArry[i].des;
    let contBtn = document.createElement("button");
    contBtn.classList.add("cartBtn");
    let favBtn = document.createElement("button");
    favBtn.classList.add("favBtn");
    favBtn.innerHTML = "<i class='fa-solid fa-heart fa-xl'>";
    contBtn.innerHTML = "Add to cart";
    contDiv.append(contHead);
    contDiv.append(contPara);
    contDiv.append(contBtn);
    contDiv.append(favBtn);
    item.appendChild(imgcre);
    item.appendChild(contDiv);
  }
  addevent();
  cartBtnsaddEve();
});

fruBtn.addEventListener("click", () => {
  let fruArry = items.filter((itr) => {
    if (itr.category == "fruit") {
      return itr;
    }
  });
  let itemarry = document.querySelectorAll(".catitem");
  for (let i = 0; i < fruArry.length; i++) {
    const item = itemarry[i];
    var child = item.lastElementChild;
    while (child) {
      item.removeChild(child);
      child = item.lastElementChild;
    }
    let imgcre = document.createElement("img");
    imgcre.src = fruArry[i].img;
    item.append(imgcre);
    let contDiv = document.createElement("div");
    contDiv.classList.add("item-content");
    let contHead = document.createElement("h1");
    contHead.innerHTML = fruArry[i].name;
    let contPara = document.createElement("p");
    contPara.innerHTML = fruArry[i].des;
    let contBtn = document.createElement("button");
    contBtn.classList.add("cartBtn");
    contBtn.innerHTML = "Add to cart";
    let favBtn = document.createElement("button");
    favBtn.classList.add("favBtn");
    favBtn.innerHTML = "<i class='fa-solid fa-heart fa-xl'>";
    contDiv.append(contHead);
    contDiv.append(contPara);
    contDiv.append(contBtn);
    contDiv.append(favBtn);
    item.appendChild(imgcre);
    item.appendChild(contDiv);
  }

  addevent();
  cartBtnsaddEve();
});

dairyProducts.addEventListener("click", () => {
  let dpArry = items.filter((itr) => {
    if (itr.category == "dairyprod") {
      return itr;
    }
  });
  let itemarry = document.querySelectorAll(".catitem");
  for (let i = 0; i < dpArry.length; i++) {
    const item = itemarry[i];
    var child = item.lastElementChild;
    while (child) {
      item.removeChild(child);
      child = item.lastElementChild;
    }
    let imgcre = document.createElement("img");
    imgcre.src = dpArry[i].img;
    item.append(imgcre);
    let contDiv = document.createElement("div");
    contDiv.classList.add("item-content");
    let contHead = document.createElement("h1");
    contHead.innerHTML = dpArry[i].name;
    let contPara = document.createElement("p");
    contPara.innerHTML = dpArry[i].des;
    let contBtn = document.createElement("button");
    contBtn.classList.add("cartBtn");
    contBtn.innerHTML = "Add to cart";
    let favBtn = document.createElement("button");
    favBtn.classList.add("favBtn");
    favBtn.innerHTML = "<i class='fa-solid fa-heart fa-xl'>";
    contDiv.append(contHead);
    contDiv.append(contPara);
    contDiv.append(contBtn);
    contDiv.append(favBtn);
    item.appendChild(imgcre);
    item.appendChild(contDiv);
  }

  addevent();
  cartBtnsaddEve();
});

Meat.addEventListener("click", () => {
  // addtoFav();
  let meatArry = items.filter((itr) => {
    if (itr.category == "meat") {
      return itr;
    }
  });

  let itemarry = document.querySelectorAll(".catitem");
  for (let i = 0; i < meatArry.length; i++) {
    const item = itemarry[i];
    var child = item.lastElementChild;
    while (child) {
      item.removeChild(child);
      child = item.lastElementChild;
    }
    let imgcre = document.createElement("img");
    imgcre.src = meatArry[i].img;
    item.append(imgcre);
    let contDiv = document.createElement("div");
    contDiv.classList.add("item-content");
    let contHead = document.createElement("h1");
    contHead.innerHTML = meatArry[i].name;
    let contPara = document.createElement("p");
    contPara.innerHTML = meatArry[i].des;
    let contBtn = document.createElement("button");
    contBtn.classList.add("cartBtn");
    contBtn.innerHTML = "Add to cart";
    let favBtn = document.createElement("button");
    favBtn.classList.add("favBtn");
    favBtn.innerHTML = "<i class='fa-solid fa-heart fa-xl'>";
    contDiv.append(contHead);
    contDiv.append(contPara);
    contDiv.append(contBtn);
    contDiv.append(favBtn);
    item.appendChild(imgcre);
    item.appendChild(contDiv);
  }
  addevent();
  cartBtnsaddEve();
});
//category section end

//
cartBtnsaddEve();
addevent();
function addevent() {
  let x = document.querySelectorAll(".favBtn");
  x.forEach((item) => {
    item.addEventListener("click", (e) => {
      let favcheckIn =
        e.target.parentElement.parentNode.firstElementChild.innerHTML;
      let favDiv = document.querySelector(".ulfav");
      // console.log(favDiv.firstElementChild.innerHTML);
      if (favDiv.firstElementChild.innerHTML == "No items added") {
        favDiv.firstElementChild.remove();
      }
      addtoFav(favcheckIn);
    });
  });
}
function addtoFav(favitem) {
  // let x=document.querySelector('.favoItem');
  // console.log(x.firstElementChild.childNodes);
  let liChild = document.querySelector(".ulfav").children;
  let favUl = document.querySelector(".ulfav");
  let boolofFav = false;
  let favconten = [];
  // console.log(liChild);
  for (let i = 0; i < liChild.length; i++) {
    favconten[i] = liChild[i].textContent;
  }
  for (let i = 0; i < favconten.length; i++) {
    const element = favconten[i];
    if (element == favitem) {
      boolofFav = true;
    }
  }
  if (favUl.childElementCount <= 4 && boolofFav === false) {
    let favList = document.createElement("li");
    favList.innerHTML = favitem;
    let favdelbtn = document.createElement("button");
    favdelbtn.classList.add("fds");
    favdelbtn.innerHTML = "<i class='fa-solid fa-xmark fa-lg'></i>";
    favdelbtn.addEventListener("click", delfromFav);
    // let delDiv=document.createElement('div');
    // delDiv.append(favdelbtn);
    favList.append(favdelbtn);
    favUl.appendChild(favList);
  } else if (favUl.childElementCount > 4 && boolofFav === false) {
    let favwarn = document.querySelector(".FavWarning");
    favwarn.classList.toggle("warningTras");
    setTimeout(() => {
      favwarn.classList.toggle("warningTras");
    }, 3000);
  }
}
function delfromFav(e) {
  console.log(e);

  let y = e.target.parentElement.parentElement;
  let favUl = document.querySelector(".ulfav");
  console.log(y);
  if (favUl.childElementCount === 1) {
    let favList = document.createElement("li");
    favList.innerHTML = "No items added";
    favUl.append(favList);
    y.remove();
  } else {
    y.remove();
  }
}
//favorites part end

//cart part start
// let cartItemName;
// import {createCartitem} from './cart.js';
let j = 0;
function cartBtnsaddEve() {
  let cartBtnss = document.querySelectorAll(".cartBtn");
  cartBtnss.forEach((item, index) => {
    item.addEventListener("click", () => {
      let y = item.parentNode.firstElementChild.textContent;
      console.log(y);
      switchfordata(y);

      // })
    });
  });
}

let favAddtocart = document.querySelector(".favCartbtn");
favAddtocart.addEventListener("click", (e) => {
  let favd = document.querySelector(".ulfav");
  let liChild = document.querySelector(".ulfav").children;
  for (let i = 0; i < liChild.length; i++) {
    const element = liChild[i].textContent;
    switchfordata(element);
  }
  let favUl = document.querySelector(".ulfav");
  console.log(y);
});

function switchfordata(x) {
  switch (x) {
    case "TOMATOES":
      localStorage.setItem(1, "TOMATOES");
      break;
    case "ONIONS":
      localStorage.setItem(2, "ONIONS");
      break;
    case "CARROTS":
      localStorage.setItem(3, "CARROTS");
      break;
    case "POTATOES":
      localStorage.setItem(4, "POTATOES");
      break;
    case "CAPSICUMS":
      localStorage.setItem(5, "CAPSICUMS");
      break;
    case "CAULIFLOWERS":
      localStorage.setItem(6, "CAULIFLOWERS");
      break;
    case "APPLES":
      localStorage.setItem(7, "APPLES");
      break;
    case "ORANGES":
      localStorage.setItem(8, "ORANGES");
      break;
    case "MANGOES":
      localStorage.setItem(9, "MANGOES");
      break;
    case "WATERMELON":
      localStorage.setItem(10, "WATERMELON");
      break;
    case "BANANAS":
      localStorage.setItem(11, "BANANAS");
      break;
    case "PINEAPPLES":
      localStorage.setItem(12, "PINEAPPLES");
      break;
    case "MILK":
      localStorage.setItem(13, "MILK");
      break;
    case "YOUGURT":
      localStorage.setItem(14, "YOUGURT");
      break;
    case "PANEER":
      localStorage.setItem(15, "PANEER");
      break;
    case "BUTTERMILK":
      localStorage.setItem(16, "BUTTERMILK");
      break;
    case "CHEESE":
      localStorage.setItem(17, "CHEESE");
      break;
    case "BUTTER":
      localStorage.setItem(18, "BUTTER");
      break;
    case "CHICKEN":
      localStorage.setItem(19, "CHICKEN");
      break;
    case "FISH":
      localStorage.setItem(20, "FISH");
      break;
    case "SHRIMP":
      localStorage.setItem(21, "SHRIMP");
      break;
    case "MUTTON":
      localStorage.setItem(22, "MUTTON");
      break;
    case "BEEF":
      localStorage.setItem(23, "BEEF");
      break;
    case "EGGS":
      localStorage.setItem(24, "EGGS");
      break;
  }
}
