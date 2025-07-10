function PillList({ pills }) {
  if (!pills.length) {
    return <div className="text-gray-400">등록된 약이 없습니다.</div>;
  }
  return (
    <div>
      {pills.map((pill) => (
        <div key={pill.id} className="p-3 my-2 border rounded bg-white">
          💊 <b>{pill.name}</b> | {pill.hour}시
        </div>
      ))}
    </div>
  );
}

export default PillList;
