"use client";

import {Button, Popover} from "@heroui/react";
import {useRef, useState} from "react";

export function PopoverCustomAnchor() {
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center gap-4">
      <Button variant="secondary" onPress={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide hint" : "Show hint"}
      </Button>
      <div
        ref={anchorRef}
        className="rounded-xl border border-dashed border-border px-4 py-2 text-sm text-muted"
      >
        Anchor element
      </div>
      <Popover isOpen={isOpen} onOpenChange={setIsOpen}>
        <Popover.Content isNonModal className="max-w-64" placement="bottom" triggerRef={anchorRef}>
          <Popover.Dialog>
            <Popover.Heading>Anchored Popover</Popover.Heading>
            <p className="mt-2 text-sm text-muted">
              This popover is positioned relative to an element outside of its trigger.
            </p>
          </Popover.Dialog>
        </Popover.Content>
      </Popover>
    </div>
  );
}
