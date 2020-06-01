import { SET_ACTIVE_IMAGE, SET_LOW_iMAGES, SET_FULL_iMAGES } from "./actionTypes";

export function setActiveImage(id){
    return {type: SET_ACTIVE_IMAGE, payload: id}
}

export function deleteImage(id){
    return (dispatch, getState) => {
        const lowImages = getState().imageList.images.concat()
        const fullImages = getState().slider.images.concat()

        dispatch({type: SET_LOW_iMAGES, payload: lowImages.filter((elem, i) => i !== id)})
        dispatch({type: SET_FULL_iMAGES, payload: fullImages.filter((elem, i) => i !== id)})


    }
}