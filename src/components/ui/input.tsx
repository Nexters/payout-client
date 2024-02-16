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

const inputVariants = cva("outline-none w-full", {
  variants: {
    variant: {
      default: "border-gray-300",
      focused: "border-2 border-blue-700",
      error: "border-error",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
const labelVariants = cva("block text-h6 font-medium mb-1", {
  variants: {
    variant: {
      default: "text-gray-700",
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
        <div className="relative flex w-full justify-center rounded-lg border px-4 py-2 outline-none">
          <input
            ref={ref}
            className={cn(inputVariants({ variant: inputState }))}
            type={type}
            onFocus={handleFocus} // 수정된 handleFocus 함수로 변경
            onBlur={handleBlur}
            {...props}
          />
          {
            <div className="flex items-center pl-4 ">
              <button
                className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-300"
                onClick={clearInput}
              >
                <IcXCircle color={"#f9fafb"} />
              </button>
            </div>
          }
        </div>
        {inputState === "error" && errorDescription && <p className="mt-1 text-body4 text-error">{errorDescription}</p>}
      </div>
    );
  }
);

export default Input;
