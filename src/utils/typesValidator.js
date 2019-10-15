const typesValidator = function (property, propertyValue, type) {
	if (typeof propertyValue !== type) {
		throw new Error(`${property} should be a ${type}!`)
	}
	return true
}

export default typesValidator