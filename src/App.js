import React from "react"
import { useGradient } from "./context/GradientsContext"
import { useState } from "react"
import GradientsHeader from "./components/GradientsHeader"
import Gradients from "./components/Gradients"
import Footer from "./components/Footer"

function App() {
	const { gradients, active, setActive } = useGradient()

	const list = gradients
	const length = list.length
	const chooseGradient = () => Math.floor(Math.random() * length)

	const [randomGradient, setRandomGradient] = useState(chooseGradient)

	const handleReloadClick = () => {
		setRandomGradient(chooseGradient)
	}
	const handleNextClick = () => {
		setRandomGradient(randomGradient === length - 1 ? 0 : randomGradient + 1)
	}
	const handlePrevClick = () => {
		setRandomGradient(randomGradient === 0 ? length - 1 : randomGradient - 1)
	}
	const style = {
		backgroundImage: `linear-gradient(to right, ${list[randomGradient]?.start}, ${list[randomGradient]?.end})`,
	}

	return (
		<div className="min-vh-100 d-flex flex-column">
			<GradientsHeader
				handleReloadClick={handleReloadClick}
				handleNextClick={handleNextClick}
				handlePrevClick={handlePrevClick}
				style={style}
			>
				<h1 className="display-1">Alyra Gradients</h1>
				<p className="tagline ">
					Ultimate collection of the most beautiful gradients
				</p>
			</GradientsHeader>

			<main className="container">
				<h1 className="text-center pb-3 text-dark">Alyra Gradients</h1>
				<Gradients />
				{!active && (
					<button className="btn btn-dark" onClick={() => setActive(true)}>
						Show the gradients
					</button>
				)}
			</main>
			<Footer />
		</div>
	)
}

export default App