import React from "react"
import { Transition } from "react-transition-group";
import { connect } from "react-redux";
import { toggleDeleteMode } from "../store/actions/imageListAction";
class Layout extends React.Component{

    setNotDeleteMode = () => {
            this.props.images.forEach((elem, i) => {
                this.props.toggleDeleteMode(i, false)
            });
    }

    render(){
        const direction = this.props.direction
        return (
            <div className="Layout" onMouseDown={this.props.deleteMode ? this.setNotDeleteMode : null}>
                <Transition in={direction} timeout={500} mountOnEnter unmountOnExit>
                   {state => (
                        <div className={`label ${state}`}>
                            <div className={"label__title"}>Галерея</div>
                        </div>
                   )}
                </Transition>
                <header className="header">
                    <div className="header__main-title">gallery by pavel ruzankin</div>
                </header>
                <main>{this.props.children}</main>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        images: state.imageList.images,
        deleteMode: state.imageList.images.some(elem => elem.deleteMode),
        direction: state.slider.direction
    }
}

function mapDispatchToProps(dispatch){
    return {
        toggleDeleteMode: (id) => dispatch(toggleDeleteMode(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)