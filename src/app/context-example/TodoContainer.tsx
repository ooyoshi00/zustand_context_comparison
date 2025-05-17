import { Todo } from '../components/Todo';
import { TodoList } from './components/TodoList';
import { ColorSelector } from './components/ColorSelector';
import { Modal } from '../components/Modal';
import { useContextStore } from '@/app/store/contextStore';

export const TodoContainer = () => {
	const { todos, buttonColor, isModalOpen, addTodo, setButtonColor, openModal, closeModal, saveToStorage } = useContextStore();
	const handleSave = async () => {
		await saveToStorage();
		alert('保存が完了しました');
	};
	return (
		<div className='space-y-4'>
			<ColorSelector buttonColor={buttonColor} setButtonColor={setButtonColor} />

			<Todo onAdd={addTodo} buttonColor={buttonColor} />

			<div className='flex gap-4'>
				<button onClick={openModal} className='px-4 py-2 text-black bg-gray-200 rounded hover:bg-gray-300 cursor-pointer'>
					モーダルを開く
				</button>

				<button onClick={handleSave} className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 cursor-pointer'>
					一旦保存する
				</button>
			</div>

			<Modal isOpen={isModalOpen} onClose={closeModal} onAdd={addTodo} buttonColor={buttonColor} />

			<TodoList todos={todos} />
		</div>
	);
};
