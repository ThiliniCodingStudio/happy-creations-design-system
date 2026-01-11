import React, { useState, useEffect } from 'react';
import { InputField } from '../atoms/InputField';
import { Button } from '../atoms/Button';

interface LoginFormProps {
  onSubmit?: (data: { email: string; password: string }) => void;
  className?: string;
}

interface FormErrors {
  email: string;
  password: string;
}

interface TouchedFields {
  email: boolean;
  password: boolean;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  className = '',
}) => {
  // Form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Validation state
  const [errors, setErrors] = useState<FormErrors>({
    email: '',
    password: '',
  });
  
  // Track which fields have been touched (for better UX)
  const [touched, setTouched] = useState<TouchedFields>({
    email: false,
    password: false,
  });

  // Password visibility toggle
  const [showPassword, setShowPassword] = useState(false);

  /**
   * Validate email field
   * Rule: Must include '@'
   */
  const validateEmail = (value: string): string => {
    if (!value) {
      return 'Email is required';
    }
    if (!value.includes('@')) {
      return 'Email must include @';
    }
    // Additional basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  /**
   * Validate password field
   * Rule: Must be > 6 characters
   */
  const validatePassword = (value: string): string => {
    if (!value) {
      return 'Password is required';
    }
    if (value.length <= 6) {
      return 'Password must be more than 6 characters';
    }
    return '';
  };

  /**
   * Validate all fields and update error state
   */
  useEffect(() => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setErrors({
      email: emailError,
      password: passwordError,
    });
  }, [email, password]);

  /**
   * Check if form is valid
   */
  const isFormValid = !errors.email && !errors.password && email && password;

  /**
   * Handle field blur events to mark as touched
   */
  const handleBlur = (field: keyof TouchedFields) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  /**
   * Handle form submission
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched on submit attempt
    setTouched({ email: true, password: true });

    // Check if form is valid
    if (!isFormValid) {
      return;
    }

    // Simulate API call
    setIsLoading(true);
    
    const payload = {
      email,
      password,
    };

    // Log the payload to console (simulating API call)
    console.log('🚀 Login Payload:', payload);
    console.log('📧 Email:', email);
    console.log('🔒 Password:', '*'.repeat(password.length));

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log('✅ Login successful (simulated)');
      
      // Call optional onSubmit callback
      if (onSubmit) {
        onSubmit(payload);
      }

      // Reset form after successful submission (optional)
      // setEmail('');
      // setPassword('');
      // setTouched({ email: false, password: false });
    } catch (error) {
      console.error('❌ Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Toggle password visibility
   */
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={`w-full max-w-md ${className}`}>
      <div className="bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">
            Sign in to your account to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Email Field */}
          <InputField
            variant="outlined"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => handleBlur('email')}
            errorMessage={touched.email ? errors.email : ''}
            helperText={!touched.email && !errors.email ? 'Enter your email address' : ''}
            disabled={isLoading}
            autoComplete="email"
            leadingIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            }
          />

          {/* Password Field */}
          <InputField
            variant="outlined"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => handleBlur('password')}
            errorMessage={touched.password ? errors.password : ''}
            helperText={
              !touched.password && !errors.password
                ? 'Must be more than 6 characters'
                : ''
            }
            disabled={isLoading}
            autoComplete="current-password"
            leadingIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            }
            trailingIcon={
              showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )
            }
            onTrailingIconClick={togglePasswordVisibility}
          />

          {/* Additional Options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <span className="text-gray-700">Remember me</span>
            </label>
            <button
              type="button"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Forgot password?
            </button>
          </div>

          {/* Submit Button */}
          <Button
            variant="filled"
            type="submit"
            disabled={!isFormValid || isLoading}
            className="w-full"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Signing in...
              </span>
            ) : (
              'Login'
            )}
          </Button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <button className="text-purple-600 hover:text-purple-700 font-medium">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
