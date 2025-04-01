export const items = [
  {
    id: 1,
    type: "category",
    name: "Pizza",
    image: require("../assets/pizza.jpg"), // sử dụng require để đảm bảo đường dẫn tĩnh
  },
  {
    id: 2,
    type: "category",
    name: "Burgers",
    image: require("../assets/burgur.jpg"), // tương tự
  },
  {
    id: 3,
    type: "category",
    name: "Steak",
    image: require("../assets/steak.jpg"), // tương tự
  },

  {
    id: 4,
    type: "product",
    name: "Food 1",
    price: 1,
    image: require("../assets/milk.jpg"), // tương tự
    isSale: false,
  },
  {
    id: 5,
    type: "product",
    name: "Food 2",
    price: 3,
    image: require("../assets/banhmi.jpg"), // tương tự
    isSale: true,
  },
  {
    id: 6,
    type: "product",
    name: "Food 3",
    price: 5,
    image: require("../assets/phocuon.jpg"), // tương tự
    isSale: false,
  },
];
