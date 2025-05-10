'use client';

import { ContextProvider, useCounterContext } from '../store/contextStore';

const Counter = () => {
	const { count, increment } = useCounterContext();
	console.log('Context render');
	return (
		<div>
			<p>Count (useContext): {count}</p>
			<button onClick={increment}>Increment</button>
		</div>
	);
};

export default function ContextPage() {
	return (
		<ContextProvider>
			<h1>useContext Example</h1>
			<Counter />
		</ContextProvider>
	);
}
