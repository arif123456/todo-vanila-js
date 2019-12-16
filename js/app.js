
 let inputField = document.getElementById('inputField');
 let todoList = document.getElementById('todoList');

 inputField.addEventListener('keyup', (event) => {
 	let name = inputField.value;
 	if(name.length > 0 && event.keyCode == 13){

 		todoList.appendChild(createTask(name))
 		inputField.value = ''
 		
 	}
 })


let createTask = (task) => {
	let div = document.createElement('div')
	div.className = 'todo-item'

	let span = document.createElement('span')
	div.appendChild(span)

	

	span.addEventListener('dblclick', (parent) => {
		// let span = document.querySelector('span')
		let textarea = document.createElement('textarea')
		textarea.style.width = parent.offsetWidth + 'px'
		textarea.style.height = parent.offsetHeight + 'px'
		textarea.innerHTML = span.innerHTML

		textarea.addEventListener('keyup', (e) => {
			if(e.keyCode == 13){
				let value = textarea.value
				span.innerHTML = value
				this.removeChild(e)
			}
			
		})
		div.appendChild(textarea)
	})

	let label = document.createElement('label')
	label.className = 'checkmark'
	label.setAttribute("onclick", "toggleClass(this)");

	div.appendChild(label)
 
	let button = document.createElement('button')
	button.className = 'close'
	button.innerHTML = '<i class="fas fa-times"></i>'
	div.appendChild(button)

	button.addEventListener('click', () => {
		div.remove()
	})

	span.innerHTML = task
 
	return div;

}

let toggleClass = (event) => {
	event.classList.toggle('toggle')
	event.parentElement.classList.toggle('completed')
	event.parentElement.setAttribute('isComplete','true')
	
}
