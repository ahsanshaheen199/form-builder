import { Button } from '@/components/ui/button';
import { Eye, Save, Upload } from 'lucide-react';

export const BuilderBlockProperties = () => {
	return (
		<div className="relative w-[320px] bg-white">
			<div className="fixed right w-[320px] bg-white border-l shadow-sm h-screen pb-36 mt-0 scrollbar overflow-auto">
				<div className="flex flex-col w-full items-center h-auto min-h-full">
					<div className="w-full flex flex-row items-center bg-white py-2 sticky border-b border-gray-200 top-0 gap-2 px-2">
						<Button variant="outline" size="sm">
							<Eye /> Preview
						</Button>
						<Button variant="outline" size="sm">
							<Save /> Save
						</Button>
						<Button size="sm">
							<Upload /> Publish
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
