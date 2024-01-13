import React, { useState } from "react";
import DropdownItem from "./DropdownItem";

const DropdownMenu = ({ users, onOptionSelected }) => {
  const [selectedOption, setSelectedOption] = useState(users[0].id);

  const handleOptionsChanged = (e) => {
    const userId = e.target.value;
    console.log(userId);

    setSelectedOption(userId);
    onOptionSelected(userId);
  };

  return (
    <select value={selectedOption} onChange={handleOptionsChanged}>
      {users.map((user) => (
        <DropdownItem key={user.id} user={user} />
      ))}
    </select>
  );
};

export default DropdownMenu;
