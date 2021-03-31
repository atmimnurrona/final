import configureMockStore from 'redux-mock-store';
import {shallow} from 'enzyme';
import {UnitList} from "../pages";
import React from "react";
import {Provider} from "react-redux";
// import React from "react";

const mockStore = configureMockStore();

describe('Unit List Component', () => {
    let wrapper;
    let store;

    beforeEach(() => {
        const initialState = {
            //nama reducer
            findAllUnit: {
                data: null,
                loading: true,
                error: null
            },
            removeUnitById: {
                data: null,
                loading: true,
                error: null
            }
        }
        store = mockStore(initialState)
        wrapper = shallow(<UnitList store={store}/>).dive()
    })
//test mapStateToProps di unitList
    it('should return the data [] from state', () => {
        expect(wrapper.props().units).toStrictEqual([])
    })

    it('should return the loading [] from state', () => {
        expect(wrapper.props().isLoading).toBe(true)
    })

    // it('should have two div', () => {
    //     const component = shallow(<Provider><UnitList/></Provider>)
    //     expect(component.find('div')).toHaveLength(2)
    // })



})