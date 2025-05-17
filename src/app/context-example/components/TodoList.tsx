import { useContextStore } from '@/app/store/contextStore';

export const TodoList = () => {
	const { todos } = useContextStore();
	return (
		<div className='space-y-2'>
			<h2 className='text-lg font-semibold'>Todoリスト</h2>
			<ul className='space-y-2'>
				{todos.map((todo) => (
					<li key={todo.id} className='p-2 text-black bg-gray-100 rounded'>
						{todo.text}
					</li>
				))}
			</ul>
		</div>
	);
};
