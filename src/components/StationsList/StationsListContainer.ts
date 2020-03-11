import StationsList from './StationsList';
import {setLikes} from '../../redux/reducerStations';
import {connect} from 'react-redux';

let mapStateToProps = (state: any) => {
  return {
    reducer: state.reducer,
    stationsReducer: state.stationsReducer
  }
}

let mapDispatchToProps = (dispatch: any) => {
  return {
    setLikes: (like: string) => {
      dispatch(setLikes(like));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StationsList);
