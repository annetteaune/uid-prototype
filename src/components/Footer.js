export default function Footer() {
	return (
		<footer>
			<div className="contact">
				<span className="footer-header">Kontakt:</span>
				<span>Telefon: 69 60 80 00</span>
				<span>E-post: postmottak@hiof.no</span>
				<span className="underlined">Fullstendig kontaktinformasjon</span>
				<button>Tilgjengelighetserklæring</button>
			</div>
			<div className="socials">
				<span className="footer-header">Følg oss:</span>
				<div>
					<i className="fa-brands fa-square-facebook"></i>
					<i className="fa-brands fa-square-twitter"></i>
					<i className="fa-brands fa-square-instagram"></i>
					<i className="fa-brands fa-linkedin"></i>
					<i className="fa-brands fa-square-youtube"></i>
				</div>
				<img
					className="footerimg"
					src="https://kommunikasjon.ntb.no/data/images/00503/9a77e942-18f4-4594-9833-640d6f7f805e.png"
					alt="HIOF logo"
				/>
			</div>
		</footer>
	);
}
