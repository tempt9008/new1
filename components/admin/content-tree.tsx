"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Folder, ChevronRight, File } from "lucide-react";

export function ContentTree() {
  return (
    <Card className="p-4 h-[calc(100vh-13rem)] overflow-auto">
      <div className="space-y-4">
        <div className="font-medium text-sm text-muted-foreground">
          Content Structure
        </div>
        <div className="space-y-2">
          <TreeItem
            label="Mathematics"
            icon={Folder}
            expanded
            level={0}
            active
          >
            <TreeItem
              label="Algebra"
              icon={File}
              level={1}
            />
            <TreeItem
              label="Geometry"
              icon={File}
              level={1}
            />
          </TreeItem>
          <TreeItem
            label="Science"
            icon={Folder}
            level={0}
          />
        </div>
      </div>
    </Card>
  );
}

interface TreeItemProps {
  label: string;
  icon: any;
  children?: React.ReactNode;
  level?: number;
  expanded?: boolean;
  active?: boolean;
}

function TreeItem({ 
  label, 
  icon: Icon, 
  children, 
  level = 0, 
  expanded = false,
  active = false 
}: TreeItemProps) {
  return (
    <div>
      <div
        className={cn(
          "flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm transition-colors hover:bg-muted/50 cursor-pointer",
          active && "bg-muted"
        )}
        style={{ paddingLeft: `${(level + 1) * 12}px` }}
      >
        {children && (
          <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground/70" />
        )}
        <Icon className="h-4 w-4 shrink-0 text-muted-foreground/70" />
        <span className="flex-grow truncate">{label}</span>
      </div>
      {expanded && children && (
        <div>{children}</div>
      )}
    </div>
  );
}