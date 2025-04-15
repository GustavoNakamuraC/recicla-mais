import './Input.css';
import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="input-group">
        <label htmlFor={props.name} className="input-label">{label}</label>
        <input ref={ref} {...props} className="input-field" />
        {error && <span className="input-error">{error}</span>}
      </div>
    );
  }
);

export default Input;