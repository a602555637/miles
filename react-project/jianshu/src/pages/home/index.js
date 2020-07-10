import React, { PureComponent } from 'react'
import Topic from './components/Topic'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import List from './components/List'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0)
  }

  render() {
   return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" alt="prop" src="//upload-images.jianshu.io/upload_images/7042805-3119ddc0df3451fb?imageMogr2/auto-orient/strip|imageView2/2/w/691/format/webp" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>top</BackTop> : null
        }
      </HomeWrapper>
   ) 
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state)=> ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch)=> ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  },
  changeScrollTopShow() {
    let scroll = document.documentElement.scrollTop
    if(scroll > 100) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapState, mapDispatch)(Home)