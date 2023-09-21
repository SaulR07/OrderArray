const TypeOrder = require("../src/index");

let data = [
	{name: "Hugo", age: 29, born: new Date("8/28/2000"), active: true},
	{name: "Paco", age: 30, born: new Date("4/18/1985"), active: true},
	{name: "Luis", age: 30, born: new Date("2/7/1993"), active: false}
];

describe("Order Array", () => {
	test("Orden Array[JSON] by attribute", () => {
		let result = data.orderJSONByAttribute(TypeOrder.ASC, "age", "name");
		expect(result[1].name).toBe("Luis");
	});
});
