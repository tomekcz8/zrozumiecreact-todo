import { useState } from 'react'
import styles from './App.module.css'
import { Form } from './components/Form/Form'
import { ToDoItem } from './components/ToDoItem/ToDoItem'
import { getSubHeading } from './utils/getSubHeading'

function App() {
	const [isFormShown, setIsFormShown] = useState(false)
	const [todos, setTodos] = useState([
		{ name: `Zrobić zakupy`, done: false, id: 1 },
		{ name: 'Wyrzucić śmieci', done: true, id: 2 },
	])

	function addItem(newTodoName) {
		setTodos(prevTodos => [...prevTodos, { name: newTodoName, done: false, id: Math.random() }])
		setIsFormShown(false)
	}

	function deleteItem(id) {
		setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
	}

	function finishItem(id) {
		setTodos(prevTodos =>
			prevTodos.map(todo => {
				if (todo.id !== id) {
					return todo
				}
				return { ...todo, done: true }
			})
		)
	}

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<div>
					<h1>Do zrobienia</h1>
					<h2>{getSubHeading(todos.length)}</h2>
				</div>
				{!isFormShown && (
					<button onClick={() => setIsFormShown(true)} className={styles.button}>
						+
					</button>
				)}
			</header>
			{isFormShown && <Form onFormSubmit={newTodoName => addItem(newTodoName)} />}
			<ul>
				{todos.map(({ name, done, id }) => (
					<ToDoItem
						key={id}
						name={name}
						done={done}
						onDeleteButtonClick={() => {
							deleteItem(id)
						}}
						onDoneButtonClick={() => {finishItem(id)}}
					/>
				))}
			</ul>
		</div>
	)
}

export default App
