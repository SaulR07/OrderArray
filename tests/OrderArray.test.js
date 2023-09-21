const TypeOrder = require("../src/index");

let data = [
	{nombre: "Edgardo", edad: 29, fecha: new Date("2/7/1993"), activo: true},
	{nombre: "Edgardo", edad: 38, fecha: new Date("2/5/ 1983"), activo: true},
	{nombre: "Saul", edad: 30, fecha: new Date("2/7/1993"), activo: true},
	{nombre: "Saul", edad: 30, fecha: new Date("2/7/1993"), activo: false},
	{nombre: "Alberto", edad: 48, fecha: new Date("2/10/1980"), activo: true}
];

describe("Order Array", () => {
	test("Orden Array[JSON] by attribute", () => {
		let result = data.orderJSONByAttribute(TypeOrder.ASC, "edad");
		expect(result[1].nombre).toBe("Saul");
	});
});
