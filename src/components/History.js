import history from "../HistoryComps/History.module.css"
const History = () => {
    return ( 
        <>
        <div className={history.History}>
                <h3>Recent Reservations</h3>                      
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Room ID</th>
                        <th>Status</th>
                        <th>Time</th>
                        <th>Starting Date</th>
                        <th>Ending Date</th>
                    </tr>
                    <tr>
                        <td>Softwhere</td>
                        <td>104</td>
                        <td>Accepted</td>
                        <td>08:30-09:30</td>
                        <td>03/02/2025</td>
                        <td>06/29/2025</td>
                    </tr>
                    <tr>
                        <td>Problem solving training</td>
                        <td>304</td>
                        <td>Denied</td>
                        <td>10:30-11:30</td>
                        <td>02/01/2025</td>
                        <td>02/29/2025</td>
                    </tr>
                </table>
            </div>
        </>
     );
}
 
export default History;