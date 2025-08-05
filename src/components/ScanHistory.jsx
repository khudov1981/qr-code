import { SCAN_DATA } from '../constants'
import { Scanner } from '@yudiel/react-qr-scanner'
import {QRCodeSVG} from 'qrcode.react'

export const ScanHistory = () => {

	const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
		
	console.log(data)
	return (
		<div>
			{data.map( item  => 
			<p  key={item} >{item} 
			<QRCodeSVG value={ item } size = '100' />
			</p>)}
		
		</div>
	)
}
