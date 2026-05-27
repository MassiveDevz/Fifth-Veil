"use client";

import { useState } from "react";
import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { STATE_DATA, STATE_LABELS } from "../data/stateData";

const OPTIONS = Object.keys(STATE_DATA).map((slug) => ({
  value: slug,
  label: STATE_LABELS[slug] ?? slug,
}));

export default function StateDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const selectedLabel = value ? (STATE_LABELS[value] ?? value) : null;

  return (
    <div className="mx-auto flex-column space-y-8">
      <h2>Search for your next deviant experience</h2>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Select a state"
        description="Search or choose a state from the list."
        // showCloseButton
        className="sm:max-w-lg"
        trigger={
          <Button
            type="button"
            variant="outline"
            aria-label="Select state"
            className="h-auto w-full max-w-lg justify-between px-4 py-3 font-body text-black"
          >
            <span className={cn(!selectedLabel && "text-muted-foreground")}>{selectedLabel ?? "Select a state"}</span>
            <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
          </Button>
        }
      >
        <Command>
          <CommandInput placeholder="Search states..." />
          <CommandList className="max-h-[min(24rem,65vh)]">
            <CommandEmpty>No state found.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                value="select-state-clear"
                keywords={["clear", "all", "select"]}
                onSelect={() => {
                  onChange(null);
                  setOpen(false);
                }}
              >
                Select a state
              </CommandItem>
              {OPTIONS.map((opt) => (
                <CommandItem
                  key={opt.value}
                  value={opt.label}
                  keywords={[opt.value, opt.label]}
                  data-checked={value === opt.value ? true : undefined}
                  onSelect={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                >
                  {opt.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  );
}
