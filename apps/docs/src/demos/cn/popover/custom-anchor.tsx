"use client";

import {Button, Popover} from "@heroui/react";
import {useRef, useState} from "react";

export function PopoverCustomAnchor() {
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center gap-4">
      <Button variant="secondary" onPress={() => setIsOpen(!isOpen)}>
        {isOpen ? "隐藏提示" : "显示提示"}
      </Button>
      <div
        ref={anchorRef}
        className="rounded-xl border border-dashed border-border px-4 py-2 text-sm text-muted"
      >
        锚点元素
      </div>
      <Popover isOpen={isOpen} onOpenChange={setIsOpen}>
        <Popover.Content isNonModal className="max-w-64" placement="bottom" triggerRef={anchorRef}>
          <Popover.Dialog>
            <Popover.Heading>锚定的弹出层</Popover.Heading>
            <p className="mt-2 text-sm text-muted">该弹出层相对于触发器之外的元素进行定位。</p>
          </Popover.Dialog>
        </Popover.Content>
      </Popover>
    </div>
  );
}
