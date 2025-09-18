import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';

export const FormBlocks = () => {
	const [search, setSearch] = useState<string>('');

	return (
		<div className="w-full">
			<div className="flex gap-2 py-4 text-sm">
				<Input
					placeholder="Search Blocks"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
			<div className="flex flex-col w-full space-y-3">
				<div className="mb-2">
					<h5 className="text-xs text-muted-foreground font-medium">
						Layout
					</h5>
				</div>
				<Separator />
				<div>
					<h5 className="text-xs text-muted-foreground font-medium">
						Form
					</h5>
				</div>
			</div>
		</div>
	);
};
