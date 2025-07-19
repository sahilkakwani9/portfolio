"use client";

import { Card, CardHeader } from "@/components/ui/card";

interface BookCardProps {
  title: string;
  currentlyReading?: boolean;
  dropped?: boolean;
}

export const BookCard = ({ title, currentlyReading = false, dropped = false }: BookCardProps) => {
  return (
      <div className="cursor-pointer">
        <Card className="flex">
            <CardHeader>
                <h3 className="inline-flex items-center text-foreground/50 hover:text-foreground transition-colors justify-center font-semibold leading-none text-xs sm:text-sm">
                  - {title}
                  {currentlyReading && (
                    <span className="ml-2 px-1.5 py-0.5 text-[10px] bg-green-500/10 text-green-500 rounded-md font-medium">
                      Currently Reading
                    </span>
                  )}
                  {dropped && (
                    <span className="ml-2 px-1.5 py-0.5 text-[10px] bg-red-500/10 text-red-500 rounded-md font-medium">
                      Dropped
                    </span>
                  )}
                </h3>
            </CardHeader>
        </Card>
      </div>
  );
};
