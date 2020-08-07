import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ToDoList from './Components/ToDoList/ToDoList';
import App from './App';
configure({adapter: new Adapter()});

describe('should render <ToDoList/> in App component', () => {
  it("renders <ToDoList />", () =>{
    const wrapper = shallow(<App/>);
    expect(wrapper.find(ToDoList)).toHaveLength(1);
  });
});
