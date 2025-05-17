'use client';

import { useZustandStore, useLoadInitialData } from '../store/zustandServerStore';
import { TodoContainer } from './TodoContainer';
import { Navigation } from '../components/Navigation';
import { Loading } from '../components/Loading';
import { useState, useCallback } from 'react';

const TodoList = () => {
	// 必要な値のみを取得
	const todos = useZustandStore((state) => state.todos);
	const buttonColor = useZustandStore((state) => state.buttonColor);
	const isModalOpen = useZustandStore((state) => state.isModalOpen);
	const addTodo = useZustandStore((state) => state.addTodo);
	const setButtonColor = useZustandStore((state) => state.setButtonColor);
	const openModal = useZustandStore((state) => state.openModal);
	const closeModal = useZustandStore((state) => state.closeModal);
	const saveToStorage = useZustandStore((state) => state.saveToStorage);

	const [isLoading, setIsLoading] = useState(true);

	// コールバックをメモ化
	const handleLoadComplete = useCallback(() => {
		setIsLoading(false);
	}, []);

	// 初期データの読み込み
	useLoadInitialData(handleLoadComplete);

	const handleSave = useCallback(async () => {
		await saveToStorage();
		alert('保存が完了しました');
	}, [saveToStorage]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<TodoContainer
			todos={todos}
			buttonColor={buttonColor}
			isModalOpen={isModalOpen}
			addTodo={addTodo}
			setButtonColor={setButtonColor}
			openModal={openModal}
			closeModal={closeModal}
			saveToStorage={handleSave}
		/>
	);
};

export default function ServerZustandPage() {
	return (
		<div className='max-w-2xl mx-auto p-4'>
			<Navigation />
			<h1 className='text-2xl font-bold mb-6'>Zustand Server Example</h1>
			<TodoList />
		</div>
	);
}
