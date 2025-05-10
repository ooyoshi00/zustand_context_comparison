'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type StateType = {
	count: number;
	increment: () => void;
};

const Context = createContext<StateType | undefined>(undefined);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
	const [count, setCount] = useState(0);
	const increment = () => setCount((c) => c + 1);
	return <Context.Provider value={{ count, increment }}>{children}</Context.Provider>;
};

export const useCounterContext = () => {
	const context = useContext(Context);
	if (!context) throw new Error('useCounterContext must be used inside ContextProvider');
	return context;
};
