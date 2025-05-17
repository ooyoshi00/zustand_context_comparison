import { Todo } from '../components/Todo';
import { TodoList } from './components/TodoList';
import { ColorSelector } from './components/ColorSelector';
import { Modal } from '../components/Modal';
import { useZustandServerStore } from '../store/zustandServerStore';
import { useCallback } from 'react';
import { useShallow } from 'zustand/shallow';

export const TodoContainer = () => {
	const { buttonColor, isModalOpen, addTodo, openModal, closeModal, saveToStorage } = useZustandServerStore(
		useShallow((state) => ({
			buttonColor: state.buttonColor,
			isModalOpen: state.isModalOpen,
			addTodo: state.addTodo,
			setButtonColor: state.setButtonColor,
			openModal: state.openModal,
			closeModal: state.closeModal,
			saveToStorage: state.saveToStorage,
		}))
	);

	const handleSave = useCallback(async () => {
		await saveToStorage();
		alert('保存が完了しました');
	}, [saveToStorage]);

	return (
		<div className='space-y-4'>
			<ColorSelector />
			<Todo onAdd={addTodo} buttonColor={buttonColor} />
			<div className='flex gap-4'>
				<button onClick={openModal} className='px-4 py-2 text-black bg-red-200 rounded hover:bg-gray-300 cursor-pointer'>
					+モーダルからタスクを追加
				</button>
			</div>
			<Modal isOpen={isModalOpen} onClose={closeModal} onAdd={addTodo} buttonColor={buttonColor} />
			<TodoList />
			<button onClick={handleSave} className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 cursor-pointer'>
				一旦保存する
			</button>
		</div>
	);
};
