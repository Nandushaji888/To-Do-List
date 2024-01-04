export default function AllClearBtn({
  allDelete,
  clearfinishedToDo,
  showClearAll,
  showFinished,
}) {
  return (
    <div>
      {showClearAll && (
        <button className="all-clear" onClick={() => allDelete()}>
          Clear All
        </button>
      )}
      {showFinished && (
        <button className="all-clear" onClick={() => clearfinishedToDo()}>
          Clear Finished List
        </button>
      )}
    </div>
  );
}
