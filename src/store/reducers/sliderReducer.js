import { SET_SCROLL, SET_DIRECTION, SET_ACTIVE_IMAGE, SET_NEXT_IMAGE, SET_FULL_iMAGES } from "../actions/actionTypes"

const initialState = {
    timeout: 500,
    nextImage: null,
    activeImage: 0,
    scrollItem: null,
    direction: true,
    images : [
        require("../../assets/full-images/boat-night-sky-nature.jpeg"),
        require("../../assets/full-images/cat-sleepy-lying-down-cute.jpeg"),
        require("../../assets/full-images/chicago-night-skyscrapers-metropolis.jpeg"),
        require("../../assets/full-images/dolomite-avstriya-gory.jpg"),
        require("../../assets/full-images/forest-old-trees-worm-view-sequoia-national-park.jpeg"),
        require("../../assets/full-images/gonkong-kitay-gorod-xldz.jpg"),
        require("../../assets/full-images/gora-kamni-voda.jpg"),
        require("../../assets/full-images/kotyonok-zhivotnoe-koshka.jpg"),
        require("../../assets/full-images/lime-alps-austria.jpg"),
        require("../../assets/full-images/pangolin-walking-sand.jpeg"),
        require("../../assets/full-images/park-ruchey-bystryy-kamni.jpg"),
        require("../../assets/full-images/pomeranian-fluffy-cute-dogs.jpeg"),
        require("../../assets/full-images/volki-voy-luna.jpg"),
        require("../../assets/full-images/white-bird-flying-sea-hunting.jpeg"),
        require("../../assets/full-images/yastreb-suslik-ohotnik.jpg"),
        require("../../assets/full-images/zakat-holmy-derevya.jpg"),
    ]
}

const handlers = {
    [SET_FULL_iMAGES]: (state, action) => ({...state, images: action.payload}),
    [SET_NEXT_IMAGE]: (state, action) => ({...state, nextImage: action.payload}),
    [SET_ACTIVE_IMAGE]: (state, action) => ({...state, activeImage: action.payload}),
    [SET_SCROLL]: (state, action) => ({...state, scrollItem: action.payload}),
    [SET_DIRECTION]: (state, action) => ({...state, direction: action.payload}),
    DEFAULT: state => state
}
export function sliderReducer(state = initialState, action){
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}