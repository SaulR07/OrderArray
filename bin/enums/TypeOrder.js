/**
 * @enum
 * Clase para representar el tipo de orden
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 */
class TypeOrder {
	static ASC = new TypeOrder(1, "ASC", "ascendant");
	static DESC = new TypeOrder(2, "DESC", "Descending ");

	_id;
	_key;
	_description;

	/**
	 * Constructor de la clase
	 * @author Saul Reyes Medina <saulreyesm@outlook.com>
	 * @param {Number} id
	 * @param {String} key
	 * @param {String} description
	 */
	constructor(id, key, description) {
		this._id = id;
		this._key = key;
		this._description = description;
	}

	/**
	 * getter
	 * @author Saul Reyes Medina <saulreyesm@outlook.com>
	 * @returns {Number}
	 */
	get id() {
		return this._id;
	}

	/**
	 * setter
	 * @author Saul Reyes Medina <saulreyesm@outlook.com>
	 * @param {any} value
	 * @returns {Number}
	 */
	set id(value) {
		this._id = value;
	}

	/**
	 * getter
	 * @author Saul Reyes Medina <saulreyesm@outlook.com>
	 * @returns {String}
	 */
	get key() {
		return this._key;
	}

	/**
	 * setter
	 * @author Saul Reyes Medina <saulreyesm@outlook.com>
	 * @param {String} value
	 * @returns {String}
	 */
	set key(value) {
		this._key = value;
	}

	/**
	 * getter
	 * @author Saul Reyes Medina <saulreyesm@outlook.com>
	 * @returns {String}
	 */
	get description() {
		return this._description;
	}

	/**
	 * setter
	 * @author Saul Reyes Medina <saulreyesm@outlook.com>
	 * @param {String} value
	 * @returns {String}
	 */
	set description(value) {
		this._description = value;
	}
}

module.exports = TypeOrder;
