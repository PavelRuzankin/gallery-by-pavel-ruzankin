import React from "react"
import Image from "./Image"
import { connect } from "react-redux";
import { changeSliderImage } from "../store/actions/imageListAction";
import { Transition } from "react-transition-group";

class ImageList extends React.Component{

    renderImages(){
        return this.props.images.map((elem, i) => {
            const animation = Number.isInteger(i / 3) ? "left": "up"
           return <Image openImage={this.props.openImage}
           animation={animation} key={i} id={i} src={elem.image} deleteMode={elem.deleteMode}/>
        })
    }
    render(){
        return(
            <section className={"GalleryPage"}>
                <div className={"container"}>
                    <div className={"GalleryPage__wrapper"}>
                        {this.renderImages()}
                    </div>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state){
    return {
        images: state.imageList.images
    }
}

function mapDispatchToProps(dispatch){
    return {
        openImage: (id) => dispatch(changeSliderImage(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageList)