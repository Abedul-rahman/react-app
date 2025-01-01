import homestyle from './Homepage.module.css';  // Import CSS module

const Services = () => {
    return (
        <section aria-labelledby="serv" className={homestyle.about}> {/* Use scoped class */}
            <h1 id="serv">JU Halls Services</h1>
            <p>Welcome to JU Halls, your dedicated platform for scheduling and reserving university halls.</p>
            <div className={homestyle.p1}> {/* Use scoped class */}
                <div className={homestyle.q1}> {/* Use scoped class */}
                    <h3>Real-Time Hall Availability</h3>
                    <p>You can view up-to-date schedules for all university halls, ensuring transparency and efficiency in bookings.</p>
                </div>
                <div className={homestyle.q1}> {/* Use scoped class */}
                    <h3>Customized Hall Preferences</h3>
                    <p>You can filter halls based on capacity, equipment (e.g., projectors, audio systems), and location.</p>
                </div>
                <div className={homestyle.q1}> {/* Use scoped class */}
                    <h3>Booking History and Management</h3>
                    <p>You can view and manage past and upcoming bookings, including modifications or cancellations.</p>
                </div>
            </div>
        </section>
    );
}

export default Services;
