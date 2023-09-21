const TypeOrder = require("../src/index");

describe("Order Array", () => {
	test("Orden Array[Array] by position", () => {
		let data = [
			["Hugo", 29, new Date("8/28/2000"), true],
			["Paco", 30, new Date("4/18/1985"), true],
			["Luis", 30, new Date("2/7/1993"), false]
		];
		let result = data.orderByPosition(TypeOrder.ASC, 1, 0);
		expect(result[1][0]).toBe("Luis");
	});
	test("Orden Array[JSON] by attribute", () => {
		let data = [
			{name: "Hugo", age: 29, born: new Date("8/28/2000"), active: true},
			{name: "Paco", age: 30, born: new Date("4/18/1985"), active: true},
			{name: "Luis", age: 30, born: new Date("2/7/1993"), active: false}
		];
		let result = data.orderJSONByAttribute(TypeOrder.ASC, "age", "name");
		expect(result[1].name).toBe("Luis");
	});
});
