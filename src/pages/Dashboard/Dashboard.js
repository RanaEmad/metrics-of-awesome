import React from "react";
import "./Dashboard.css";
import Chart from "../../components/Chart/Chart";
import Auth from "../../services/Auth";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      metrics: {
        breathtaking: 18,
        awesome: 49,
        amazeballs: 9,
        phenomenal: 5,
        mindblowing: 19,
      },
    };
  }
  componentDidMount() {
    if (!Auth.signedIn()) {
      this.props.history.push("/signin");
      window.location.reload();
    }
    Auth.getDashboard().then((data) => {
      if (data.success) {
        this.setState({ metrics: data.metrics });
      }
    });
  }
  handleSignOut = () => {
    Auth.signOut();
  };
  render() {
    return (
      <div className="dashboard">
        <div className="signout" onClick={this.handleSignOut}>
          Sign Out?
        </div>
        <div className="header-image"></div>
        <h1 className="header-title">Metrics Of Awesome!</h1>
        <div className="chart">
          <Chart metrics={this.state.metrics} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
