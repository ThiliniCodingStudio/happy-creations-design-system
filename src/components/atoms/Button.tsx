import React, { useState, useRef, useEffect } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined' | 'text';
  icon?: React.ReactNode;
  disabled?: boolean;
  children: React.ReactNode;
  'aria-label'?: string;
}

interface RippleType {
  x: number;
  y: number;
  size: number;
  id: number;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'filled',
  icon,
  disabled = false,
  children,
  className = '',
  onClick,
  'aria-label': ariaLabel,
  ...props
}) => {
  const [ripples, setRipples] = useState<RippleType[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rippleIdRef = useRef(0);

  // Remove ripple after animation
  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples((prev) => prev.slice(1));
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [ripples]);

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;

    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple: RippleType = {
      x,
      y,
      size,
      id: rippleIdRef.current++,
    };

    setRipples((prev) => [...prev, newRipple]);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    createRipple(event);
    if (onClick) {
      onClick(event);
    }
  };

  // Base classes for all variants
  const baseClasses =
    'relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-200 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed';

  // Variant-specific classes
  const variantClasses = {
    filled: disabled
      ? 'bg-gray-300 text-gray-500'
      : 'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-md active:bg-purple-800 focus-visible:ring-purple-500',
    outlined: disabled
      ? 'border-2 border-gray-300 text-gray-400 bg-transparent'
      : 'border-2 border-purple-600 text-purple-600 bg-transparent hover:bg-purple-50 active:bg-purple-100 focus-visible:ring-purple-500',
    text: disabled
      ? 'text-gray-400 bg-transparent'
      : 'text-purple-600 bg-transparent hover:bg-purple-50 active:bg-purple-100 focus-visible:ring-purple-500',
  };

  return (
    <button
      ref={buttonRef}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      disabled={disabled}
      onClick={handleClick}
      aria-label={ariaLabel}
      {...props}
    >
      {/* Icon */}
      {icon && <span className="w-5 h-5 flex items-center justify-center">{icon}</span>}

      {/* Label */}
      <span className="relative z-10">{children}</span>

      {/* Ripple Effect Container */}
      <span className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute rounded-full animate-ripple"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
              backgroundColor:
                variant === 'filled'
                  ? 'rgba(255, 255, 255, 0.3)'
                  : 'rgba(124, 58, 237, 0.2)',
            }}
          />
        ))}
      </span>
    </button>
  );
};

// Add to your tailwind.config.js for ripple animation:
/*
module.exports = {
  theme: {
    extend: {
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
      },
      animation: {
        ripple: 'ripple 600ms ease-out',
      },
    },
  },
}
*/
