import {networkAPI} from '../api/api';
import {networksFormatData} from '../helpers/dataMethods';

const GET_NETWORKS = 'GET_NETWORKS';
const SHOW_LOADING = 'SHOW_LOADING';
const HIDE_LOADING = 'HIDE_LOADING';


export type NetworksType = {
  network: string
  location: Array<{id: string, city: string}>
}

let initialState = {
  networks: [] as Array<NetworksType>,
  statusLoading: false
};

export type InitialStateType = typeof initialState;

const networksReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SHOW_LOADING:
      return {
        ...state,
        statusLoading: true
      }
    case GET_NETWORKS:
      return {
        ...state,
        networks: action.networks
      }
    case HIDE_LOADING:
      return {
        ...state,
        statusLoading: false
      }
    default:
      return state
  }
}

type ShowLoadingActionType = {
  type: typeof SHOW_LOADING
}

type HideLoadingActionType = {
  type: typeof HIDE_LOADING
}

type GetAllNetworksActionType = {
  type: typeof GET_NETWORKS,
  networks: Array<NetworksType>
}



export const showLoading = (): ShowLoadingActionType => ({
  type: SHOW_LOADING
});

export const hideLoading = (): HideLoadingActionType => ({
  type: HIDE_LOADING
});

export const getAllNetworks = (networks: Array<NetworksType>): GetAllNetworksActionType => ({
  type: GET_NETWORKS,
  networks
});

export const getAllNetworksThunk = () => async (dispatch: any) => {
  let response = await networkAPI.getAllNetworks();
  let incommingArr = networksFormatData.getArrDataNetworks(response.data.networks);
  dispatch(getAllNetworks(incommingArr));
}


export default networksReducer;
