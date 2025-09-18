import { cn } from '@/lib/utils';
import { Blocks, Settings } from 'lucide-react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

export function FormLayout() {
	const { formId } = useParams();
	const { pathname } = useLocation();

	return (
		<div className="flex h-[calc(100vh_-_65px)] w-full flex-row">
			<div className="flex relative w-12">
				<div className="w-12 h-screen bg-black fixed z-40 p-1">
					<div className="h-full flex items-center flex-col gap-2.5 mt-2">
						<Link
							className={cn(
								'flex items-center text-white justify-center rounded-md size-8 hover:bg-white hover:text-black transition-colors duration-300',
								{
									'bg-white text-black':
										pathname ===
										`/dashboard/forms/builder/${formId}`,
								}
							)}
							to={`/dashboard/forms/builder/${formId}`}
						>
							<Blocks size={18} />
						</Link>
						<Link
							className={cn(
								'flex items-center text-white justify-center rounded-md size-8 hover:bg-white hover:text-black transition-colors duration-300',
								{
									'bg-white text-black':
										pathname ===
										`/dashboard/forms/responses/${formId}`,
								}
							)}
							to={`/dashboard/forms/responses/${formId}`}
						>
							<Settings size={18} />
						</Link>
					</div>
				</div>
			</div>
			<main className="w-full flex-1">
				<Outlet />
			</main>
		</div>
	);
}
