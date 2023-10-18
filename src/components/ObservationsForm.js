import { useState } from "react";

export function ObservationsForm() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const currentValue = event.target.value;

    setValue(currentValue);
  };

  return (
    <form>
      <label htmlFor="rejectionComment" className="form-label">
        Observaciones
      </label>
      <textarea
        className="form-control"
        id="rejectionComment"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
}
