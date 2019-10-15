import delay from '../utils/delay'

test('delay returns promise', () => {
  delay(1000).then(res => {
	expect(res).toBeTruthy()
  })
})


