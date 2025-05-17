'use client';
import { useState } from 'react';

interface TodoProps {
	onAdd: (text: string) => void;
	buttonColor: string;
}

export const Todo = ({ onAdd, buttonColor }: TodoProps) => {
	const [text, setText] = useState('');

	const handleAdd = () => {
		if (text.trim()) {
			onAdd(text);
			setText('');
		}
	};

	return (
		<div className='space-y-4'>
			<div className='flex gap-2'>
				<input
					type='text'
					value={text}
					onChange={(e) => setText(e.target.value)}
					className='border p-2 rounded'
					placeholder='新しいタスクを入力'
				/>
				<button onClick={handleAdd} className='px-4 py-2 rounded text-white cursor-pointer' style={{ backgroundColor: buttonColor }}>
					追加
				</button>
			</div>
		</div>
	);
};
