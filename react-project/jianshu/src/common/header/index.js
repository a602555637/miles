import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchInfo, SearchInfoTitle,
          SearchInfoSwitch, SearchInfoList, SearchInfoItem, Addition, Button, SearchWrapper } from './style'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import { Link } from 'react-router-dom'


class Header extends Component {
  //获取搜索区域
  getListArea() {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handelChangePage } = this.props
    const newList = list.toJS()
    const pageList = []
    if(newList.length){
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
      }
    }
    if(focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            Popular Searches
            <SearchInfoSwitch onClick={()=> handelChangePage(page, totalPage, this.spinIcon)}>
              <i ref={(icon)=> {this.spinIcon = icon}} className='iconfont spin'>&#xe600;</i> 
              switch
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo/>
        </Link>
        <Nav>
          <NavItem className='left active'>Index</NavItem>
          <NavItem className='left'>download App</NavItem>
          {
            login ? <NavItem onClick={logout} className='right'>退出</NavItem> : <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
          }
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              in={focused}
              classNames='slide'
            >
              <NavSearch
                onFocus={()=>handleInputFocus(list)}
                onBlur={handleInputBlur}
                className={focused ? 'focused' : ''}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe72f;</i>
           {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className='writting'>
              <i className='iconfont'>&#xe69b;</i>  Writting
            </Button>
          </Link>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}


//获取数据 from store
const mapStateToProps = (state) => {
  return {
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
  }
}

//dispatch action
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handelChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg'

      if(page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header)