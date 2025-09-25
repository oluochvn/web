let add = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let reset = document.querySelector('.remove')
let answer =document.querySelector('.count')

	let count = 0;

	let updateDisplay = () =>{
		answer.textContent = count;
	}
  let addition = () =>{
  	count++
  	updateDisplay()
  }
  let subtract = () => {
  		(count <= 0)? count = 0 :
  		count--;
  		updateDisplay()
  }
  let zero = () => {
  	count = 0;
  	updateDisplay()
  }
