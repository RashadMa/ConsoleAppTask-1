const readline = require("readline-sync");

//#region Options

const options = [
  "Create Product",
  "Get All Products",
  "Get Product By Id",
  "Get All Product by Price",
  "Delete Products",
];

//#endregion

//#region Products

let products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    desc: "Your perfect pack for everyday use and",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    desc: "Slim-fitting style, contrast raglan long sleeve",
  },
];

//#endregion

Main();
let answer = readline.keyInSelect(options);
answer++;

//#region Main function

function Main() {
  let answer = readline.keyInSelect(options);
  answer++;

  switch (answer) {
    case 1:
      CreateProduct();
      break;
    case 2:
      GetAllProducts(products);
      break;
    case 3:
      GetProductById(products);
      break;
    case 4:
      GetAllProductByPrice(products);
      break;
    case 5:
      DeleteProduct(products);
      break;
    case 0:
      break;
    default:
      console.log("Select proper answer");
      break;
  }
  Main();
}

//#endregion

//#region Generating Id

function GenerateId(array) {
  if (array.length == 0) {
    return 1;
  }
  let previousId = array[array.length - 1].id;
  return (previousId += 1);
}

//#endregion

//#region Create Product

function CreateProduct() {
  let id = GenerateId(products);
  console.log("Fill inputs for create product");
  let title = readline.question("Title: ");
  let price = readline.question("Price: ");
  let desc = readline.question("Description: ");
  if (price == "") {
    console.log("Price is required");
  } else if (title == "") {
    console.log("Title is required");
  } else if (desc == "") {
    console.log("Description is required");
  } else {
    let product = {
      id: id,
      title: title,
      price: price,
      desc: desc,
    };
    products.push(product);
    console.log("Product created!!");
    console.table(product);
  }
}

//#endregion

//#region Get All Products

function GetAllProducts(arr) {
  arr.forEach((item) => {
    console.table(item);
  });
}

//#endregion

//#region Get Product By Id

function GetProductById(arr) {
  let id = readline.question("Id: ");
  let product = arr.find((item) => item.id == id);
  console.table(product);
}

//#endregion

//#region Get All Product by Price

function GetAllProductByPrice(arr) {
  let price = readline.question("Price: ");
  let products = arr.filter((item) => item.price >= price);
  console.table(products);
}

//#endregion

//#region Delete Product

function DeleteProduct(arr) {
  let id = readline.question("Id: ");
  let index = arr.findIndex((item) => item.id == id);
  arr.splice(index, 1);
  console.log("Product deleted!!");
  console.table(arr);
}

//#endregion
