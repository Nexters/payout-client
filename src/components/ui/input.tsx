"use client"

import IcXCircle from '@/icon/IcXCircle';
import React, { forwardRef, HTMLProps, useState } from 'react';

type InputState = 'default' | 'focused' | 'error';

interface InputProps extends HTMLProps<HTMLInputElement> {
  label: string;
  type: 'string' | 'number';
  errorDescription?: string;
  clearInput: () => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, errorDescription, clearInput, onFocus, ...props }, ref) => {
    const [inputState, setInputState] = useState<InputState>('default');

    let inputClassName = 'border rounded-lg px-4 py-2 outline-none w-full';
    let labelClassName = 'block text-h6 font-medium mb-1';
    let descriptionClassName = 'text-body4 text-error mt-1';

    switch (inputState) {
      case 'focused':
        inputClassName += ' border-2 border-blue-700';
        labelClassName += ' text-main-700';
        break;
      case 'error':
        inputClassName += ' border-error';
        labelClassName += ' text-error';
        break;
      default:
        inputClassName += ' border-gray-300';
        labelClassName += ' text-gray-700';
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      const relatedTarget = event.relatedTarget as HTMLElement;
      if (!relatedTarget || !relatedTarget.closest(`.input-container${type}`)) {
        if (type === 'number' && Number(props.value) <= 0) {
          setInputState('error');
        }

        setInputState('default');
      }
    }

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setInputState('focused');
      onFocus?.(event);
    };

    return (
      <div className={`input-container${type}`}>
        {label && <label className={labelClassName}>{label}</label>}
        <div className='relative'>
          <input
            ref={ref}
            className={inputClassName}
            type={type}
            onFocus={handleFocus} // 수정된 handleFocus 함수로 변경
            onBlur={handleBlur}
            {...props}
          />
          {inputState === 'focused' && props.value && (
            <div className='absolute inset-y-0 right-0 mr-4 flex items-center'>
              <button
                className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-300"
                onClick={clearInput}
              >
                <IcXCircle color={'#f9fafb'} />
              </button>
            </div>
          )}
        </div>
        {inputState === 'error' && errorDescription && <p className={descriptionClassName}>{errorDescription}</p>}
      </div>
    );
  }
);

export default Input;