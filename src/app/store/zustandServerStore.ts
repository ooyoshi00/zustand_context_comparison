import { createStore } from 'zustand';

interface Todo {
	id: number;
	text: string;
}

interface ZustandServerState {
	todos: Todo[];
	buttonColor: string;
	isModalOpen: boolean;
	addTodo: (text: string) => void;
	setButtonColor: (color: string) => void;
	openModal: () => void;
	closeModal: () => void;
}

export const createZustandServerStore = () =>
	createStore<ZustandServerState>((set) => ({
		todos: [],
		buttonColor: '#3B82F6',
		isModalOpen: false,
		addTodo: (text: string) =>
			set((state) => ({
				todos: [...state.todos, { id: Date.now(), text }],
			})),
		setButtonColor: (color: string) => set({ buttonColor: color }),
		openModal: () => set({ isModalOpen: true }),
		closeModal: () => set({ isModalOpen: false }),
	}));

// export initial state for hydration
export type StoreType = ReturnType<typeof createZustandServerStore>;
