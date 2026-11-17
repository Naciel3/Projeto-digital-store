import { useState } from "react";
import './ProductOptions.css';

function ProductOptions({ options, radius = '4px', shape = 'square', type = 'text' }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="product-options">
      {options.map((option) => (
       <button
          key={option}
           aria-pressed={selected === option}
           className={`option ${shape} ${selected === option ? 'selected' : ''}`}
           style={{
             borderRadius: shape === 'circle' ? '50%' : radius,
             background: type === 'color' ? option : undefined,
             }}
  onClick={() => setSelected(option)}
>
          {type === 'text' && option}
        </button>
      ))}
    </div>
  );
}

export default ProductOptions;