import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function StateCards() {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <Card className="gap-0">
        <CardHeader className="pb-2">
          <CardDescription>Total Forms</CardDescription>
          <CardTitle className="text-4xl font-semibold">10</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <p className="text-muted-foreground">All Forms created by you</p>
        </CardContent>
      </Card>
      <Card className="gap-0">
        <CardHeader className="pb-2">
          <CardDescription>Total Responses</CardDescription>
          <CardTitle className="text-4xl font-semibold">10</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <p className="text-muted-foreground">Responses to your Forms</p>
        </CardContent>
      </Card>
      <Card className="gap-0">
        <CardHeader className="pb-2">
          <CardDescription>Conversion Rate</CardDescription>
          <CardTitle className="text-4xl font-semibold">10</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <p className="text-muted-foreground">
            % of views that converted to a submission
          </p>
        </CardContent>
      </Card>
      <Card className="gap-0">
        <CardHeader className="pb-2">
          <CardDescription>Engagement Rate</CardDescription>
          <CardTitle className="text-4xl font-semibold">10</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <p className="text-muted-foreground">
            % of views that received a response
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
