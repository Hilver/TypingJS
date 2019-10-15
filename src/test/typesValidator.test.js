import typesValidator from '../utils/typesValidator'

const data = {
	test: {}
}
const key = Object.keys(data)[0]
const value = Object.values(data)[0]

test('typesValidator should throw error', () => {	
	const t = () => typesValidator(key, value, 'string')

	expect(t).toThrowError('test should be a string!')
})

test('typesValidator should return true if validation has passed', () => {
	const t = typesValidator(key, value, 'object')

	expect(t).toBe(true)
})