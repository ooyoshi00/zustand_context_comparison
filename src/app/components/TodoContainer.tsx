import { Todo } from './Todo';
import { TodoList } from './TodoList';
import { ColorSelector } from './ColorSelector';
import { Modal } from './Modal';

interface TodoContainerProps {
	todos: { id: number; text: string }[];
	buttonColor: string;
	isModalOpen: boolean;
	addTodo: (text: string) => void;
	setButtonColor: (color: string) => void;
	openModal: () => void;
	closeModal: () => void;
}

export const TodoContainer = ({ todos, buttonColor, isModalOpen, addTodo, setButtonColor, openModal, closeModal }: TodoContainerProps) => {
	return (
		<div className='space-y-4'>
			<ColorSelector buttonColor={buttonColor} setButtonColor={setButtonColor} />

			<Todo onAdd={addTodo} buttonColor={buttonColor} />

			<button onClick={openModal} className='px-4 py-2 text-black bg-gray-200 rounded hover:bg-gray-300'>
				+モーダルからタスクを追加
			</button>

			<Modal isOpen={isModalOpen} onClose={closeModal} onAdd={addTodo} buttonColor={buttonColor} />

			<TodoList todos={todos} />
		</div>
	);
};
