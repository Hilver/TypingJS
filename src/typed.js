import delay from './utils/delay'
import typesValidator from './utils/typesValidator'
import { typedTypes } from './types'

const Typed = function ({message = 'Test typo...', ms = 100, remove = false, infinity = false, selector = 'typed'} = {}) {
	this.message = message
	this.ms = ms
	this.remove = remove
	this.infinity = infinity
	this.selector = selector

	const letters = Array.from(this.message)
	const typo = document.getElementById(selector)

	for (let type in typedTypes) {
		typesValidator(type, this[type], typedTypes[type])
	}

	this.init = function () {
		this.intervalMaker()
	}

	this.addLetter = function (letter) {
		return delay(ms).then(() => typo.textContent += letter)
	}

	this.removeLetter = function (index) {
		return delay(ms).then(() => typo.textContent = typo.textContent.substring(0, index))
	}

	this.resetLetters = function () {
		return delay(ms).then(() => typo.innerText = '')
	}

	this.intervalMaker = async function () {
		for(let i = 0; i < letters.length; i++) {
			await this.addLetter(letters[i])
		}

		if(remove) {
			for(let i = letters.length - 1; i >= 0; i--) {
				await this.removeLetter(i)
			}
		}

		if(infinity && !remove) {
			await this.resetLetters()
		}

		if(infinity) {
			this.intervalMaker()
		}
	}
}

const typed = new Typed()

typed.init()

export default Typed
