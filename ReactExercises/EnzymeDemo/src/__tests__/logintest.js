import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../Login.jsx';

describe('App component', () => {
    const wrapper = shallow(<App />);

    it('Name Change', () => {
     wrapper.find('input[type="text"]').simulate('change',{target:{
          name:'uname',value:'Brunda'
      }});
      expect(wrapper.state('name')).toEqual('Brunda');
    });
    it('Password Change', () => {
       wrapper.find('input[type="password"]').simulate('change',{target:{
            name:'pwd',value:'123456'
        }});
        expect(wrapper.state('password')).toEqual('123456');
      });
      it('login check with right data', () => {
        wrapper.find('input[type="text"]').simulate('change', { target: { name: 'name', value: 'Brunda' } });
        wrapper.find('input[type="password"]').simulate('change', { target: { name: 'pwd', value: '123456' } });
        wrapper.find('input[type="button"]').simulate('click');
        expect(wrapper.state('result')).toBe('Success');
    })
    it('login check with wrong data', () => {
      wrapper.find('input[type="text"]').simulate('change', { target: { name: 'name', value: 'Brunda' } });
      wrapper.find('input[type="password"]').simulate('change', { target: { name: 'pwd', value: '1243456' } });
      wrapper.find('input[type="button"]').simulate('click');
      expect(wrapper.state('result')).toBe('Failed');
    })
  });