import { Navigation } from "./components/Navigation/navigation";
import { Routes, Route} from 'react-router-dom'
import { QrCodeGenerator } from "./components/Generator/QrCodeGenerator";
import { QrCodeScanner } from "./components/Scanner/QrCodeScanner";
import { GenerateHistory} from "./components/GenerateHistory.jsx"
import { ScanHistory} from "./components/ScanHistory.jsx"

export const Layout = () => {

	
	return (
		<>
			< Navigation/>
			<Routes>
				< Route path="/generate" element = { < QrCodeGenerator />} />
				< Route path="/scanner" element = { < QrCodeScanner />} />
				< Route path="/generateHistory" element = { < GenerateHistory />} />
				< Route path="/scanHistory" element = { < ScanHistory />} />
				
			</Routes>
		</>	
)
};
