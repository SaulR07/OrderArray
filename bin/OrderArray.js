const TypeOrder = require("./enums/TypeOrder");

/**
 * Función para ordenar un arreglo de JSON por sus atributos
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 * @param {TypeOrder} typeOrder
 * @param {String} ...attributes
 * @returns {Array[JSON]}
 */
function orderJSONByAttribute(typeOrder, ...attributes) {
	validArguments(typeOrder, attributes);

	return this.sort(function (a, b) {
		let orderJSON = 0;
		for (let attribute of attributes) {
			let valueA = a[attribute];
			let valueB = b[attribute];

			validAttribute(valueA, valueB);
			orderJSON = sort(valueA, valueB, typeOrder);
			if (orderJSON != 0) {
				break;
			}
		}

		return orderJSON;
	});
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

	return this.sort(function (a, b) {
		let orderArray = 0;
		for (let position of positions) {
			let valueA = a[position];
			let valueB = b[position];

			validAttribute(valueA, valueB);
			orderArray = sort(valueA, valueB, typeOrder);
			if (orderArray != 0) {
				break;
			}
		}

		return orderArray;
	});
}

function order(typeOrder) {
	if (typeOrder != TypeOrder.ASC && typeOrder != TypeOrder.DESC) {
		throw new Error("Type orden is incorrect");
	}

	return this.sort(function (a, b) {
		return sort(a, b, typeOrder);
	});
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
 * @param {any} orderArguments
 */
function validArguments(typeOrder, orderArguments) {
	if (typeOrder != TypeOrder.ASC && typeOrder != TypeOrder.DESC) {
		throw new Error("Type orden is incorrect");
	}

	if (orderArguments === null || orderArguments === undefined) {
		throw new Error("Order arguments is Null or Undefined");
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

module.exports = {orderJSONByAttribute, orderByPosition, order};
