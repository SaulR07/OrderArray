# order-arrays

Modulo para ordenar elementos de un arreglo.

## 📀 Install

```properties
npm install order-array
```

## 🚀 Usage

```javascript
const TypeOrder = require("order-arrays");

//For Array[JSON]
let data = [
	{name: "Hugo", age: 29, born: new Date("8/28/2000"), active: true},
	{name: "Paco", age: 30, born: new Date("4/18/1985"), active: true},
	{name: "Luis", age: 30, born: new Date("2/7/1993"), active: false}
];

let result = data.orderJSONByAttribute(TypeOrder.ASC, "age", "name");

//For Array[Array]
let data = [
	["Hugo", 29, new Date("8/28/2000"), true],
	["Paco", 30, new Date("4/18/1985"), true],
	["Luis", 30, new Date("2/7/1993"), false]
];

let result = data.orderJSONByAttribute(TypeOrder.ASC, 1, 0);

/*Return
result = [
	{name: "Hugo", age: 29, born: new Date("8/28/2000"), active: true},
	{name: "Luis", age: 30, born: new Date("2/7/1993"), active: false},
	{name: "Paco", age: 30, born: new Date("4/18/1985"), active: true}
];
*/
```

## Author

🧑 **Saul Reyes**

- Github: [@SaulR07](https://github.com/SaulR07)
