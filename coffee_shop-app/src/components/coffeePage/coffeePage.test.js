import React from 'react';
import CoffeePage from './CoffeePage';
import {shallow, mount} from 'enzyme';
import getService from '../../services/getService';

describe('Testing <CoffeePage/>', () => {
  describe('Testing snap & state', () => {
    it('CoffeePage have rendered correctly', () => {
      const item = shallow(<CoffeePage />);
      expect(item).toMatchSnapshot();
    });
    
    it('CoffeePage state "term" is empty', () => {
      const term = shallow(<CoffeePage/>);
      expect(term).toBeEmpty();
    });   
    it('CoffeePage state "filter" is empty', () => {
      const filter = shallow(<CoffeePage/>);
      expect(filter).toBeEmpty();
    });
    it('CoffeePage state "loading" is true', () => {
      const loading = shallow(<CoffeePage/>);
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