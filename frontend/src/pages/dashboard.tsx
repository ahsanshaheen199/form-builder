import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StateCards } from "@/features/dashboard/components/state-cards";
import { Separator } from "@/components/ui/separator";
import { RecentForms } from "@/features/dashboard/components/recent-forms";

export function Dashboard() {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button>
              <PlusIcon />
              Add Form
            </Button>
          </div>
        </div>
        <StateCards />
        <Separator className="my-10" />
        <RecentForms />
      </div>
    </div>
  );
}
