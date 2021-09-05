import { NavLink } from "react-router-dom"
import Footer from "../components/Footer"

const GradientPageError = () => {
	return (
		<div className="min-vh-100 d-flex flex-column">
			<div
				className="flex-fill d-flex"
				style={{
					backgroundColor: "black",
				}}
			>
				<nav className="fixed-top nav">
					<li className="nav-item">
						<NavLink
							to="/"
							type="button"
							className="btn btn-dark text-white nav-link me-2"
						>
							Home
						</NavLink>
					</li>
				</nav>
				<p className="text-white m-auto text-center">
					Sorry, that gradient doesn't exist
				</p>
			</div>
			<Footer />
		</div>
	)
}

export default GradientPageError