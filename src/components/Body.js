import MainContainer from "../MainContainer";
import SideBar from "../SideBar";


const Body = ()=>{
    return(
        <div className="text-lg flex justify-between m-5">
            <SideBar/>
            <MainContainer/>
        </div>
    )
}
export default Body;
