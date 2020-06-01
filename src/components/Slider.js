import React from "react"
import { Transition } from "react-transition-group";
import SliderToggle from "../UI/SliderToggle"
import {connect} from "react-redux"
import SliderImage from "./SliderImage";
import { switchImageForward, switchImageBack } from "../store/actions/sliderAction";

class Slider extends React.Component {
    state = {
        pointEnter: false,
        activeImage: this.props.activeImage
    }

    getCurrentImage = () => ({image: this.props.images[this.props.activeImage], id: this.props.activeImage})

    getPrevImage = () => {

        return this.props.activeImage - 1 < 0 ?
        {image: this.props.images[this.props.images.length - 1], id: this.props.images.length - 1} :
        {image: this.props.images[this.props.activeImage - 1], id: this.props.activeImage - 1}
    }

    getNextImage = () => {

        return this.props.activeImage + 1 > this.props.images.length - 1 ?
        {image: this.props.images[0], id: 0} :
        {image: this.props.images[this.props.activeImage + 1], id: this.props.activeImage + 1}
    }
    render(){
        const images = this.props.images
        return (
            <section className={"Slider"} onMouseLeave={() => this.setState({pointEnter: false})}
            onPointerEnter={() => this.setState({pointEnter: true})}>
                <Transition in={this.state.pointEnter} timeout={300} >
                    {
                        state => {
                           return (<>
                                <SliderToggle onClick={this.props.switchImageBack} state={state} direction={"left"}/>
                                <SliderToggle onClick={this.props.switchImageForward} state={state} direction={"right"}/>
                                <div className={`Slider__counter ${state}`}>{this.props.activeImage + 1} из {images.length}</div>
                            </>)
                        }
                    }
                </Transition>
                <SliderImage 
                currentImage={this.getCurrentImage()}
                nextImage={this.getNextImage()}
                prevImage={this.getPrevImage()}
                length={this.props.images.length}
                />
            </section>
        )
    }
}

function mapStateToProps(state){
    return {
        images: state.slider.images,
        activeImage: state.slider.activeImage,
        changeMod: state.slider.changeMod
    }
}

function mapDispatchToProps(dispatch){
    return {
        switchImageForward: () => dispatch(switchImageForward()),
        switchImageBack: () => dispatch(switchImageBack())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider)