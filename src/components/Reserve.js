import reserve from "../ReserveComps/Reserve.module.css"
const Reserve = () => {
    return ( 
        <>
        <form className={reserve.form}>
            <h2 >MAKE A RESERVATION</h2>
            <label>Type Of The Resevation:<br/>
                <select  id="Attendance">
                    <option value="" selected disabled>----</option>
                    <option value="">weekly</option>
                    <option value="">once</option>
                </select>
            </label>
            <label>Choose Date:</label>
            <div>
            <label htmlFor="startingdate">Starting date: </label>
            <input type="date" id="startingdate" name="date"/>
            <label htmlFor="endingdate">Ending date:</label>
            <input type="date" id="endingdate" name="date"/>
            </div>
            <label>Title</label>
            <textarea id="Describe" name="Describe" cols="30" rows="2"></textarea><br/>
            <label>Discription</label>
            <textarea id="Describe" name="Describe" cols="60" rows="10"></textarea>
        </form>
        
        <div className={reserve.HallAttendance}>
            <div className={reserve.Attendance1}>
                <h3>Sunday, Tuesday, Thursday Records</h3>
                <table>
                    <tr>
                        <th>Time</th>
                        <th>Sunday</th>
                        <th>Tuesday</th>
                        <th>Thursday</th>
                    </tr>
                    <tr>
                        <td>08:30-09:30</td>
                        <td><button>+</button></td>
                        <td><button>+</button></td>
                        <td><button>+</button></td>
                    </tr>
                    <tr>
                        <td>09:30-10:30</td>
                        <td><button className={reserve.red}>x</button></td>
                        <td><button>+</button></td>
                        <td><button>+</button></td>
                    </tr>
                    <tr>
                        <td>10:30-11:30</td>
                        <td><button>+</button></td>
                        <td><button>+</button></td>
                        <td><button className={reserve.red}>x</button></td>
                    </tr>
                    <tr>
                        <td>11:30-12:30</td>
                        <td><button>+</button></td>
                        <td><button>+</button></td>
                        <td><button>+</button></td>
                    </tr>
                    <tr>
                        <td>12:30-13:30</td>
                        <td><button className={reserve.red}>x</button></td>
                        <td><button>+</button></td>
                        <td><button>+</button></td>
                    </tr>
                    <tr>
                        <td>13:30-14:30</td>
                        <td><button>+</button></td>
                        <td><button>+</button></td>
                        <td><button>+</button></td>
                    </tr>
                    <tr>
                        <td>14:30-15:30</td>
                        <td><button className={reserve.red}>x</button></td>
                        <td><button className={reserve.red}>x</button></td>
                        <td><button className={reserve.red}>x</button></td>
                    </tr>
                    <tr>
                        <td>15:30-16:30</td>
                        <td><button className={reserve.red}>x</button></td>
                        <td><button className={reserve.red}>x</button></td>
                        <td><button className={reserve.red}>x</button></td>
                    </tr>
                </table>
            </div>
            <div className={reserve.Attendance1}>
                <h3>Monday,Wednesday Records</h3>
                <table>
                    <tr>
                        <th>Time</th>
                        <th>Monday</th>
                        <th>Wednesday</th>
                    </tr>
                    <tr>
                        <td>08:30-10:00</td> 
                        <td><button className={reserve.red}>x</button></td>
                        <td><button>+</button></td>
                    </tr>
                    <tr>
                        <td>10:00-11:30</td> 
                        <td><button>+</button></td>
                        <td><button>+</button></td>
                    </tr>
                    <tr>
                        <td>11:30-13:00</td> 
                        <td><button>+</button></td>
                        <td><button>+</button></td>
                    </tr>
                    <tr>
                        <td>13:00-14:30</td> 
                        <td><button>+</button></td>
                        <td><button>+</button></td>
                    </tr>
                    <tr>
                        <td>14:30-16:00</td>
                        <td><button>+</button></td>
                        <td><button>+</button></td> 
                    </tr>
                </table>
            </div>
        </div>
        <div className={reserve.submit}>
            <input type="submit" value="Confirm Reservations"/>
        </div>
        </>
    );
}
 
export default Reserve;