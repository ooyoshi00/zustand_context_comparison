import Link from 'next/link';

export default function Home() {
	return (
		<main>
			<h1>State Management Comparison</h1>
			<ul>
				<li>
					<Link href='/context-example'>useContext Example</Link>
				</li>
				<li>
					<Link href='/zustand-client'>Zustand (Client) Example</Link>
				</li>
				<li>
					<Link href='/zustand-server'>Zustand (SSR-safe) Example</Link>
				</li>
			</ul>
		</main>
	);
}
