import { useLocation, useNavigate, useParams } from "react-router-dom";

export function formatDate(timestamp) {
  if (timestamp === null) {
    return '';
  }

  const d = new Date(timestamp);
  const time = d.toLocaleTimeString('en-US');
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString();
}

export function withRouter(Component) {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

export function getImages(image) {
  if (image === null) {
    return null;
  }
  else {
    return require.context('../images', true)(`./${image}`);
  }
}

export function objectToArray(objectInput) {
  let list = [];

  for (const key in objectInput) {
    if (Object.hasOwnProperty.call(objectInput, key)) {
      const element = objectInput[key];
      list.push(element);
    }
  }

  return list;
}

export function formatLeaderboard(users, questions) {
  let leaderboardList = [...objectToArray(users)];
  let questionList = objectToArray(questions);
  leaderboardList.forEach((leaderboard) => {
    leaderboard.answered = 0;
    leaderboard.created = questionList.filter((question) => {
      leaderboard.answered += question.optionOne.votes.filter((vote) => {
        return vote === leaderboard.id;
      }).length;

      leaderboard.answered += question.optionTwo.votes.filter((vote) => {
        return vote === leaderboard.id;
      }).length;

      return question.author === leaderboard.id;
    }).length;
  });

  return leaderboardList;
}