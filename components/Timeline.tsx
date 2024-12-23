import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { TimeLogData } from "@/asset/Data";

export default function page() {
  const data = TimeLogData
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
