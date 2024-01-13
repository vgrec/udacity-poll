import React, { useState } from "react";

const DropdownItem = ({ user }) => {
  return <option value={user.id}>{user.name}</option>;
};

const UsersDropdownMenu = ({ users, onOptionSelected }) => {
  const [selectedOption, setSelectedOption] = useState(users[0].id);

  const handleOptionsChanged = (e) => {
    const userId = e.target.value;

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

export default UsersDropdownMenu;
