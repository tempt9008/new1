"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function ContentActions() {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Mathematics</h2>
          <Button size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            Add Question
          </Button>
        </div>
        <div className="text-sm text-muted-foreground">
          Select a folder or category to manage its content
        </div>
      </div>
    </Card>
  );
}