import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
} from '@/components/ui/sidebar';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { FileTextIcon, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { FormBlocks } from './form-blocks';
import { FormSettings } from './form-settings';

export function BuilderSidebar({
	rest,
}: {
	rest?: React.ComponentProps<typeof Sidebar>;
}) {
	const formData = {
		name: 'Untitled',
	};

	const [tab, setTab] = useState<'blocks' | 'settings'>('blocks');

	return (
		<Sidebar className="border-r left-12 pt-16 bg-white" {...rest}>
			<SidebarHeader className="bg-white border-b px-5">
				<header className="w-full">
					<div className="flex items-center gap-2">
						<div>
							<Home className="w-4 h-4 text-muted-foreground" />
						</div>
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem className="hidden md:block">
									<BreadcrumbLink href="/dashboard">
										Home
									</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator className="mt-0.5" />
								<BreadcrumbItem>
									<BreadcrumbPage className="flex items-center gap-1">
										<FileTextIcon className="w-4 h-4" />
										{formData?.name || 'Untitled'}
									</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>
				</header>
			</SidebarHeader>
			<SidebarContent className="bg-white px-5 pt-2">
				<div className="w-full">
					<div className="w-full flex flex-row gap-1 h-[39px] rounded-full bg-gray-100 p-1">
						<button
							className={cn(
								`p-[5px] flex-1 bg-transparent transition-colors ease-in-out rounded-full text-center font-medium text-sm cursor-pointer`,
								{
									'bg-white': tab === 'blocks',
								}
							)}
							onClick={() => setTab('blocks')}
						>
							Blocks
						</button>
						<button
							className={cn(
								`p-[5px] flex-1 bg-transparent transition-colors ease-in-out rounded-full text-center font-medium text-sm cursor-pointer`,
								{
									'bg-white': tab === 'settings',
								}
							)}
							onClick={() => setTab('settings')}
						>
							Settings
						</button>
					</div>
					{/* {Form Blocks} */}
					{tab === 'blocks' && <FormBlocks />}
					{/* {Form Settings} */}
					{tab === 'settings' && <FormSettings />}
				</div>
			</SidebarContent>
		</Sidebar>
	);
}
