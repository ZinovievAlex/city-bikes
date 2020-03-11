import {getAllNetworksThunk, showLoading} from '../../redux/reducerNetworks';
import {getAllStationsThunk} from '../../redux/reducerStations';
import MainMenu from './MainMenu';
import {connect} from 'react-redux';

let mapStateToProps = (state: any) => {
  return {
    reducer: state.reducer
  }
}

let mapDispatchToProps = (dispatch: any) => {
  return {
    getAllStationsThunk: (id: string) => {
      dispatch(getAllStationsThunk(id));
    },
    getAllNetworksThunk: () => {
      dispatch(getAllNetworksThunk());
    },
    showLoading: () => {
      dispatch(showLoading());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
