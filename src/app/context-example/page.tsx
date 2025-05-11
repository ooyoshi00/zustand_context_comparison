'use client';

import { ContextProvider, useContextStore } from '../store/contextStore';
import { TodoContainer } from './components/TodoContainer';
import { Navigation } from '../components/Navigation';

const TodoList = () => {
	const { todos, buttonColor, isModalOpen, addTodo, setButtonColor, openModal, closeModal, saveToStorage } = useContextStore();
	// const [isLoading, setIsLoading] = useState(false);

	// // useEffect(() => {
	// // 	const loadData = async () => {
	// // 		try {
	// // 			const response = await fetch('/api/storage');
	// // 			const data = await response.json();
	// // 			// データの読み込みはContextProviderで行うため、ここでは不要
	// // 		} catch (error) {
	// // 			console.error('データの読み込みに失敗しました:', error);
	// // 		} finally {
	// // 			setIsLoading(false);
	// // 		}
	// // 	};

	// // 	loadData();
	// // }, []);

	const handleSave = async () => {
		await saveToStorage();
		alert('保存が完了しました');
	};

	// if (isLoading) {
	// 	return <Loading />;
	// }

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
