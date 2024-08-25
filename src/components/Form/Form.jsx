import { useState } from 'react'
import { Button } from '../Button/Button'
import styles from './Form.module.css'
export function Form({ onFormSubmit }) {
	const [inputValue, setInputvalue] = useState('')

	return (
		<form
			onSubmit={e => {
				e.preventDefault()
				onFormSubmit(inputValue)
			}}
			className={styles.form}>
			<input value={inputValue} onChange={e => setInputvalue(e.target.value)} className={styles.input} type='text' />
			<Button>Dodaj</Button>
		</form>
	)
}
