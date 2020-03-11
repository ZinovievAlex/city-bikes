import React, {useEffect} from 'react';
import { Menu } from 'antd';
import {NetworksType} from '../../redux/reducerNetworks';

const { SubMenu } = Menu;

type NetworksProps = {
  reducer: {
    networks: Array<NetworksType>
  }
  getAllNetworksThunk(): void
  getAllStationsThunk(id: string): void
  showLoading(): void
}


const MainMenu: React.FC<NetworksProps> = ({reducer, getAllNetworksThunk , getAllStationsThunk, showLoading}) => {

  if (!reducer.networks.length) {
    getAllNetworksThunk();
  }

  const getLinkStations = (id: string) => {
    showLoading();
    getAllStationsThunk(id);
  }

  useEffect(() => {
    if (reducer.networks.length) {
      getAllStationsThunk(reducer.networks[0].location[0].id);
    }
  }, [reducer.networks]);

  const networksList = reducer.networks.map((elem, index) => {
    return (
      <SubMenu key={`sub${index}`} title={
          <span>
            <span>{elem.network}</span>
          </span>
        }
      >
        { elem.location.map(item => {
          return <Menu.Item
            key={item.id}
            id ={item.id}
            onClick={() => getLinkStations(item.id)}>
            {item.city}
          </Menu.Item>
        }) }

      </SubMenu>
    )
  });

  return (
    <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub0']} mode="inline" theme="dark">
      {networksList}
    </Menu>
  )
}

export default MainMenu;
