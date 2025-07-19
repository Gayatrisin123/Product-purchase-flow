const UserForm = ({ formData, setFormData }) => {
  return (
    <div className="space-y-3">
      {["name", "age", "mobile", "email"].map(field => (
        <input
          key={field}
          type={field === "age" ? "number" : field === "email" ? "email" : "text"}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          className="w-full px-4 py-2 border rounded-lg"
          value={formData[field]}
          onChange={e => setFormData({ ...formData, [field]: e.target.value })}
          required
        />
      ))}
    </div>
  );
};

export default UserForm;
