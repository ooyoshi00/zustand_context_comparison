'use client';

import { useZustandStore } from '../store/zustandClientStore';
import { Navigation } from '../components/Navigation';
import { TodoContainer } from './components/TodoContainer';

const TodoList = () => {
	const todos = useZustandStore((state) => state.todos);
	const buttonColor = useZustandStore((state) => state.buttonColor);
	const isModalOpen = useZustandStore((state) => state.isModalOpen);
	const addTodo = useZustandStore((state) => state.addTodo);
	const setButtonColor = useZustandStore((state) => state.setButtonColor);
	const openModal = useZustandStore((state) => state.openModal);
	const closeModal = useZustandStore((state) => state.closeModal);

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

export default function ClientZustandPage() {
	return (
		<div className="max-w-2xl mx-auto p-4">
			<Navigation />
			<h1 className="text-2xl font-bold mb-6">Zustand Client Example</h1>
			<TodoList />
		</div>
	);
}
