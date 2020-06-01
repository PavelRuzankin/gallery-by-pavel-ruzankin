import React from "react"
import { connect } from "react-redux"

class SliderImage extends React.Component{
    state = {
        direction: null,
        prevImage: {},
        currentImage: {},
        nextImage: {}
    }

    initState(){
        const {prevImage, currentImage, nextImage} = this.props
        this.setState({prevImage, currentImage, nextImage, direction: null})
    }

    getSnapshotBeforeUpdate(prevProps){
        return prevProps.currentImage
    }

    changeDirection(direction){
        this.setState({direction})
        setTimeout(()=>{
            this.initState()
        }, this.props.timeout)
    }

    componentDidMount(){
        this.initState()
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(snapshot.id > this.props.currentImage.id ){
            if(this.props.currentImage.id  === 0 && snapshot.id === this.props.length - 1){
                this.changeDirection("translate-left")
            }else{
                this.changeDirection("translate-right")
            }
        }else if(snapshot.id < this.props.currentImage.id){
            if(this.props.currentImage.id  === this.props.length - 1 && snapshot.id === 0){
                this.changeDirection("translate-right")
            }else{
                this.changeDirection("translate-left")
            }
        }
    }
    render(){
        return (
            <>
                <div style={{backgroundImage: `url('${this.props.next || this.state.prevImage.image || null}')`}}
                className={`Slider__image left ${this.state.direction} ibg`}/>

                <div style={{backgroundImage: `url('${this.state.currentImage.image || null}')`}}
                className={`Slider__image ${this.state.direction} ibg`}/>

                <div style={{backgroundImage: `url('${this.props.next || this.state.nextImage.image || null}')`}}
                className={`Slider__image right ${this.state.direction} ibg`}/>
            </>
        )
    }
}

function mapStateToProps(state){
    return {
        next: state.slider.nextImage,
        timeout: state.slider.timeout
    }
}


export default connect(mapStateToProps)(SliderImage)