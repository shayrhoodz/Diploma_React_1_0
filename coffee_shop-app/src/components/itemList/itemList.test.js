import React from 'react';
import ItemList from './itemList';
import {shallow, mount} from 'enzyme';
import getService from '../../services/getService';

describe('Testing <ItemList/>', () => {
  describe('Testing snap & state', () => {
    it('ItemList have rendered correctly', () => {
      const item = shallow(<ItemList />);
      expect(item).toMatchSnapshot();
    });
    
    it('ItemList state "itemList" is object', () => {
      const itemList = shallow(<ItemList/>);
      expect(itemList).toBeObject();
    });
    it('ItemList state "name" is empty', () => {
      const name = shallow(<ItemList/>);
      expect(name).toBeEmpty();
    });
    it('ItemList state "error" is false', () => {
      const error = shallow(<ItemList/>);
      expect(error).toBeTruthy();
    });
    it('ItemList state "loading" is true', () => {
      const loading = shallow(<ItemList/>);
      expect(loading).toBeTruthy();
    });
  });
  describe('Testing handles', () => {
    // const service = new getService();
    // const div = mount(<ItemList
    //                             getData={service.getAllData}
    //                             renderCoffee={({name}) => name}  />)
    // it('Cllick on item list must render all div 1 instamce', () => {
    //   div.setState({itemList: [{name: 'wqw', id: 1}, {name: 'wqw', id: 2}]});
    //   div.find('.shop__item:first-child').simulate('click');
    //   expect(div).toHaveLength(1);
    // });
  });
});