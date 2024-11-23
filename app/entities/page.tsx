"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, UserPlus } from "lucide-react";
import { EntityDialog } from "@/components/entities/entity-dialog";

export default function Entities() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Entities</h1>
        <EntityDialog />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Entity Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search entities..."
                  className="pl-8"
                />
              </div>
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="department">Department</SelectItem>
                <SelectItem value="embassy">Embassy</SelectItem>
                <SelectItem value="agency">Agency</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border">
            <div className="grid grid-cols-5 gap-4 p-4 font-medium">
              <div>Name</div>
              <div>Type</div>
              <div>Location</div>
              <div>Status</div>
              <div>Actions</div>
            </div>
            <div className="divide-y">
              {[
                {
                  name: "Department of International Relations",
                  type: "Department",
                  location: "Headquarters",
                  status: "Active",
                },
                {
                  name: "Embassy of Country X",
                  type: "Embassy",
                  location: "Paris, France",
                  status: "Active",
                },
                {
                  name: "Foreign Trade Agency",
                  type: "Agency",
                  location: "Brussels, Belgium",
                  status: "Active",
                },
              ].map((entity, i) => (
                <div
                  key={i}
                  className="grid grid-cols-5 gap-4 p-4 hover:bg-muted/50"
                >
                  <div>{entity.name}</div>
                  <div>{entity.type}</div>
                  <div>{entity.location}</div>
                  <div>
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                      {entity.status}
                    </span>
                  </div>
                  <div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}