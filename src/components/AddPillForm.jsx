import { useState } from "react";

function AddPillForm({ onAdd }) {
  const [name, setName] = useState("");
  const [hour, setHour] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || hour === "") return; // 둘 다 값이 있을 때만
    onAdd({
      id: Date.now(),
      name,
      hour: parseInt(hour),
    });
    setName("");
    setHour("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="약 이름"
        className="border p-2 rounded flex-1"
      />
      <input
        value={hour}
        onChange={(e) => setHour(e.target.value)}
        placeholder="시간(24시)"
        type="number"
        min="0"
        max="23"
        className="border p-2 rounded w-24"
      />
      <button type="submit" className="bg-green-500 text-white px-3 rounded">
        등록
      </button>
    </form>
  );
}

export default AddPillForm;
