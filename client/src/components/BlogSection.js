import React,{Component} from 'react'
import doubleArrow from '../img/icons/double-arrow.png'
import add from '../img/add.jpg'
import blogThumb2 from '../img/blog-widget/2.jpg'
import blogThumb1 from '../img/blog-widget/1.jpg'
import blogThumb4 from '../img/blog-widget/4.jpg'
import InstaGrid from '../components/Instafeed';
import {Link} from 'react-router-dom'
import TopFive from './TopFive'
import TopLists from './TopLists';
import {fetchLists} from '../actions/listActions';
import {connect} from 'react-redux';

// import Instafeed from '../components/Instafeed';

class BlogSection extends Component {

  componentDidMount(){
    this.props.fetchLists()

  }
render(){
return(
  <section className="blog-section spad">
    <div className="container">
      <div className="row">
        <div className="col-xl-9 col-lg-8 col-md-7">
          <div className="section-title text-white">
            <h2>Top 5 by City</h2>
          </div>
            <TopLists lists={this.props.toplists} />
       </div>
        <div className="col-xl-3 col-lg-4 col-md-5 sidebar">
          <div id="stickySidebar">
            <div className="widget-item">
              <h4 className="widget-title">The Haunt Girl on Instagram</h4>
              <div className="trending-widget">
                <div className="tw-item">
                  {/*<Instafeed /> */}
                   <InstaGrid account="thehauntgirl" numberOfMediaElements={10} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
 }
}

const mapStateToProps = state => {
  console.log(state)
  return {toplists: state.lists.lists}
}

export default connect(mapStateToProps ,{fetchLists})(BlogSection)
