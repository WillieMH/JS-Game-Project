// const drinks = [
//   {name: "lime", price: 10},
//   {name: "lemonade", price: 50},
//   {name: "orangeade", price: 25}
// ]

// const drinksArry = drinks.sort(drinks.price);

// console.log(drinksArry);

// Solution from Slack

const drinks = [
  {"name" : "Limeade",  "price" : 20},
  {"name" : "Lemonade", "price" : 10},
  {"name" : "Whiskey",  "price" : 50}
]

const sortObjArray = (array, key) => {
  return [...array].sort((item1, item2) => {
      return item1[key] - item2[key]
  })
}

console.log(sortObjArray(drinks, "price"))

// Another solution from Slack
const getSortedPrice = (a, b) => drinks.sort((a, b) => (a.price) - (b.price));