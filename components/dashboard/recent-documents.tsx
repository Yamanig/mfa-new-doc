import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText } from "lucide-react";

const recentDocuments = [
  {
    id: 1,
    title: "UN Resolution 2024/03",
    status: "In Review",
    date: "2024-03-15",
    priority: "High",
  },
  {
    id: 2,
    title: "Climate Action Report",
    status: "Pending",
    date: "2024-03-14",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Security Council Brief",
    status: "Completed",
    date: "2024-03-13",
    priority: "High",
  },
  {
    id: 4,
    title: "Humanitarian Aid Proposal",
    status: "In Review",
    date: "2024-03-12",
    priority: "Medium",
  },
];

export function RecentDocuments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Recent Documents
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentDocuments.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between rounded-lg border p-3"
            >
              <div className="space-y-1">
                <p className="font-medium">{doc.title}</p>
                <p className="text-sm text-muted-foreground">
                  {doc.date}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`text-sm ${
                    doc.priority === "High"
                      ? "text-red-500"
                      : "text-yellow-500"
                  }`}
                >
                  {doc.priority}
                </span>
                <span
                  className={`rounded-full px-2 py-1 text-xs ${
                    doc.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : doc.status === "In Review"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {doc.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}