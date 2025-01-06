const ListOfColleges= ({ data }) => {
    return (
        <>
       
        {
            data.map(dt=>
                <option value={dt.id} key={dt.id}>{dt.collegeName}</option>
                )
        }
        </>  
        
    );
}
 
export default ListOfColleges;