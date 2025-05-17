import { create } from 'zustand';
import { useEffect } from 'react';

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
	saveToStorage: () => Promise<void>;
}

export const useZustandServerStore = create<ZustandServerState>((set) => ({
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
	saveToStorage: async () => {
		const state = useZustandServerStore.getState();
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
	},
}));

// 初期データの読み込み用のカスタムフック
export const useLoadInitialServerData = (onLoadComplete?: () => void) => {
	useEffect(() => {
		const loadData = async () => {
			try {
				const response = await fetch('/api/storage');
				const data = await response.json();
				useZustandServerStore.setState({
					todos: data.todos,
					buttonColor: data.buttonColor,
				});
			} catch (error) {
				console.error('データの読み込みに失敗しました:', error);
			} finally {
				onLoadComplete?.();
			}
		};

		loadData();
	}, [onLoadComplete]);
};

// export initial state for hydration
export type StoreType = ReturnType<typeof useZustandServerStore>;
