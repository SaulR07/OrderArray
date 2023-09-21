# Declaración Fiscal

Sistema para crear la declaración fiscal a base de los comprobantes en formato XML

## 📀 Install

```properties
npm install order-array
```

## 🚀 Usage

```javascript
const TypeOrder = require("order-array");

//For Array[JSON]
let data = [
	{name: "Hugo", age: 29, born: new Date("8/31/2000"), active: true},
	{name: "Paco", age: 30, born: new Date("4/18/1985"), active: true},
	{name: "Luis", age: 30, born: new Date("2/7/1993"), active: false}
];

let result = data.orderJSONByAttribute(TypeOrder.ASC, "age");

console.log(result);
```

## Author

🧑 **Saul Reyes**

- <a href="https://github.com/SaulR07"><img target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" style="width: 3%;"></a>
