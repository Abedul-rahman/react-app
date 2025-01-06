import ListOfRooms from "../RoomManageComps/ListOfRooms";
import { useEffect, useState } from "react";
import Manage from "../RoomManageComps/RoomManagement.module.css"
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import ListOfColleges from "../RoomManageComps/ListOfColleges";
import ListOfFloors from "../RoomManageComps/ListOfFloors";

const RoomManage = () => {
    const [isPending, setIsPending] = useState(false);
    const [selectedRoom,setSelectedRoom]= useState("");
    const [selectedFloor,setSelectedFloor]=useState("");
    const [selectedCol, setSelectedCol] = useState("");
    const [listOfColleges, setListOfColleges] = useState([]);
    const [listOfRooms, setListOfRooms] = useState([]);
    const [listOfFloors, setListOfFloors] = useState([]);
    const [roomName, setRoomName] = useState("");
    const [floorName, setFloorName] = useState("");
    const [collegeName, setCollegeName] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [type, setType] = useState("college");
    const [func, setFunc] = useState("add");

    // New state hooks for missing fields
    const [numberOfRooms, setNumberOfRooms] = useState("");
    const [floorNumber, setFloorNumber] = useState("");
    const [numberOfSeats, setNumberOfSeats] = useState("");
    const [roomType, setRoomType] = useState("LAB");

    const axiosPrivate = useAxiosPrivate();
    useEffect(()=>{
        const  getRooms=async()=>{
            try{
                if(!selectedFloor){setListOfRooms([]);return;};
                const response= await axiosPrivate.get(`/RoomManagement/getRooms`)
                setListOfRooms(response.data);
              


            }catch(err){
                setError(err.message);
                setTimeout(() => {
                    setError("");
                }, 1000);
                
            }
        }
        getRooms();
    },[axiosPrivate,selectedFloor,success,listOfFloors])
    useEffect(()=>{
       const  getFloors=async()=>{
            try{
                if(!selectedCol){setListOfFloors([]);return;};
                const response= await axiosPrivate.get(`/RoomManagement/getAllFloor?collegeId=${selectedCol}`)
                setListOfFloors(response.data);
              


            }catch(err){
                setError(err.message);
                setTimeout(() => {
                    setError("");
                }, 1000);
                
            }
        }
        getFloors();
    },[axiosPrivate,selectedCol,success,listOfColleges])
    useEffect(() => {
        const getColleges = async () => {
            try {
                
                const response = await axiosPrivate.get("/RoomManagement/getColleges");
                setListOfColleges(response.data);
            } catch (err) {
                setError(err.message);
            }
        };
        getColleges();
    }, [axiosPrivate, success]);

    /*--------------------------------------------------------------functions----------------------------------------------------------------------------------- */
    const addCollege = async (e) => {
        e.preventDefault();
        setIsPending(true);
        try {
            await axiosPrivate.post('/RoomManagement/createCollege', {
                "collegeName": collegeName
            });
            setSuccess("New college added");
            setTimeout(() => {
                setSuccess("");
            }, 3000);
        } catch (err) {
           
            setError(err);
        } finally {
            setCollegeName("");
            setIsPending(false);
        }
    };

    const removeCollege = async (e) => {
        e.preventDefault();
        try {
            if(!selectedCol)throw new Error("select a college first")
            await axiosPrivate.delete(`RoomManagement/removeCollege?id=${selectedCol}`);
            setSuccess("College removed");
            setSelectedCol("");
            setTimeout(() => {
                setSuccess("");
            }, 1000);
        } catch (err) {
            setError(err);
            
            setTimeout(() => {
                setError("");
            }, 1000);
        }finally{
            setIsPending(false);
        }
    };
const addFloor= async(e)=>{
    e.preventDefault();
    try {
        if(!selectedCol)throw new Error("select a college first");
        await axiosPrivate.post('RoomManagement/createFloor',{
            "floorNumber": floorNumber,
            "floorName": floorName,
            "collegeId": selectedCol,
            "numberOfRooms": numberOfRooms
        });
        setSuccess("Floor added");
        setFloorName("")
        setFloorNumber(0);
        setNumberOfRooms(0);
        setTimeout(() => {
        setSuccess("");
        }, 1000);
        setIsPending(false);
    } catch (err) {
        setError(err);
        setIsPending(false);
        setTimeout(() => {
            setError("");
        }, 1000);
    }
};
const removeFloor = async (e) => {
    e.preventDefault();
    try {
        if(!selectedCol||!selectedFloor)throw new Error("select a college/floor first")
        await axiosPrivate.delete(`RoomManagement/removeFloor?id=${selectedFloor}`);
        setSuccess("Floor removed");
        setSelectedCol("");
        setSelectedFloor("");
        setTimeout(() => {
            setSuccess("");
        }, 1000);
    } catch (err) {
        setError(err);
        
        setTimeout(() => {
            setError("");
        }, 1000);
    }finally{
        setIsPending(false);
    }
};
const addRoom= async(e)=>{
    e.preventDefault();
    try {
        if(!selectedCol||!selectedFloor)throw new Error("select a college/floor first");
        await axiosPrivate.post('RoomManagement/createRoom',{
                "floorId": selectedFloor,
                "roomName": roomName,
                "floorNumber": 1,
                "numberOfSeats": numberOfSeats,
                "roomType" : roomType
           
        });
        setSuccess("Room added");
        setRoomName("")
        setNumberOfSeats("");
        setRoomType("LAB");
        setTimeout(() => {
        setSuccess("");
        }, 1000);
        setIsPending(false);
    } catch (err) {
        console.error(err);
        setIsPending(false);
        setTimeout(() => {
            setError("");
        }, 1000);
    }
};
const removeRoom = async (e) => {
    e.preventDefault();
    try {
        if(!selectedCol||!selectedFloor||!selectedRoom)throw new Error("select a college/floor first")
        await axiosPrivate.delete(`RoomManagement/removeRoom?id=${selectedRoom}`);
        setSuccess("Floor removed");
        setSelectedCol("");
        setSelectedFloor("");
        setTimeout(() => {
            setSuccess("");
        }, 1000);
    } catch (err) {
        setError(err);
        
        setTimeout(() => {
            setError("");
        }, 1000);
    }finally{
        setIsPending(false);
    }
};

    /* ----------------------------------------------------------------Html--------------------------------------------------------------------------------/*/
    return (
        <>
            <section className={Manage.box}>
                <h1>System Management</h1>

                <div className={Manage.btns}>
                    <button className={type === "college" ? Manage.active : ""} onClick={() => setType("college")}>Colleges </button>
                    <button className={type === "floor" ? Manage.active : ""} onClick={() => setType("floor")}>Floors </button>
                    <button className={type === "room" ? Manage.active : ""} onClick={() => setType("room")}>Rooms </button>
                </div>
                <br />
                <span className={error ? "error" : "hide"}>{error}</span>
                <span className={success ? "success" : "hide"} style={{ color: "green", fontSize: "2rem", animation: "0.5s" }}>{success}</span>
            </section>

            <form className={Manage.form}>
                <fieldset style={{ border: "5px solid", padding: 0 }}>

                    <legend className={Manage.btns2}>
                        <button className={func === "delete" ? Manage.active : ""} onClick={(e) => { e.preventDefault(); setFunc("delete") }}>Delete</button>
                        <button className={func === "add" ? Manage.active : ""} onClick={(e) => { e.preventDefault(); setFunc("add") }}>Add</button>
                        <button className={func === "edit" ? Manage.active : ""} onClick={(e) => { e.preventDefault(); setFunc("edit") }}>Edit</button>
                    </legend>

                    <div className={`${Manage.box2} ${Manage.Add}`}>
                        {/* Headers */}
                        {type === "college" && func === "add" && <h3>Add a new College</h3>}
                        {type === "college" && func === "delete" && <h3>Remove a College</h3>}
                        {type === "college" && func === "edit" && <h3>Edit College's data</h3>}
                        {type === "floor" && func === "add" && <h3>Add a new Floor</h3>}
                        {type === "floor" && func === "delete" && <h3>Remove a Floor</h3>}
                        {type === "floor" && func === "edit" && <h3>Edit Floor's data</h3>}
                        {type === "room" && func === "add" && <h3>Add a new Room</h3>}
                        {type === "room" && func === "edit" && <h3>Edit Room's info</h3>}
                        {type === "room" && func === "delete" && <h3>Remove a Room</h3>}

                        {/* Selectors */}
                        {!(type === "college" && func === "add") && <label htmlFor="colleges">Select a college </label>}
                        {!(type === "college" && func === "add") && <select id="colleges" defaultValue={""} onChange={e => setSelectedCol(e.target.value)}><option value={""}  >-----</option><ListOfColleges data={listOfColleges} /></select>}
                        {!(type === "college" || (type === "floor" && func === "add")) && <label htmlFor="floors">Select a floor</label>}
                        {!(type === "college" || (type === "floor" && func === "add")) && <select defaultValue={""} id="floors" onChange={e=>setSelectedFloor(e.target.value)}><option value={""}  >-----</option><ListOfFloors data={listOfFloors} /></select>}
                        {!(type === "college" || type === "floor" || (type === "room" && func === "add")) && <label htmlFor="rooms">Select a room</label>}
                        {!(type === "college" || type === "floor" || (type === "room" && func === "add")) && <select defaultValue={""} id="rooms" onChange={e=>setSelectedRoom(e.target.value)}><option value={""}  >-----</option><ListOfRooms data={listOfRooms} /></select>}

                        {/* Required Data */}
                        {type === "college" && (func === "add" || func === "edit") && <label htmlFor="collegeName">College name</label>}
                        {type === "college" && (func === "add" || func === "edit") && <input type="text" id="collegeName" value={collegeName} onChange={(e) => setCollegeName(e.target.value)} />}

                        {type === "floor" && (func === "add" || func === "edit") && <section>
                            <div>
                                <label htmlFor="numberOfRooms">Number of Rooms:</label>
                                <input type="number" id="numberOfRooms" min={0}  value={numberOfRooms} onChange={(e) => setNumberOfRooms(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="floorName">Floor's name:</label>
                                <input type="text" value={floorName} onChange={(e) => setFloorName(e.target.value)} id="floorName" />
                            </div>
                            <div>
                                <label htmlFor="floorNumber">Floor number:</label>
                                <input type="number" id="floorNumber" value={floorNumber} min={0}  onChange={(e) => setFloorNumber(e.target.value)} />
                            </div>
                        </section>}

                        {type === "room" && (func === "add" || func === "edit") && <section>
                            <div>
                                <label htmlFor="numberOfSeats">Number of seats:</label>
                                <input type="number" id="numberOfSeats" value={numberOfSeats} min={0} onChange={(e) => setNumberOfSeats(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="roomName">Room's name:</label>
                                <input type="text" value={roomName} onChange={(e) => setRoomName(e.target.value)} id="roomName" />
                            </div>
                            <div>
                                <label htmlFor="roomType">Type of the room</label>  
                                <select id="roomType" value={roomType} onChange={(e) => setRoomType(e.target.value)}>
                                    <option value={"LAB"}>Lab</option>
                                    <option value={"CLASSROOM"}>classroom</option>
                                </select>
                            </div>
                        </section>}

                        {/* Buttons */}
                        {type === "college" && func === "add" && <button className={Manage.submit} disabled={!collegeName} onClick={addCollege}>{isPending ? "loading..." : "Add"}</button>}
                        {type === "floor" && func === "add" && <button className={Manage.submit} disabled={!selectedCol||!floorName} onClick={addFloor}>{isPending ? "loading..." : "Add"}</button>}
                        {type === "room" && func === "add" && <button className={Manage.submit} disabled={!selectedCol||!selectedFloor||!roomName} onClick={addRoom}>{isPending ? "loading..." : "Add"}</button>}
                        {type === "college" && func === "edit" && <button className={Manage.submit}>{isPending ? "loading..." : "Edit"}</button>}
                        {type === "floor" && func === "edit" && <button className={Manage.submit}>{isPending ? "loading..." : "Edit"}</button>}
                        {type === "room" && func === "edit" && <button className={Manage.submit}>{isPending ? "loading..." : "Edit"}</button>}
                        {type === "college" && func === "delete" && <button className={Manage.submit} disabled={!selectedCol} onClick={removeCollege}>{isPending ? "loading..." : "Delete"}</button>}
                        {type === "floor" && func === "delete" && <button className={Manage.submit} disabled={!selectedCol||!selectedFloor} onClick={removeFloor}>{isPending ? "loading..." : "Delete"}</button>}
                        {type === "room" && func === "delete" && <button className={Manage.submit} disabled={!selectedCol||!selectedFloor||!selectedRoom} onClick={removeRoom}>{isPending ? "loading..." : "Delete"}</button>}
                    </div>
                </fieldset>
            </form>
        </>
    );
};

export default RoomManage;
