import Header from './Header';
import {connect} from 'react-redux';

let mapStateToProps = (state: any) => {
  return {
    headerInfo: state.stationsReducer.headerInfo
  }
}

let mapDispatchToProps = (dispatch: any) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
