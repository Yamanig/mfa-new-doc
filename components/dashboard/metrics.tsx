import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileCheck, FileClock, FileText, Users } from "lucide-react";

const metrics = [
  {
    title: "Total Documents",
    value: "2,345",
    icon: FileText,
    description: "Total documents in the system",
  },
  {
    title: "Pending Reviews",
    value: "43",
    icon: FileClock,
    description: "Documents awaiting review",
  },
  {
    title: "Completed Reviews",
    value: "1,274",
    icon: FileCheck,
    description: "Documents with completed reviews",
  },
  {
    title: "Active Users",
    value: "573",
    icon: Users,
    description: "Users active in the last 30 days",
  },
];

export function DashboardMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground">
              {metric.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}