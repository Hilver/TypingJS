import delay from './utils/delay'
import typesValidator from './utils/typesValidator'
import { typedTypes } from './types'

const Typed = function ({message = 'Test TypedJS...', ms = 100, remove = false, infinity = false, selector = 'typed'} = {}) {
	this.message = message
	this.ms = ms
	this.remove = remove
	this.infinity = infinity
	this.selector = selector

	const typo = document.getElementById(selector)

	for (let type in typedTypes) {
		typesValidator(type, this[type], typedTypes[type])
	}

	this.init = function () {
		this.sentenceTyper(this.message)
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

	this.sentenceTyper = async function (sentence) {
		const letters = Array.from(sentence)

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
			this.sentenceTyper(sentence)
		}
	}
}

export default Typed

