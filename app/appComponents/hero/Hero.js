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

function Hero() {
  return (
    <div className="pb-10">
      <div>
        <h1 className="text-3xl font-bold text-center max-w-[500px] mx-auto py-5">
          Discover a Wealth of Knowledge with Our Extensive Ugandan Newspaper
          Archive
        </h1>
        <div className="flex justify-center flex-wrap gap-3">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Search by headline" />
            <Button type="submit">Search</Button>
          </div>
          <Select>
            <SelectTrigger className="w-[80px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1986">1986</SelectItem>
              <SelectItem value="1987">1987</SelectItem>
              <SelectItem value="1988">1988</SelectItem>
            </SelectContent>
          </Select>

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
