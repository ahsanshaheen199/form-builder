import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/components/ui/sidebar';
import { BuilderSidebar } from '@/features/form/builder-sidebar';
import { useState } from 'react';
import { BuilderCanvas } from '@/features/form/builder-canvas';
import { BuilderBlockProperties } from '@/features/form/builder-block-properties';

export function FormBuilder() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	return (
		<div>
			<SidebarProvider
				open={isSidebarOpen}
				onOpenChange={setIsSidebarOpen}
				className="h-[calc(100vh_-_65px)]"
				style={
					{
						'--sidebar-width': '300px',
					} as React.CSSProperties
				}
			>
				<BuilderSidebar />
				<SidebarInset className="!p-0 flex-1">
					<div className="w-full h-full bg-gray-50">
						<SidebarTrigger className=" absolute top-0 z-30" />
						<BuilderCanvas />
					</div>
				</SidebarInset>
				<BuilderBlockProperties />
			</SidebarProvider>
		</div>
	);
}
