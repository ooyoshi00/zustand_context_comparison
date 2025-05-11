'use client';
import { useStore } from 'zustand';
import { useRef } from 'react';
import { createZustandServerStore } from '../store/zustandServerStore';
import { TodoContainer } from './components/TodoContainer';
import { Navigation } from '../components/Navigation';

const TodoList = ({ store }: { store: ReturnType<typeof createZustandServerStore> }) => {
	const todos = useStore(store, (state) => state.todos);
	const buttonColor = useStore(store, (state) => state.buttonColor);
	const isModalOpen = useStore(store, (state) => state.isModalOpen);
	const addTodo = useStore(store, (state) => state.addTodo);
	const setButtonColor = useStore(store, (state) => state.setButtonColor);
	const openModal = useStore(store, (state) => state.openModal);
	const closeModal = useStore(store, (state) => state.closeModal);

	return (
		<TodoContainer
			todos={todos}
			buttonColor={buttonColor}
			isModalOpen={isModalOpen}
			addTodo={addTodo}
			setButtonColor={setButtonColor}
			openModal={openModal}
			closeModal={closeModal}
		/>
	);
};

export default function ZustandServerPage() {
	const storeRef = useRef(createZustandServerStore());

	return (
		<div className="max-w-2xl mx-auto p-4">
			<Navigation />
			<h1 className="text-2xl font-bold mb-6">Zustand Server Store Example</h1>
			<TodoList store={storeRef.current} />
		</div>
	);
}
