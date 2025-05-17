'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navigation = () => {
	const pathname = usePathname();

	const tabs = [
		{ name: 'Context Example', path: '/context-example' },
		{ name: 'Zustand Client', path: '/zustand-client' },
		{ name: 'Zustand Server', path: '/zustand-server' },
	];

	return (
		<nav className='bg-white shadow-sm mb-8'>
			<div className='max-w-2xl mx-auto'>
				<div className='flex space-x-4'>
					{tabs.map((tab) => (
						<Link
							key={tab.path}
							href={tab.path}
							className={`px-4 py-2 text-sm font-medium rounded-md ${
								pathname === tab.path ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
							}`}
						>
							{tab.name}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
};
