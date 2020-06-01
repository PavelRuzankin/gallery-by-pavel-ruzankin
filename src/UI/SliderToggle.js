import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Transition } from "react-transition-group";


export default ({direction, state, onClick}) => {
    const [toggle, setToggle] = useState(false)

    return (
      <div className={`Slider__toggle ${direction} ${state}`} onClick={() => {
        setToggle(!toggle)
        onClick()
        }}>
           <Transition in={toggle} timeout={300} >
                {state => <FontAwesomeIcon className={`icon ${state}`} icon={`chevron-${direction}`} color={"#cccc"} />}
            </Transition>
      </div>
    )
}