import RepoCard from "./RepoCard";
import ReactGA from "react-ga";

function Contacts({ userJson }) {
  return (
    <div>
      <ul className="uk-list">
        {userJson.blog ? (
          <li className="uk-align-center uk-margin-remove-bottom">
            <span uk-icon="home"></span> Website:{" "}
            <a href={userJson.blog}>
              <b>{userJson.blog}</b>
            </a>
          </li>
        ) : null}
        {userJson.email ? (
          <li className="uk-align-center uk-margin-remove-bottom">
            <span uk-icon="mail"></span> Mail:{" "}
            <a href={`mailto:${userJson.email}`}>
              <b>{userJson.email}</b>
            </a>
          </li>
        ) : null}
        {userJson.location ? (
          <li className="uk-align-center uk-margin-remove-bottom">
            <span uk-icon="location"></span> Location:{" "}
            <b>{userJson.location}</b>
          </li>
        ) : null}
        {userJson.company ? (
          <li className="uk-align-center uk-margin-remove-bottom">
            <span uk-icon="bolt"></span> Company: <b>{userJson.company}</b>
          </li>
        ) : null}
      </ul>
    </div>
  );
}

function Stats({ userJson }) {
  const renderPrintButton = () => {
    return (
      <button
        type="submit"
        className="uk-button hidden-print uk-button-primary uk-margin-top"
        onClick={print}
      >
        Print CV
      </button>
    );
  };

  const print = () => {
    window.print();
  };

  return (
    <ul className="uk-list">
      <li className="uk-align-center uk-margin-remove-bottom">
        <span uk-icon="code"></span> Total Repositories:{" "}
        <a href={`${userJson.html_url}?tab=repositories`}>
          <b>{userJson.public_repos}</b>
        </a>
      </li>
      <li className="uk-align-center uk-margin-remove-bottom">
        <span uk-icon="users"></span> Followers:{" "}
        <a href={`${userJson.html_url}?tab=followers`}>
          <b>{userJson.followers}</b>
        </a>
      </li>
      <li className="uk-align-center uk-margin-remove-bottom">
        {renderPrintButton()}
      </li>
    </ul>
  );
}

function Warning({ message }) {
  return (
    <div className="uk-alert-danger" uk-alert="true">
      <a className="uk-alert-close" uk-close="true"></a>
      <p>{message}</p>
    </div>
  );
}

class AnalyticsInternal {
  constructor() {
    ReactGA.initialize("UA-154334049-3");
  }

  logPageView(url) {
    ReactGA.pageview(url);
  }
}
const Analytics = new AnalyticsInternal();

export { RepoCard, Contacts, Stats, Warning, Analytics };
