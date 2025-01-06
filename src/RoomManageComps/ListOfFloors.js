const ListOfFloors = ({data}) => {
    return (  
        <>
        
        {data.map((floor)=><option key={floor.floorId} value={floor.floorId}>{floor.floorName}</option> )}
        </>
    );
}
 
export default ListOfFloors;
