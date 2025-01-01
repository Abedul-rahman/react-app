import dash from "../DashboardComps/Dashbaord.module.css";
import useAuth from "../hooks/useAuth";


    const Dashboard = () => {
        const {auth} = useAuth();
        return (
          <>
            <header>
              <div id={dash.pageName}>Dashboard</div>
              <div id={dash.welcome}>Welcome back, {auth?.email.split('@')[0]}</div>
            </header>
            <div className={dash.tables}>
              <table>
                <tr><th colSpan="4">Latest Requests</th></tr>
                <tr>
                  <th>Facility</th>
                  <th>Person</th>
                  <th>Position</th>
                  <th>Accept/Decline</th>
                </tr>
                <tr><td>f</td><td>f</td><td>f</td><td></td></tr>
                <tr><td>f</td><td>f</td><td>f</td><td>f</td></tr>
              </table>
              <table>
                <tr><th colSpan="3">Upcoming events</th></tr>
                <tr>
                  <th>Facility</th>
                  <th>Date</th>
                  <th>Title</th>
                </tr>
                <tr><td>hy</td><td>hi</td><td>hoi</td></tr>
                <tr><td>hy</td><td>hi</td><td>hoi</td></tr>
              </table>
            </div>
          </>
        );
      };

export default Dashboard;
