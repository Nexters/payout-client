import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import React from "react";
import { toast } from "sonner";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  t?: string | number;
  title: string;
  isRevertable?: boolean;
  handleUndo?: () => void;
}

const Toast = React.memo(({ t, title, isRevertable, handleUndo, ...props }: ToastProps) => {
  const onUndo = React.useCallback(() => {
    toast.dismiss(t);
    handleUndo?.();
  }, [handleUndo, t]);

  return (
    <div
      className={cn("flex items-center justify-between rounded bg-grey-900 py-3.5 text-white shadow", props.className)}
      style={{
        paddingLeft: "1.125rem",
        paddingRight: "1.125rem",
      }}
      {...props}
    >
      <p className="text-body3">{title}</p>
      {isRevertable && <UndoButton onClick={onUndo} />}
    </div>
  );
});

const UndoButton = React.memo(({ onClick }: { onClick: () => void }) => {
  return (
    <Button onClick={onClick} variant={"default"} className="text-main-400">
      <p>Undo</p>
    </Button>
  );
});

export default Toast;
