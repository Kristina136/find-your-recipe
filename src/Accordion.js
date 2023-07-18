import { useState } from "react";

function Accordion (){

    const [isOpen, setIsOpen] = useState(false)
    const handleIsOpen=()=>{
        setIsOpen(!isOpen)
      }

    return(<div onClick={handleIsOpen} className={isOpen ? "activ" : "default"}>
           title 
      </div>
          )
      }
      export default Accordion;