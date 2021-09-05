import { ReactComponent as SvgToggle }  from "../assets/arrow-counterclockwise.svg"
import  { ReactComponent as Next}  from "../assets/arrow-right.svg"
import  { ReactComponent as Prev}  from "../assets/arrow-left.svg"

const GradientsHeader = ({
	children,
	style,
	handleNextClick,
	handlePrevClick,
	handleReloadClick,
}) => {
	return (
		<header
			className="text-center text-white py-5 mb-5 shadow-sm"
			style={style}
		>
			{children}
			<button
				aria-label="Clicker pour afficher le dégradé précédant"
				type="button"
				className="btn btn-outline-light m-1"
				onClick={handlePrevClick}
			>
				<Prev />
			</button>
			<button
				aria-label="Clicker pour changer le dégradé"
				type="button"
				className="btn btn-outline-light m-1"
				onClick={handleReloadClick}
			>
				<SvgToggle />
			</button>
			<button
				aria-label="Clicker pour afficher le dégradé suivant"
				type="button"
				className="btn btn-outline-light m-1"
				onClick={handleNextClick}
			>
				<Next />
			</button>
		</header>
	)
}

export default GradientsHeader