'use client';
import { useStore } from 'zustand';
import { useRef } from 'react';
import { createZustandServerStore } from '../store/zustandServerStore';

export default function ZustandServerPage() {
	const storeRef = useRef(createZustandServerStore());
	const count = useStore(storeRef.current, (state) => state.count);
	const increment = useStore(storeRef.current, (state) => state.increment);

	return (
		<>
			<h1>Zustand Server Store Example</h1>
			<p>Count: {count}</p>
			<button onClick={increment}>Increment</button>
		</>
	);
}
