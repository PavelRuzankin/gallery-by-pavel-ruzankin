import React from 'react';
import Layout from './containers/Layout';
import "./styles/root.css"
import GalleryPage from './containers/GalleryPage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft, faChevronRight, faTimesCircle} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faChevronLeft, faChevronRight, faTimesCircle)
class App extends React.Component{
  render(){
    return (
      <Layout>
        <GalleryPage/>
      </Layout>
    )
  }
}
export default App