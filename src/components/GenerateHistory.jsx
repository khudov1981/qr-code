import { GENERATE_DATA } from '../constants'
import {QRCodeSVG} from 'qrcode.react'

export const GenerateHistory = () => {

	const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
		
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
 