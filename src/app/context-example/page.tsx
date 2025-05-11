'use client';

import { ContextProvider, useCounterContext } from '../store/contextStore';
import { TodoContainer } from './components/TodoContainer';
import { Navigation } from '../components/Navigation';

const TodoList = () => {
	const { todos, buttonColor, isModalOpen, addTodo, setButtonColor, openModal, closeModal } = useCounterContext();

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

export default function ContextPage() {
	return (
		<ContextProvider>
			<div className="max-w-2xl mx-auto p-4">
				<Navigation />
				<h1 className="text-2xl font-bold mb-6">useContext Example</h1>
				<TodoList />
			</div>
		</ContextProvider>
	);
}
