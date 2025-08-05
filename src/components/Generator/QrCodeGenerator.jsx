import {QRCodeSVG} from 'qrcode.react'
import {useState} from 'react'
import styles from './qrCodeGenerator.module.css'

import { GENERATE_DATA } from '../../constants'


export const QrCodeGenerator = () => {

	const [value, setValue] = useState(' ')
	const [result, setResult] = useState("")

	const onClick = () => {
	const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
		
		localStorage.setItem( GENERATE_DATA, 
				JSON.stringify([...prevData, value])
		)

		setResult(value)
		setValue('')

		console.log('prevData', prevData)
	}

		
	

	const onChange = (event) => {
		setValue(event.target.value)
		setResult('')
		
	}

	return (
		<>
		
		<div className = {styles.container}>
			
			<input 
			type="text" 
			value={value} 
			onChange={onChange} 
			className = {styles.input}
			placeholder='Введите текст...'/>
			<button type="button" onClick = {onClick} className = {styles.button}>Сгенерировать QR код
			</button>
			{result  !== '' && (<QRCodeSVG value={result} size = '200' /> )}
		</div>

		</>
	)
}
