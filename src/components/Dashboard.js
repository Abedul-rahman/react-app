import dash from "../DashboardComps/Dashbaord.module.css";
import useAuth from "../hooks/useAuth";
import X from "../Logo/bxs-x-square.svg";


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
               <thead>
                <tr><th colSpan="4">Latest Requests</th></tr>
               </thead>
               <tbody>
                <tr>
                  <th>College</th>
                  <th>Room</th>
                  <th>Title</th>
                  <th>Cancel</th>
                </tr>
                <tr><td>KASIT</td><td>103</td><td>Graph</td><td><img src={X} /></td></tr>
                <tr><td>Math</td><td>207</td><td>calc time</td><td><img src={X} /></td></tr>
               </tbody>
              </table>
              <table>
                <thead>
                <tr><th colSpan="3">Upcoming events</th></tr>
                </thead>
                <tbody>
                <tr>
                  <th>Place</th>
                  <th>Title</th>
                  <th>Time</th>
                </tr>
                <tr><td>KASIT : 103</td> <td>AI in the Medical Field</td> <td>10:30-11:30</td></tr>
                <tr><td>ART : 202</td><td>Theater show</td><td>9:30-12 </td></tr>
                </tbody>
              </table>
            </div>
          </>
        );
      };

export default Dashboard;
