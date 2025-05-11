'use client';
import React, { createContext, useContext, useReducer, useEffect } from 'react';

interface Todo {
	id: number;
	text: string;
}

interface State {
	todos: Todo[];
	buttonColor: string;
	isModalOpen: boolean;
}

type Action =
	| { type: 'ADD_TODO'; payload: string }
	| { type: 'SET_BUTTON_COLOR'; payload: string }
	| { type: 'OPEN_MODAL' }
	| { type: 'CLOSE_MODAL' }
	| { type: 'SET_TODOS'; payload: Todo[] }
	| { type: 'SET_BUTTON_COLOR_FROM_STORAGE'; payload: string };

interface ContextState extends State {
	addTodo: (text: string) => void;
	setButtonColor: (color: string) => void;
	openModal: () => void;
	closeModal: () => void;
	saveToStorage: () => Promise<void>;
}

const initialState: State = {
	todos: [],
	buttonColor: '#3B82F6',
	isModalOpen: false,
};

const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
				todos: [...state.todos, { id: Date.now(), text: action.payload }],
			};
		case 'SET_BUTTON_COLOR':
			return {
				...state,
				buttonColor: action.payload,
			};
		case 'OPEN_MODAL':
			return {
				...state,
				isModalOpen: true,
			};
		case 'CLOSE_MODAL':
			return {
				...state,
				isModalOpen: false,
			};
		case 'SET_TODOS':
			return {
				...state,
				todos: action.payload,
			};
		case 'SET_BUTTON_COLOR_FROM_STORAGE':
			return {
				...state,
				buttonColor: action.payload,
			};
		default:
			return state;
	}
};

const Context = createContext<ContextState | undefined>(undefined);

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// 初期データの読み込み
	useEffect(() => {
		const loadData = async () => {
			try {
				const response = await fetch('/api/storage');
				const data = await response.json();
				dispatch({ type: 'SET_TODOS', payload: data.todos });
				dispatch({ type: 'SET_BUTTON_COLOR_FROM_STORAGE', payload: data.buttonColor });
			} catch (error) {
				console.error('データの読み込みに失敗しました:', error);
			}
		};

		loadData();
	}, []);

	const addTodo = (text: string) => {
		dispatch({ type: 'ADD_TODO', payload: text });
	};

	const setButtonColor = (color: string) => {
		dispatch({ type: 'SET_BUTTON_COLOR', payload: color });
	};

	const openModal = () => dispatch({ type: 'OPEN_MODAL' });
	const closeModal = () => dispatch({ type: 'CLOSE_MODAL' });

	const saveToStorage = async () => {
		try {
			await fetch('/api/storage', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					todos: state.todos,
					buttonColor: state.buttonColor,
				}),
			});
		} catch (error) {
			console.error('データの保存に失敗しました:', error);
		}
	};

	return (
		<Context.Provider
			value={{
				...state,
				addTodo,
				setButtonColor,
				openModal,
				closeModal,
				saveToStorage,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export const useContextStore = () => {
	const context = useContext(Context);
	if (context === undefined) {
		throw new Error('useContextStore must be used within a ContextProvider');
	}
	return context;
};
