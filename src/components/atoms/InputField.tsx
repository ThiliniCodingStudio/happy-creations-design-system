import React, { useState, useId } from 'react';

interface InputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'outlined' | 'filled';
  label: string;
  errorMessage?: string;
  helperText?: string;
  disabled?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  onTrailingIconClick?: () => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  variant = 'outlined',
  label,
  errorMessage,
  helperText,
  disabled = false,
  leadingIcon,
  trailingIcon,
  onTrailingIconClick,
  className = '',
  value,
  defaultValue,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  
  const inputId = useId();
  const helperId = useId();
  const errorId = useId();
  
  const hasError = !!errorMessage;
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;
  const hasValue = currentValue !== '' && currentValue !== null && currentValue !== undefined;
  const isLabelFloating = isFocused || hasValue;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    props.onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    props.onBlur?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalValue(e.target.value);
    }
    props.onChange?.(e);
  };

  // Base container classes
  const containerClasses = 'relative w-full';

  // Input wrapper classes based on variant
  const wrapperBaseClasses = 'relative flex items-center transition-all duration-200';
  
  const wrapperVariantClasses = {
    outlined: `rounded-md border-2 ${
      disabled
        ? 'border-gray-300 bg-gray-50'
        : hasError
        ? 'border-red-500 focus-within:border-red-600'
        : isFocused
        ? 'border-purple-600'
        : 'border-gray-400 hover:border-gray-600 focus-within:border-purple-600'
    }`,
    filled: `rounded-t-md border-b-2 ${
      disabled
        ? 'bg-gray-100 border-gray-300'
        : hasError
        ? 'bg-gray-100 border-red-500 focus-within:border-red-600'
        : isFocused
        ? 'bg-gray-100 border-purple-600'
        : 'bg-gray-100 border-gray-400 hover:border-gray-600 focus-within:border-purple-600'
    }`,
  };

  // Label classes with floating animation
  const labelBaseClasses = `
    absolute left-0 transition-all duration-200 pointer-events-none
    ${disabled ? 'text-gray-400' : hasError ? 'text-red-500' : isFocused ? 'text-purple-600' : 'text-gray-600'}
  `;

  const labelPositionClasses = isLabelFloating
    ? variant === 'outlined'
      ? '-top-2.5 left-3 text-xs px-1 bg-white'
      : '-top-1.5 left-3 text-xs'
    : variant === 'outlined'
    ? 'top-3 left-3 text-base'
    : 'top-4 left-3 text-base';

  // Input classes
  const inputBaseClasses = `
    w-full bg-transparent outline-none text-gray-900 placeholder-transparent
    disabled:cursor-not-allowed disabled:text-gray-500
    ${variant === 'outlined' ? 'px-3 py-3' : 'px-3 pt-6 pb-2'}
    ${leadingIcon ? (variant === 'outlined' ? 'pl-12' : 'pl-12') : ''}
    ${trailingIcon ? 'pr-12' : ''}
  `;

  // Icon classes
  const iconClasses = `absolute flex items-center justify-center w-5 h-5 ${
    disabled ? 'text-gray-400' : hasError ? 'text-red-500' : 'text-gray-600'
  }`;

  const leadingIconClasses = `${iconClasses} ${variant === 'outlined' ? 'left-3' : 'left-3'}`;
  const trailingIconClasses = `${iconClasses} ${variant === 'outlined' ? 'right-3' : 'right-3'} ${
    onTrailingIconClick ? 'cursor-pointer hover:text-gray-900' : ''
  }`;

  // Helper/Error text classes
  const supportTextClasses = `mt-1 text-xs px-3 ${
    hasError ? 'text-red-500' : 'text-gray-600'
  }`;

  return (
    <div className={`${containerClasses} ${className}`}>
      {/* Input Container */}
      <div className={`${wrapperBaseClasses} ${wrapperVariantClasses[variant]}`}>
        {/* Leading Icon */}
        {leadingIcon && (
          <span className={leadingIconClasses}>
            {leadingIcon}
          </span>
        )}

        {/* Input Field */}
        <input
          id={inputId}
          className={inputBaseClasses}
          disabled={disabled}
          value={isControlled ? value : internalValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          aria-invalid={hasError}
          aria-describedby={
            hasError ? errorId : helperText ? helperId : undefined
          }
          {...props}
        />

        {/* Floating Label */}
        <label
          htmlFor={inputId}
          className={`${labelBaseClasses} ${labelPositionClasses} ${
            leadingIcon && !isLabelFloating ? (variant === 'outlined' ? 'left-12' : 'left-12') : ''
          }`}
        >
          {label}
        </label>

        {/* Trailing Icon */}
        {trailingIcon && (
          <span
            className={trailingIconClasses}
            onClick={onTrailingIconClick}
            role={onTrailingIconClick ? 'button' : undefined}
            tabIndex={onTrailingIconClick ? 0 : undefined}
            onKeyDown={(e) => {
              if (onTrailingIconClick && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                onTrailingIconClick();
              }
            }}
          >
            {trailingIcon}
          </span>
        )}
      </div>

      {/* Helper Text / Error Message */}
      {(errorMessage || helperText) && (
        <p
          id={hasError ? errorId : helperId}
          className={supportTextClasses}
          role={hasError ? 'alert' : undefined}
        >
          {errorMessage || helperText}
        </p>
      )}
    </div>
  );
};

export default InputField;
