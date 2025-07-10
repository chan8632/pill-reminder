import { useState } from "react";
import PillList from "./pages/PillList";
import AddPillForm from "./components/AddPillForm";

function App() {
  const [pills, setPills] = useState([]);

  const handleAdd = (pill) => {
    setPills([...pills, pill]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="flex-1 flex flex-col justify-center w-full p-4 bg-red">
        <h1 className="text-2xl font-bold mb-4">복약 알림 MVP</h1>
        <AddPillForm onAdd={handleAdd} />
        <PillList pills={pills} />
      </div>
    </div>
  );
}

export default App;
