import {networkAPI} from '../api/api';
import {networksFormatData} from '../helpers/dataMethods';
import {showLoading, hideLoading} from './reducerNetworks';

const GET_STATIONS = 'GET_STATIONS';
const GET_HEADER_INFO = 'GET_HEADER_INFO';
const SET_LIKE = 'SET_LIKE';

export type StationsType = {
  id: string,
  name: string,
  like: boolean
}

export type HeaderInfoType = {
  title: string,
  count: number
}

export type LikesType = {
  id: string,
  like: boolean
}

let initialStateStations = {
  stations: [] as Array<StationsType> | null,
  headerInfo: {} as HeaderInfoType,
  likes: [] as Array<LikesType>
};

export type InitialStateStationsType = typeof initialStateStations;

const stationsReducer = (state = initialStateStations, action: any): InitialStateStationsType => {
  switch (action.type) {
    case GET_STATIONS:

     let newArrStations = action.stations.map((elem: StationsType) => {
       let result = state.likes.find(item => item.id === elem.id);

       if (result !== undefined) {
         return { id: elem.id, name: elem.name, like: result.like }
       }
       return { id: elem.id, name: elem.name, like: elem.like }

     });

      return {
        ...state,
        stations: newArrStations
      }
    case GET_HEADER_INFO:
      return {
        ...state,
        headerInfo: action.headerInfo
      }
    case SET_LIKE:

      let indexLike = state.likes.findIndex(item => item.id === action.id); //индекс массива лайков
      if (indexLike !== -1) {
        state.likes.splice(indexLike, 1);
      } else {
        state.likes.push({
          id: action.id,
          like: true
        });
      }

      let changeStationsWithLikes = [] as Array<StationsType>;

      if (state.stations) {
        changeStationsWithLikes = state.stations.map((elem) => {
          let a = state.likes.find(item => item.id === elem.id);
          if (a !== undefined && a.id === elem.id ) {
            return {
              id: elem.id,
              name: elem.name,
              like: true
            }
          } else {
            return {
              id: elem.id,
              name: elem.name,
              like: false
            }
          }
        });
      }

      return {
        ...state,
        stations: changeStationsWithLikes,
        likes: state.likes
      }
    default:
      return state
  }
}

type GetAllStationsActionType = {
  type: typeof GET_STATIONS,
  stations: Array<StationsType>
}

type GetHeaderInfoType = {
  type: typeof GET_HEADER_INFO,
  headerInfo: {title: string, count: number}
}

type SetLikesActionType = {
  type: typeof SET_LIKE,
  like: LikesType
}

export const getAllStations = (stations: Array<StationsType>): GetAllStationsActionType => ({
  type: GET_STATIONS,
  stations
});

export const getHeaderInfo = (headerInfo: {title: string, count: number}): GetHeaderInfoType => ({
  type: GET_HEADER_INFO,
  headerInfo
})

export const setLikes = (id: string) => ({
  type: SET_LIKE,
  id
})

export const getAllStationsThunk = (id: string) => async (dispatch: any) => {
  dispatch(showLoading());
  let response = await networkAPI.getStations(id);
  let incommingArr = networksFormatData.getArrDataStations(response.data.network.stations);

  dispatch(getAllStations(incommingArr));
  dispatch(hideLoading());

  let headerInfoObj = {
    title: response.data.network.location.city,
    count: response.data.network.stations.length
  }

  dispatch(getHeaderInfo(headerInfoObj));

}


export default stationsReducer;
