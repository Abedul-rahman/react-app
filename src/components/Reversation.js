import styles from "../ReservationsComps/Reservations.module.css";
import { Link } from "react-router-dom";

const Reservation = () => {
  return (
    <>
      <div className={styles.grid}>
        <form className={styles.form} name="RESERVATION">
          <h2 className={styles.formTitle}>Make a Reservation</h2>
          <div>
            <label>
              Faculty
              <select className={styles.select} id="faculty">
                <option value="" selected disabled>
                  ----
                </option>
                <option value="KASIT">KASIT</option>
              </select>
            </label>
            <label>
              Floor
              <select id="floor" className={styles.select}>
                <option value="" selected disabled>
                  ----
                </option>
                <option value="gf">CS</option>
              </select>
            </label>
          </div>
        </form>
        <div className={styles.hallBox}>
          <Link to="/reserve/101" className={styles.hall}>
            <img
              src={`${process.env.PUBLIC_URL}/images/juemptyclass.jpg`}
              height="150"
              width="200"
              alt="Hall 101"
            />
            <h3>Hall: 101</h3>
            <p>Seats: 80</p>
          </Link>
          <Link to="/reserve/102" className={styles.hall}>
            <img
              src={`${process.env.PUBLIC_URL}/images/juemptyclass.jpg`}
              height="150"
              width="200"
              alt="Hall 102"
            />
            <h3>Hall: 102</h3>
            <p>Seats: 80</p>
          </Link>
          <Link to="/reserve/103" className={styles.hall}>
            <img
              src={`${process.env.PUBLIC_URL}/images/juemptyclass.jpg`}
              height="150"
              width="200"
              alt="Hall 103"
            />
            <h3>Hall: 103</h3>
            <p>Seats: 80</p>
          </Link>
          <Link to="/reserve/104" className={styles.hall}>
            <img
              src={`${process.env.PUBLIC_URL}/images/juemptyclass.jpg`}
              height="150"
              width="200"
              alt="Hall 104"
            />
            <h3>Hall: 104</h3>
            <p>Seats: 80</p>
          </Link>
          <Link to="/reserve/105" className={styles.hall}>
            <img
              src={`${process.env.PUBLIC_URL}/images/juemptyclass.jpg`}
              height="150"
              width="200"
              alt="Hall 105"
            />
            <h3>Hall: 105</h3>
            <p>Seats: 80</p>
          </Link>
          <Link to="/reserve/106" className={styles.hall}>
            <img
              src={`${process.env.PUBLIC_URL}/images/juemptyclass.jpg`}
              height="150"
              width="200"
              alt="Hall 106"
            />
            <h3>Hall: 106</h3>
            <p>Seats: 80</p>
          </Link>
          <Link to="/reserve/107" className={styles.hall}>
            <img
              src={`${process.env.PUBLIC_URL}/images/juemptyclass.jpg`}
              height="150"
              width="200"
              alt="Hall 107"
            />
            <h3>Hall: 107</h3>
            <p>Seats: 80</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Reservation;