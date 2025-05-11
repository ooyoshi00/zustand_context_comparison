'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface Todo {
	id: number;
	text: string;
}

interface ContextState {
	todos: Todo[];
	buttonColor: string;
	isModalOpen: boolean;
	addTodo: (text: string) => void;
	setButtonColor: (color: string) => void;
	openModal: () => void;
	closeModal: () => void;
}

const Context = createContext<ContextState | undefined>(undefined);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [buttonColor, setButtonColor] = useState('#3B82F6');
	const [isModalOpen, setIsModalOpen] = useState(false);

	const addTodo = (text: string) => {
		setTodos([...todos, { id: Date.now(), text }]);
	};

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<Context.Provider
			value={{
				todos,
				buttonColor,
				isModalOpen,
				addTodo,
				setButtonColor,
				openModal,
				closeModal,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export const useCounterContext = () => {
	const context = useContext(Context);
	if (context === undefined) {
		throw new Error('useCounterContext must be used within a ContextProvider');
	}
	return context;
};
