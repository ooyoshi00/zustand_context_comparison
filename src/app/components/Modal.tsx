import { Todo } from './Todo';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	onAdd: (text: string) => void;
	buttonColor: string;
}

export const Modal = ({ isOpen, onClose, onAdd, buttonColor }: ModalProps) => {
	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
			<div className='bg-white p-6 rounded-lg w-96'>
				<div className='flex justify-between items-center mb-4'>
					<h2 className='text-xl text-black font-bold'>モーダル</h2>
					<button onClick={onClose} className='text-gray-500 hover:text-gray-700'>
						✕
					</button>
				</div>
				<Todo
					onAdd={(text) => {
						onAdd(text);
						onClose();
					}}
					buttonColor={buttonColor}
				/>
			</div>
		</div>
	);
};
