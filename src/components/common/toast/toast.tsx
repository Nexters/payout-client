import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import React from "react";
import { toast } from "sonner";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  t?: string | number;
  title: string;
  isRevertable?: boolean;
}

const Toast = React.memo(({ t, title, isRevertable, ...props }: ToastProps) => {
  const onUndo = React.useCallback(() => {
    toast.dismiss(t);
  }, [t]);

  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-lg bg-[#8B95A1] px-5 py-4 text-white shadow",
        props.className
      )}
      {...props}
    >
      <p>{title}</p>
      {isRevertable && <UndoButton onClick={onUndo} />}
    </div>
  );
});

const UndoButton = React.memo(({ onClick }: { onClick: () => void }) => {
  return (
    <Button onClick={onClick} variant={"default"}>
      <p>Undo</p>
    </Button>
  );
});

export default Toast;
