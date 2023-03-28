import "./Calculator.css"
import React,{useState} from 'react'
import Button from "../Button/Button"
import main from "../Main/Main"
let decimal=require("decimal.js")
const Calculator = () => {
// let x=new Decimal()
const [value,setValue]=useState("0")
const [left,setLeft]=useState(null)
const [operator,setOperator]=useState(null)

 const handleClick = content=>()=>{

  


  const num=parseFloat(value)

  if(content==="AC"){
    setValue("0")
    setLeft(null)
    setOperator(null)
  return;
  }

  if(content==="+/-"){
    setValue((num * -1).toString())
    return;
  }
 
  if(content==="%"){
    setValue((num / 100).toString())
    setLeft(null)
    setOperator(null)
    return;
  }

  if(content==="."){
    if(value.includes(".")) return;

    setValue(value + ".");
    return;
  }

  // let x=0.1//first value
// let y=0.2//second value

// let a = decimal.add(x, y)
// let value = new decimal(x).plus(y)
// console.log(value) 

  if(content=== "+"){
     if(operator!==null){
      if(operator==="+"){
        
        setLeft(left + parseFloat(value));
        
      }else if(operator==="-"){
        setLeft(left - parseFloat(value))
      }else if(operator === "X"){
        setLeft(left * parseFloat(value))
      }else if(operator === "÷"){
        setLeft(left / parseFloat(value))
      }
     }else{
      setLeft(parseFloat(value))
     }
  setValue("0")
  setOperator("+")
  return;
  }
  console.log(left,value)
  console.log(left)
  if(content==="-"){
    if(operator!==null){
      if(operator==="+"){
        setLeft(left+parseFloat(value));
      }else if(operator === "-"){
        setLeft(left - parseFloat(value))
      }else if(operator==="X"){
        setLeft(left * parseFloat(value))
      }else if(operator === "+"){
        setLeft(left / parseFloat(value))
      }
    }else{
      setLeft(parseFloat(value))
    }
    setValue("0")
    setOperator("-")
     return;
  }

  if(content==="X"){
    if(operator!==null){
      if(operator==="+"){
        setLeft(left + parseFloat(value))
      }else if(operator === '-'){
        setLeft(left - parseFloat(value))
      }else if(operator === "X"){
        setLeft(left * parseFloat(value))
      }else if(operator === "+"){
        setLeft(left / parseFloat(value))
      }
    }else{
      setLeft(parseFloat(value))
    }
    setValue("0")
    setOperator("X")
    return 
  }
  if(content==="÷"){
    if(operator!==null){
      if(operator==="+"){
        setLeft(left + parseFloat(value))
      }else if(operator === '-'){
        setLeft(left - parseFloat(value))
      }else if(operator === "X"){
        setLeft(left * parseFloat(value))
      }else if(operator === "+"){
        setLeft(left / parseFloat(value))
      }
    }else{
      setLeft(parseFloat(value))
    }
    setValue("0")
    setOperator("÷")
    return 
  }

   if(content=== "="){
     if(!operator) return;

     if(operator==="+"){
      decimal.add(left,value)
      setValue(new decimal(left).plus(parseFloat(value)).toString());
     }else if(operator=== "-"){
      decimal.sub(left,value)
      setValue(new decimal(left).sub(parseFloat(value)).toString())
     }else if(operator=== "X"){
      decimal.mul(left,value)
      setValue(new decimal(left).mul(parseFloat(value)).toString())
     }else if(operator=== "÷"){
      decimal.div(left,value)
        setValue(new decimal(left).div(parseFloat(value)).toString())
     }
     setLeft(null)
     setOperator(null)
     return;
   }
   if(value[value.length-1]==="."){
    setValue(value+content)
   }else{
    setValue(parseFloat(num + content).toString())
   }

   console.log(value)
  

 }


  return (
    <div className="Calculator-container">
         <div className="display">
               <h1 className="display-item">{main(value)}</h1>
         </div>
               <div className="keypads">
                   <Button 
                    onButtonClick={handleClick} 
                     type="function"
                     content="AC"                  
                     />
                   <Button onButtonClick={handleClick}  content="+/-" type="function"/>
                   <Button onButtonClick={handleClick}  content="%" type="function"/>
                   <Button  onButtonClick={handleClick} content="÷" type="operator"/>
                   <Button onButtonClick={handleClick}  content="7"/>
                   <Button onButtonClick={handleClick}  content="8"/>
                   <Button onButtonClick={handleClick}  content="9"/>
                   <Button onButtonClick={handleClick} content="X" type="operator"/>
                   <Button onButtonClick={handleClick} content="4"/>
                   <Button onButtonClick={handleClick} content="5"/>
                   <Button onButtonClick={handleClick} content="6"/>
                   <Button onButtonClick={handleClick} content="-" type="operator"/>
                   <Button onButtonClick={handleClick} content="1"/>
                   <Button onButtonClick={handleClick} content="2"/>
                   <Button onButtonClick={handleClick} content="3"/>
                   <Button onButtonClick={handleClick} content="+" type="operator"/>
                   <Button onButtonClick={handleClick} content="0"/>
                   <Button onButtonClick={handleClick} content="."/>
                   <Button  onButtonClick={handleClick}content="=" type="operator"/>
               </div>
    </div>
  )
}

export default Calculator