import { useContextStore } from '@/app/store/contextStore';

export const ColorSelector = () => {
	const { buttonColor, setButtonColor } = useContextStore();
	return (
		<div className='space-y-2'>
			<h2 className='text-lg font-semibold'>ボタンの色を選択</h2>
			<div className='flex gap-4'>
				<label className='flex items-center gap-2'>
					<input
						type='radio'
						name='color'
						value='#3B82F6'
						checked={buttonColor === '#3B82F6'}
						onChange={(e) => setButtonColor(e.target.value)}
					/>
					<span>青</span>
				</label>
				<label className='flex items-center gap-2'>
					<input
						type='radio'
						name='color'
						value='#10B981'
						checked={buttonColor === '#10B981'}
						onChange={(e) => setButtonColor(e.target.value)}
					/>
					<span>緑</span>
				</label>
				<label className='flex items-center gap-2'>
					<input
						type='radio'
						name='color'
						value='#EF4444'
						checked={buttonColor === '#EF4444'}
						onChange={(e) => setButtonColor(e.target.value)}
					/>
					<span>赤</span>
				</label>
			</div>
		</div>
	);
};
