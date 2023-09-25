const orderArray = require("../bin/OrderArray");
const TypeOrder = require("../bin/TypeOrder");

Array.prototype.order = orderArray.order;
Array.prototype.orderByPosition = orderArray.orderByPosition;
Array.prototype.orderJSONByAttribute = orderArray.orderJSONByAttribute;

module.exports = TypeOrder;
