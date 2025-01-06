import Admin from "../AdminPanelComps/AdminPanel.module.css";

const AdminPanel = () => {
    return (
        <div className={Admin.AdminPanel}>
            <h3>Admin Panel</h3>
            <div className={Admin.Dash}>
                <div className={Admin.Search}>
                    <input type="text" placeholder="Search.." name="search" />
                </div>

                <div className={Admin.SelectNumber}>
                    <select className={Admin.SelectNO}>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="150">150</option>
                        <option value="200">200</option>
                    </select>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>JIHAD IBRAHIM NASSAR</td>
                        <td>jha0000000</td>
                        <td>student</td>
                        <td><button className={Admin.ActionButton}>role up</button> <button className={Admin.ActionButton}>role down</button></td>
                    </tr>
                </tbody>
            </table>

            <div className={Admin.pagination}>
                <a href="#">&laquo;</a>
                <a href="#" className={Admin.Active}>1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">&raquo;</a>
            </div>
        </div>
    );
};

export default AdminPanel;
