'use client';

import { useLoadInitialServerData } from '../store/zustandServerStore';
import { Navigation } from '../components/Navigation';
import { TodoContainer } from './TodoContainer';
import { Loading } from '../components/Loading';
import { useState, useCallback } from 'react';

export default function ServerZustandPage() {
	const [isLoading, setIsLoading] = useState(true);

	// コールバックをメモ化
	const handleLoadComplete = useCallback(() => {
		setIsLoading(false);
	}, []);

	// 初期データの読み込み
	useLoadInitialServerData(handleLoadComplete);

	if (isLoading) {
		return <Loading />;
	}
	return (
		<div className='max-w-2xl mx-auto p-4'>
			<Navigation />
			<h1 className='text-2xl font-bold mb-6'>Zustand Server Example</h1>
			<TodoContainer />
		</div>
	);
}
