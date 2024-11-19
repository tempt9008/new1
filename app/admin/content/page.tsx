"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ContentTree } from "@/components/admin/content-tree";
import { ContentActions } from "@/components/admin/content-actions";
import { FolderPlus } from "lucide-react";
import { CreateFolderDialog } from "@/components/admin/create-folder-dialog";

export default function ContentPage() {
  const [createFolderOpen, setCreateFolderOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Content Management</h1>
          <p className="text-muted-foreground">
            Manage your quiz folders, categories, and questions
          </p>
        </div>
        <Button onClick={() => setCreateFolderOpen(true)} className="gap-2">
          <FolderPlus className="h-4 w-4" />
          New Folder
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-4 lg:col-span-3">
          <ContentTree />
        </div>
        <div className="md:col-span-8 lg:col-span-9">
          <ContentActions />
        </div>
      </div>

      <CreateFolderDialog 
        open={createFolderOpen} 
        onOpenChange={setCreateFolderOpen}
      />
    </div>
  );
}