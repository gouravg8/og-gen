import React from "react";
import { Card } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";

export default function loading() {
  return (
    <>
      <Card
        className="flex flex-col px-8 gap-4 mt-24 w-full lg:w-1/3 mx-auto"
        radius="lg"
      >
        <Skeleton className="rounded-lg">
          <div className="h-48 rounded-lg bg-gray-800"></div>
        </Skeleton>
        <div className="space-y-3">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-gray-700"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-gray-700"></div>
          </Skeleton>
        </div>
      </Card>
    </>
  );
}
