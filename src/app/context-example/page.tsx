'use client';
import { Navigation } from '../components/Navigation';
import { ContextProvider, useLoadInitialContextData } from '../store/contextStore';
import { TodoContainer } from './TodoContainer';
import { useState, useCallback } from 'react';
import { Loading } from '../components/Loading';

export default function ContextPage() {
	const [isLoading, setIsLoading] = useState(true);

	// コールバックをメモ化
	const handleLoadComplete = useCallback(() => {
		setIsLoading(false);
	}, []);

	// 初期データの読み込み
	useLoadInitialContextData(handleLoadComplete);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<ContextProvider>
			<div className='max-w-2xl mx-auto p-4'>
				<Navigation />
				<h1 className='text-2xl font-bold mb-6'>useContext Example</h1>
				<TodoContainer />
			</div>
		</ContextProvider>
	);
}
