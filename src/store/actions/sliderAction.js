import { SET_SCROLL, SET_DIRECTION } from "./actionTypes";
import { setActiveImage } from "./galleryAction";

export function setScroll(item) {
    return {type: SET_SCROLL, payload: item}
}

export function setDirection(boolean){
    return {type: SET_DIRECTION, payload: boolean}
}

export function setScrollDirection(item){
    return (dispatch, getState) => {
        const itemBeforeScroll = getState().slider.scrollItem
        dispatch(setScroll(item))
        const itemAfterScroll = getState().slider.scrollItem

        const direction = itemAfterScroll <= 350 && itemAfterScroll >= 180 ? false : itemBeforeScroll > itemAfterScroll

        dispatch(setDirection(direction))
    }
}

export function switchImageForward(){
    return (dispatch, getState) => {
        const {activeImage, images} = getState().slider

        if(activeImage + 1 === images.length){
            dispatch(setActiveImage(0))
        }else{
            dispatch(setActiveImage(activeImage + 1))
        }
    }
}

export function switchImageBack(){
    return (dispatch, getState) => {
        const {activeImage, images} = getState().slider

        if(activeImage === 0){
            dispatch(setActiveImage(images.length - 1))
        }else{
            dispatch(setActiveImage(activeImage - 1))
        }
    }
}