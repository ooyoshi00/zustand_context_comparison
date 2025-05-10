'use client';

import { useZustandStore } from '../store/zustandClientStore';

const Counter = () => {
	const count = useZustandStore((state) => state.count);
	const increment = useZustandStore((state) => state.increment);
	console.log('Zustand render');
	return (
		<div>
			<p>Count (zustand): {count}</p>
			<button onClick={increment}>Increment</button>
		</div>
	);
};

export default function ClientZustandPage() {
	return (
		<>
			<h1>Zustand Client Example</h1>
			<Counter />
		</>
	);
}
