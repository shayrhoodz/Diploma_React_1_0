import React from 'react';
import SearchPanel from './search-panel';
import {shallow, mount} from 'enzyme';
import getService from '../../services/getService';

describe('Testing <SearchPanel/>', () => {
  describe('Testing snap & state', () => {
    it('ItemList have rendered correctly', () => {
      const item = shallow(<SearchPanel />);
      expect(item).toMatchSnapshot();
    });
    
    it('SearchPanel state "term" is empty', () => {
      const term = shallow(<SearchPanel/>);
      expect(term).toBeEmpty();
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