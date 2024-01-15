import NewPollPage from "./NewPollPage";
import PollResultsPage from "./PollResultsPage";

const PollDetailsPage = ({ id }) => {
  const isPollAnswered = false;

  return <div>{isPollAnswered ? <PollResultsPage /> : <NewPollPage />}</div>;
};

export default PollDetailsPage;
