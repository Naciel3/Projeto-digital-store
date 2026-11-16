import './FilterGroup.css';

function FilterGroup({ title, inputType = 'checkbox', options, selected, onChange }) {
  return (
    <fieldset className="filter-group">
      <legend>{title}</legend>
      {options.map((option) => {
        const value = option.value ?? option.text;
        return (
          <label key={value} className="filter-option">
            <input
              type={inputType}
              name={title}
              checked={selected.includes(value)}
              onChange={() => onChange(value)}
            />
            {option.text}
          </label>
        );
      })}
    </fieldset>
  );
}

export default FilterGroup;