import './Input.css';

const Input = (
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