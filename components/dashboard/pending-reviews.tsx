import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const pendingReviews = [
  {
    id: 1,
    title: "Economic Development Report",
    assignedTo: "Sarah Johnson",
    dueDate: "2024-03-20",
  },
  {
    id: 2,
    title: "Peacekeeping Mission Brief",
    assignedTo: "Michael Chen",
    dueDate: "2024-03-21",
  },
  {
    id: 3,
    title: "Diplomatic Relations Update",
    assignedTo: "Emma Williams",
    dueDate: "2024-03-22",
  },
];

export function PendingReviews() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Pending Reviews
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {pendingReviews.map((review) => (
            <div
              key={review.id}
              className="flex items-center justify-between rounded-lg border p-3"
            >
              <div className="space-y-1">
                <p className="font-medium">{review.title}</p>
                <p className="text-sm text-muted-foreground">
                  Assigned to: {review.assignedTo}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  Due: {review.dueDate}
                </span>
                <Button size="sm" variant="outline">
                  Review
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}