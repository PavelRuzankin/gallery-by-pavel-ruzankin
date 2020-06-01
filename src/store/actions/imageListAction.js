import { setActiveImage } from "./galleryAction"
import { SET_NEXT_IMAGE, TOGGLE_DELETE_MODE } from "./actionTypes"

export function changeSliderImage(id){
    return (dispatch, getState) => {
        const timeout = getState().slider.timeout
        dispatch({type: SET_NEXT_IMAGE, payload: getState().slider.images[id]})
        dispatch(setActiveImage(id))
        setTimeout(() => dispatch({type: SET_NEXT_IMAGE, payload: null}),timeout)
    }
}

export function toggleDeleteMode(id,boolean){
    return (dispatch, getState) => {
        const images = getState().imageList.images.concat()
        const image = {...images[id], deleteMode: boolean}
        images[id] = image
        dispatch({type: TOGGLE_DELETE_MODE, payload: images})
    }
}