const ListOfRooms= ({data}) => {
    return (  
        <>
        
        {data?.map((room)=><option key={room?.id} value={room.id}>{room?.roomName}</option> )}
        </>
    );
}
 
export default ListOfRooms;
