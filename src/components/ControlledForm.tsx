import { FormEvent, useState, ChangeEvent } from "react";

interface formData {
  username: string;
  password: string;
  checkbox1: boolean;
  checkbox2: boolean;
}

const initialFormData: formData = {
  username: "",
  password: "",
  checkbox1: false,
  checkbox2: false,
};

const ControlledForm = () => {
  const [formData, setFormData] = useState<formData>(initialFormData);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="usernameControlled" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="usernameControlled"
          name="username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="passwordControlled" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="passwordControlled"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="checkbox1">
          <input
            type="checkbox"
            id="checkbox1"
            name="checkbox1"
            checked={formData.checkbox1}
            onChange={handleCheckboxChange}
          />
          Checkbox 1
        </label>
      </div>

      <div>
        <label htmlFor="checkbox2">
          <input
            type="checkbox"
            id="checkbox2"
            name="checkbox2"
            checked={formData.checkbox2}
            onChange={handleCheckboxChange}
          />
          Checkbox 2
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default ControlledForm;
