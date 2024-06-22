const Dropdown = ({ icon, items, attachmentId, handleAction }) => {
    
  return (
    <div className="dropdown relative">
      <div tabIndex={0} role="button" className="">
        {icon}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content absolute z-[1] left-1/2 transform -translate-x-1/2 menu p-2 shadow bg-base-100 rounded-box w-[8rem]"
      >
        {items.map((item) => (
          <li key={item.label}>
            <button
              onClick={() => handleAction(item.action, attachmentId)}
              className={item.className}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
