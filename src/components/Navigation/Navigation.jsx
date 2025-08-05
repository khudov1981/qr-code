import styles from './navigation.module.css'
import { Link } from "react-router-dom"

export const Navigation = () => {
	return (
		<nav className={styles.container}> 
			<Link to="/generate">Сгенерировать QR код</Link>
			<Link to="/scanner">Отсканировать QR код</Link>
			<Link to="/scanHistory">История отсканированных QR кодов</Link>
			<Link to="/generateHistory">История сгенерированных QR кодов</Link>
		</nav>
	)
}
