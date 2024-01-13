const LeaderboardTable = ({ users }) => {
  return (
    <div>
      <table className="leaderboard">
        <thead>
          <tr>
            <th>User</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                  <img
                    width="50"
                    height="50"
                    src={user.avatarURL}
                    alt={`Avatar of ${user.name}`}
                  />
                  <div style={{ display: "flex", flexDirection: "column", marginLeft: 8 }}>
                    <strong>{user.name}</strong>
                    <div style={{fontSize: 13, color: "#424242", marginTop: 2}}>{user.id}</div>
                  </div>
                </div>
              </td>
              <td>{Object.keys(user.answers).length}</td>
              <td>{user.questions.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
