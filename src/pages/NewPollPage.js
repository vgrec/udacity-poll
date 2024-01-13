const NewPollPage = () => {
  return (
    <div>
      <p className="center-text">Create new poll</p>
      <div className="poll-container">
        <h2 className="center-text">Would you rather?</h2>
        <form>
          <strong>First option</strong>
          <input type="text" placeholder="Option One" />

          <strong>Second option</strong>
          <input type="text" placeholder="Option Two" />
          <button>Create Poll</button>
        </form>
      </div>
    </div>
  );
};

export default NewPollPage;
