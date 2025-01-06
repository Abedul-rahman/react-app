import requests from "../RequestsComps/RequestsComps.module.css"

const Requests = () => {
    return (
        <div className={requests.acceptRequest}>
            <h3>List Of Requests</h3>
            <table className={requests.table}>
                <tr>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Role</th>
                    <th>Floor Number</th>
                    <th>Hall Number</th>
                    <th>Title</th>
                    <th>Atendance</th>
                    <th>Starting date</th>
                    <th>Ending date</th>
                    <th>Time</th>
                    <th>Accept/Deny</th>
                    <th>details</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>JIHAD IBRAHIM NASSAR</td>
                    <td>Professor</td>
                    <td>1</td>
                    <td>101</td>
                    <td>Graph Theory</td>
                    <td>Sun,Tue,Thu</td>
                    <td>08/02/2025</td>
                    <td>08/06/2025</td>
                    <td>08:30-09:30</td>
                    <td>
                        <button className={requests.Accept}>Accept</button>
                        <button className={requests.Deny}>Deny</button>
                    </td>
                    <td>
                        <details>
                            <summary>
                                <span className={requests.arrow}>▼</span>
                            </summary>
                            <div className={requests.details}>
                                <p>this class is about graph </p>
                            </div>
                        </details>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default Requests;