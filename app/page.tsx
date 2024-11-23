import { DashboardMetrics } from "@/components/dashboard/metrics";
import { RecentDocuments } from "@/components/dashboard/recent-documents";
import { PendingReviews } from "@/components/dashboard/pending-reviews";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>
      
      <DashboardMetrics />
      
      <div className="grid gap-6 md:grid-cols-2">
        <RecentDocuments />
        <PendingReviews />
      </div>
    </div>
  );
}