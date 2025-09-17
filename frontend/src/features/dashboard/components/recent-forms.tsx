import { Skeleton } from "@/components/ui/skeleton";
import {
  Globe,
  LockKeyholeIcon,
  EllipsisIcon,
  MessageSquare,
  ActivityIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
} from "lucide-react";
import { formatDistanceToNowStrict } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function RecentForms() {
  const published = true;
  const name = "Form 1";
  const responses = 10;
  const views = 10;
  const createdAt = new Date();

  return (
    <div>
      <div className="mb-4">
        <h5 className="text-xl font-semibold tracking-tight">Recent Forms</h5>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="w-full h-auto">
            <div className="relative border rounded-tr-xl rounded-tl-xl h-[170px] bg-[#f0ebf8] flex items-center justify-center">
              <div className="w-36 absolute bottom-0 flex items-center flex-col px-4 pt-6 h-32 rounded-t-xl bg-white">
                <h5 className="text-sm font-medium mb-1 text-center text-gray-400 truncate block w-[200px]">
                  Form {index + 1}
                </h5>
                {Array.from({ length: 3 }, (_, index) => (
                  <div key={index} className="flex items-center gap-1 mb-2">
                    <Skeleton className="h-3 w-3 rounded-full shrink-0" />
                    <Skeleton className="h-[11px] w-[75px]" />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full py-0">
              <div className="flex w-full items-center justify-between py-1">
                <span className="text-sm flex items-center gap-1 font-medium">
                  {published ? (
                    <Globe className="text-muted-foreground size-3" />
                  ) : (
                    <LockKeyholeIcon className="text-muted-foreground size-3" />
                  )}
                  {name}
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <EllipsisIcon className="text-gray-700 size-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <EyeIcon className="text-gray-700 size-4" />
                      View
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <PencilIcon className="text-gray-700 size-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <TrashIcon className="text-gray-700 size-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex w-full border-t items-center justify-between py-1">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground flex items-center gap-1 font-[14px]">
                    {responses}
                    <MessageSquare className="text-muted-foreground size-[14px]" />
                  </span>

                  <span className="text-muted-foreground flex items-center gap-1 text-[14px]">
                    {views}
                    <ActivityIcon className="text-muted-foreground size-[14px]" />
                  </span>
                </div>
                <span className="text-muted-foreground flex gap-1 text-[13px]">
                  {formatDistanceToNowStrict(new Date(createdAt), {
                    addSuffix: true,
                  })}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-10">
        <Button>Load More</Button>
      </div>
    </div>
  );
}
