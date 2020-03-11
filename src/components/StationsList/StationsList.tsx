import React, {useEffect} from 'react';
import {StationsType, LikesType} from '../../redux/reducerStations';
import { List, Spin, Icon } from 'antd';
import './StationsList.scss';

type StationsProps = {
  stationsReducer: {
    stations: Array<StationsType>
    statusLoading: boolean
    likes: Array<LikesType>
  },
  reducer: any
  setLikes(id: string): void
}

const StationsList: React.FC<StationsProps> = ({reducer, stationsReducer, setLikes}) => {

  if (reducer.statusLoading) {
    return <div className="app__spinner"><Spin size="large" /></div>
  }

  let changeLike = (id: string): void => {
    setLikes(id);
  }

  return (
    <List
      className="stations"
      bordered
      dataSource={stationsReducer.stations}
      renderItem={item => (
        <List.Item>
          {}
          <div className="stations__title">{item.name}</div>
          <label className="stations__like">
            <input className="stations__field" type="checkbox" id={item.id} value={item.id} checked={item.like} onChange={event => changeLike(item.id)}/>
            <Icon className="stations__icon" type="heart" theme="filled" />
          </label>
        </List.Item>
      )}
    />
  )
}

export default StationsList;
