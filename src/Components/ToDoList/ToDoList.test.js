import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ToDoList from './ToDoList';
import List from '../List/List';

configure({adapter: new Adapter()});

describe('<ToDOList />', () => {
    it("should render one <List/> items", () => {
        const wrapper = shallow(<ToDoList />);
        expect(wrapper.find(List)).toHaveLength(1);
    });
    it("should render two <List/> items", () => {
        const wrapper = shallow(<ToDoList />);
        var taskList = [{ description: 'Buy Groceries!!!!', isCompleted: false }];
        wrapper.setState({toDoList: taskList});
        expect(wrapper.find(List)).toHaveLength(2);
    });
    it("should render three <List/> items", () => {
        const wrapper = shallow(<ToDoList />);
        var taskList = [{ description: 'Buy Groceries!!!!', isCompleted: false }, { description: 'Clean the Car!!!!', isCompleted: false }];
        wrapper.setState({toDoList: taskList});
        expect(wrapper.find(List)).toHaveLength(3);
    });
});