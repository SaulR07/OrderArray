const TypeOrder = require("./TypeOrder");

/**
 * Función para ordenar un arreglo de JSON por sus atributos
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 * @param {TypeOrder} typeOrder
 * @param {String} ...attributes
 * @returns {Array[JSON]}
 */
function orderJSONByAttribute(typeOrder, ...attributes) {
	validArguments(typeOrder, attributes);

	let orderedArray = this.sort(function (a, b) {
		let order = 0;
		for (let attribute of attributes) {
			let valueA = a[attribute];
			let valueB = b[attribute];

			validAttribute(valueA, valueB);
			order = sort(valueA, valueB, typeOrder);
			if (order != 0) {
				break;
			}
		}

		return order;
	});

	return orderedArray;
}

/**
 * Función para ordenar un arreglo de arreglos por sus posición
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 * @param {TypeOrder} typeOrder
 * @param {Number} ...positions Empezando de 0
 * @returns {Array[JSON]}
 */
function orderByPosition(typeOrder, ...positions) {
	validArguments(typeOrder, positions);

	let orderedArray = this.sort(function (a, b) {
		let order = 0;
		for (let position of positions) {
			let valueA = a[position];
			let valueB = b[position];

			validAttribute(valueA, valueB);
			order = sort(valueA, valueB, typeOrder);
			if (order != 0) {
				break;
			}
		}

		return order;
	});

	return orderedArray;
}

/**
 * Función donde se ordenan los elementos
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 * @param {String || Number || Function || Boolean} a
 * @param {String || Number || Function || Boolean} b
 * @param {TypeOrder} typeOrder
 * @returns {Number}
 */
function sort(a, b, typeOrder) {
	if (a == typeof String) {
		a = a.toUpperCase();
		b = b.toUpperCase();
	}

	// sort in an ascending order
	if (typeOrder == TypeOrder.ASC) {
		if (a > b) {
			return 1;
		} else if (a < b) {
			return -1;
		} else {
			return 0;
		}
	}

	//sort in an descending order
	if (typeOrder == TypeOrder.DESC) {
		if (a < b) {
			return 1;
		} else if (a > b) {
			return -1;
		} else {
			return 0;
		}
	}
}

/**
 * Función para validar los argumentos de la función
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 * @param {TypeOrder} typeOrder
 * @param {any} attributes
 * @returns {any}
 */
function validArguments(typeOrder, attributes) {
	if (typeOrder != TypeOrder.ASC && typeOrder != TypeOrder.DESC) {
		throw new Error("Argument type orden is incorrect");
	}

	if (attributes === null || attributes === undefined) {
		throw new Error("Argument Attributes is Null or Undefined");
	}
}

/**
 * Función para validar los tipos de atributos
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 * @param {String || Number || Function || Boolean} a
 * @param {String || Number || Function || Boolean} b
 */
function validAttribute(a, b) {
	if (a == undefined || b == undefined || a == "" || b == "") {
		throw new Error("Invalid or empty attribute");
	}

	if (typeof a != "string" && typeof a != "number" && typeof a != "function" && typeof a != "boolean") {
		throw new Error("Invalid type attribute");
	}
}

module.exports = {orderJSONByAttribute, orderByPosition};
