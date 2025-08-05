import { Scanner } from '@yudiel/react-qr-scanner'
import {useState} from 'react'
import styles from './qrCodeScanner.module.css'

import { SCAN_DATA } from '../../constants' 

export const QrCodeScanner = () => {
	const [resultScan, setResultScan] = useState (null)

	
	const scan = (event) => {
		setResultScan(event[0].rawValue) 
		

		const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
        
		
		localStorage.setItem( SCAN_DATA, 
			JSON.stringify([...prevData, event[0].rawValue])


		)
	}

	
	
	return (
		<div className={styles.container}>
			
			
			<Scanner 
			onScan={(scan)} 
			
			components={{
				audio: false,
				finder: false,
			}}
			styles = {{
				container: {
			width: 200,
			borderRadius: 10
		    }
			}}
			/>
			<p>{ resultScan }</p>
			</div>
	)
}
