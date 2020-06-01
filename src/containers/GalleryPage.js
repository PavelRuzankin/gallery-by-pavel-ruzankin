import React from "react"
import Image from "../components/Image"
import { connect } from "react-redux";
import ImageList from "../components/ImageList";
import Slider from "../components/Slider";


class GalleryPage extends React.Component{

    renderImages(){
        return this.props.images.map((image, i) => (
            <Image key={i} src={image.low}/>
        ))
    }
    render(){
        return(
           <>
                <Slider/>
                <ImageList/>
           </>
        )
    }
}

function mapStateToProps(state){
    return {
        images: state.slider.images
    }
}



export default connect(mapStateToProps)(GalleryPage)