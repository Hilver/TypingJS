// import delay from './utils/delay'

const delay = ms => {
	return new Promise(resolve => setTimeout(resolve, ms))
}

const Typo = function ({message = 'Test typo...', ms = 100, remove = false, infinity = false, selector = 'typo'}) {
	this.message = message
	const letters = Array.from(this.message)
	const typo = document.getElementById(selector)

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