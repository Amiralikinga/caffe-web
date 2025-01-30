import { useStore } from "./store";
import { FaPlus, FaMinus } from "react-icons/fa";

const Test = ()=> {
    const {count, increase, decrease} = useStore();
    return (
        <div className="container-fluid" style={{height:'100vh'}}>
            <div className="row justify-content-center align-items-center h-25">
                <h1 className="d-flex justify-content-center mt-5">{count ? count : 0}</h1>
                <div className="btn-group w-25">
                    <button className="btn btn-success" onClick={increase}><FaPlus style={{fontSize:'15px', color:'black'}}/> Increase</button>
                    <button className="btn btn-danger" onClick={decrease}><FaMinus style={{fontSize:'15px', color:'black'}}/> Decrease</button>
                </div>
            </div>
        </div>
    )
}
export default Test;