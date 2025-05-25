import './Input.css';
import { forwardRef } from 'react';

function Input({ label, error, ...props }, ref) {
  return (
    <div className="input-group">
      <label htmlFor={props.name} className="input-label">{label}</label>
      <input ref={ref} {...props} className="input-field" />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
}

export default forwardRef(Input);