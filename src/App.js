import "./App.css";
import Notification from "./components/Notification";
import Form from "./components/Form";

function App() {
	return (
		<div className="app">
			<header className="header">
				<h1 className="header__title">Learn to code by watching others</h1>

				<p className="header__content">
					See how experienced developers solve problems in real-time. Watching
					scripted tutorials is great, but understanding how developers think is
					invaluable.
				</p>
			</header>

			<main className="main">
				<Notification>
					<strong>Try it free 7 days</strong> then $20/mo. thereafter
				</Notification>

				<Form />
			</main>

			<footer className="footer">
				<p className="footer__attribution">
					Challenge by{" "}
					<a
						className="footer__link"
						rel="noopener noreferrer"
						href="https://www.frontendmentor.io?ref=challenge"
						target="_blank"
					>
						Frontend Mentor
					</a>
					. Coded by{" "}
					<a className="footer__link" href="https://halivert.dev">
						Halí
					</a>
					.
				</p>
			</footer>
		</div>
	);
}

export default App;
