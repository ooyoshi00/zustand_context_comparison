'use client';
import { create } from 'zustand';

interface Todo {
	id: number;
	text: string;
}

interface ZustandState {
	todos: Todo[];
	buttonColor: string;
	isModalOpen: boolean;
	addTodo: (text: string) => void;
	setButtonColor: (color: string) => void;
	openModal: () => void;
	closeModal: () => void;
}

export const useZustandStore = create<ZustandState>((set) => ({
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
