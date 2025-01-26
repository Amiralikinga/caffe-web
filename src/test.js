import { useStore } from "./store";

const Test = ()=> {
    const {increase, decrease} = useStore();
    // const increase = useStore((state)=>state.increase);
    // const decrease = useStore((state)=>state.decrease);
    return ( 
        <>
            <div style={{display:'flex', gap:'10px', justifyContent:'center', alignItems:'center', marginTop:'20px'}}>
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
            </div>
        </>
    );
}

export default Test;