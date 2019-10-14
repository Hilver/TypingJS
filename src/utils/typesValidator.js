const errorValidator = function (property, propertyValue, type) {
	if (typeof propertyValue !== type) {
		throw new Error(`${property} should be a ${type}!`)
	}
}

export default errorValidator