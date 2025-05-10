import { createStore } from 'zustand/vanilla';

export type State = {
	count: number;
	increment: () => void;
};

export const createZustandServerStore = () =>
	createStore<State>((set) => ({
		count: 0,
		increment: () => set((state) => ({ count: state.count + 1 })),
	}));

// export initial state for hydration
export type StoreType = ReturnType<typeof createZustandServerStore>;
