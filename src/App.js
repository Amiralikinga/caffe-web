import { useStore } from "./store";
import Test from "./test";

function App() {

    const Display = ()=>{
        const result = useStore((state)=>state.count);
        return <h1>{result}</h1>
    }

    const Increase = ()=>{
        const add = useStore((state)=>state.increase);
        return <button onClick={add}>Increase</button>
    }

    const Decrease = ()=>{
        const reduse = useStore((state)=>state.decrease);
        return <button onClick={reduse}>Decrease</button>
    }

    return ( 
        <>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <Display/>
            </div>  
            <div style={{display:'flex', gap:'10px', justifyContent:'center', alignItems:'center'}}>
                <Increase/>
                <Decrease/>
            </div>
                <Test/>
        </>
    );
}

export default App;