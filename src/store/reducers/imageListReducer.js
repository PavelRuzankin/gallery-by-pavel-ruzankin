import { TOGGLE_DELETE_MODE, SET_LOW_iMAGES } from "../actions/actionTypes"

const initialState = {
    images : [
        {image: require("../../assets/low-images/boat-night-sky-nature.jpg"), id: 0, deleteMode: false},
        {image: require("../../assets/low-images/cat-sleepy-lying-down-cute.jpg"), id: 2, deleteMode: false},
        {image: require("../../assets/low-images/chicago-night-skyscrapers-metropolis.jpg"), id: 3, deleteMode: false},
        {image: require("../../assets/low-images/dolomite-avstriya-gory.jpg"), id: 4, deleteMode: false},
        {image: require("../../assets/low-images/forest-old-trees-worm-view-sequoia-national-park.jpg"), id: 5, deleteMode: false},
        {image: require("../../assets/low-images/gonkong-kitay-gorod-xldz.jpg"), id: 6, deleteMode: false},
        {image: require("../../assets/low-images/gora-kamni-voda.jpg"), id: 7, deleteMode: false},
        {image: require("../../assets/low-images/kotyonok-zhivotnoe-koshka.jpg"), id: 8, deleteMode: false},
        {image: require("../../assets/low-images/lime-alps-austria.jpg"), id: 9, deleteMode: false},
        {image: require("../../assets/low-images/pangolin-walking-sand.jpg"), id: 10, deleteMode: false},
        {image: require("../../assets/low-images/park-ruchey-bystryy-kamni.jpg"), id: 11, deleteMode: false},
        {image: require("../../assets/low-images/pomeranian-fluffy-cute-dogs.jpg"), id: 12, deleteMode: false},
        {image: require("../../assets/low-images/volki.jpg"), id: 13, deleteMode: false},
        {image: require("../../assets/low-images/white-bird-flying-sea-hunting.jpg"), id: 14, deleteMode: false},
        {image: require("../../assets/low-images/yastreb-suslik-ohotnik.jpg"), id: 15, deleteMode: false},
        {image: require("../../assets/low-images/zakat-holmy-derevya.jpg"), id: 16, deleteMode: false},
    ]
}

const handlers = {
    [SET_LOW_iMAGES]: (state, action) => ({...state, images: action.payload}),
    [TOGGLE_DELETE_MODE]: (state, action) => ({...state, images: action.payload}),
    DEFAULT: state => state
}

export function imageListReducer(state = initialState, action){
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}