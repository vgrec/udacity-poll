const DropdownItem = ({ user }) => {
  return <option value={user.id}>{user.name}</option>;
};

export default DropdownItem;