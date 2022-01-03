import './App.css';
import { useState } from 'react';
function App() {
  const [inp,setInp]=useState('');
  const [out,setOut]=useState('');
  const handler=(e)=>{
    setInp(e.target.value)
  }
  return (
    <div className="App">
      <div className='cal'>
        <div className='nu'>
          <input value={inp} name="inp" onChange={handler}></input>
          <input className='out' value={out}></input>
          </div>
          <div className='option'>
          <button className='cd' onClick={()=>setInp('')}>clear</button></div>
        <div className='num'>
          <button onClick={()=>setInp(inp+'1')}>1</button>
          <button onClick={()=>setInp(inp+'2')}>2</button>
          <button onClick={()=>setInp(inp+'3')}>3</button>
          <br></br>
          <button onClick={()=>setInp(inp+'4')}>4</button>
          <button onClick={()=>setInp(inp+'5')}>5</button>
          <button onClick={()=>setInp(inp+'6')}>6</button>
          <br />
          <button onClick={()=>setInp(inp+'7')}>7</button>
          <button onClick={()=>setInp(inp+'8')}>8</button>
          <button onClick={()=>setInp(inp+'9')}>9</button>
          <br />
          <button onClick={()=>setInp(inp+'0')}>0</button>
          <button onClick={()=>setInp(inp+'.')}>.</button>
          <button className='op' onClick={()=>setOut(eval(inp))}><b>=</b></button>
        </div>
        <div className='oper'>
          <button className='op' onClick={()=>setInp(inp+'+')}><b>+</b></button><br/>
          <button className='op' onClick={()=>setInp(inp+'-')}><b>-</b></button><br/>
          <button className='op' onClick={()=>setInp(inp+'*')}>X</button><br/>
          <button className='op' onClick={()=>setInp(inp+'/')}><b>/</b></button><br/>
        </div>
      </div>
    </div>
  );
}

export default App;
