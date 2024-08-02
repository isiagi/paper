"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function Hero() {
  const [date, setDate] = React.useState();
  return (
    <div className="pb-10">
      <div>
        <h1 className="text-3xl font-bold text-center max-w-[500px] mx-auto py-5">
          Discover a Wealth of Knowledge with Our Extensive Ugandan Newspaper
          Archive
        </h1>
        <div className="flex justify-center flex-wrap gap-3">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Search by actual date" />
            <Button type="submit">Search</Button>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <Select>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Publisher" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily Monitor</SelectItem>
              <SelectItem value="new">New Vision</SelectItem>
              <SelectItem value="bukedde">Bukedde</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default Hero;
