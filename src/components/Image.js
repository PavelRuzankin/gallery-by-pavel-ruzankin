import React from "react"
import {scroll} from "../plugins/scroll"
import { Transition } from "react-transition-group"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { connect } from "react-redux"
import { toggleDeleteMode } from "../store/actions/imageListAction"
import { deleteImage } from "../store/actions/galleryAction"

const Image = (props) => {
    const biStyle = {backgroundImage: `url("${props.src}")`}
    let timeCounter = 0
    let timeout

    const mouseDownHandler = () => {
        timeout = setInterval(() => {
            if(timeCounter === 200){
                props.toggleDeleteMode(props.id, true)
                clearInterval(timeout)
            }
            timeCounter++
        }, 1)
    }

    const mouseUpHandler = (e) => {
        if(e.target.tagName !== "DIV")return
        if(timeCounter  <= 200){
            scroll(200)
            props.openImage(props.id)
            clearInterval(timeout)
        }
        clearInterval(timeout)
        timeCounter = 0
    }

    return (
        <Transition in={props.deleteMode} timeout={200}>
            {state => (
                <div onMouseDown={!props.deleteMode ? mouseDownHandler : null}
                onMouseUp={!props.deleteMode ? mouseUpHandler : null}
                style={biStyle} className={`Image ibg ${state}`}>
                    <button onMouseUp={() =>props.deleteImage(props.id)} className={`Image__times ${state}`}>
                        <FontAwesomeIcon size={"2x"} icon={"times-circle"}/>
                    </button>
                </div>
            )}
        </Transition>
    )
}

function mapDispatchToProps(dispatch){
    return{
        toggleDeleteMode: (id, boolean) => dispatch(toggleDeleteMode(id, boolean)),
        deleteImage: (id) => dispatch(deleteImage(id))
    }
}



export default connect(null, mapDispatchToProps)(Image)