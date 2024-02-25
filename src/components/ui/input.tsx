"use client";

import IcXCircle from "@/icon/IcXCircle";
import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import React, { forwardRef, HTMLProps, useState } from "react";

type InputState = "default" | "focused" | "error";

interface InputProps extends HTMLProps<HTMLInputElement> {
  label: string;
  type: "string" | "number";
  errorDescription?: string;
  clearInput: () => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const containerVariants = cva("", {
  variants: {
    variant: {
      default: "border-grey-300",
      focused: "border-2 border-main-700",
      error: "border-error",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const labelVariants = cva("block mb-1.5 text-sm font-semibold", {
  variants: {
    variant: {
      default: "text-grey-700",
      focused: "text-main-700",
      error: "text-error",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, errorDescription, clearInput, onFocus, ...props }, ref) => {
    const [inputState, setInputState] = useState<InputState>("default");

    const handleBlur = () => {
      if (type === "number" && Number(props.value) <= 0) {
        setInputState("error");
      } else {
        setInputState("default");
      }
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setInputState("focused");
      onFocus?.(event);
    };

    return (
      <div className={`input-container${type}`}>
        {label && <label className={cn(labelVariants({ variant: inputState }))}>{label}</label>}
        <div
          className={
            cn(containerVariants({ variant: inputState })) +
            " outline-none relative flex w-full justify-center rounded-lg border px-5 py-2"
          }
        >
          <input
            ref={ref}
            className={"h-9 w-full outline-none"}
            type={type}
            onFocus={handleFocus} // 수정된 handleFocus 함수로 변경
            onBlur={handleBlur}
            {...props}
          />
          {!props.disabled && props.value && (
            <div className="flex items-center pl-4 ">
              <button
                className="flex h-5 w-5 items-center justify-center rounded-full bg-grey-300"
                onClick={clearInput}
              >
                <IcXCircle color={"#f9fafb"} />
              </button>
            </div>
          )}
        </div>
        {inputState === "error" && errorDescription && <p className="mt-1 text-body4 text-error">{errorDescription}</p>}
      </div>
    );
  }
);

export default Input;
