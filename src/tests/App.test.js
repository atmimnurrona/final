
import App from "../App"
import {shallow} from 'enzyme'
import renderer from 'react-test-renderer'
// import {expect} from 'chai';


describe('App Component ', () => {

  it('display the result', function () {
    const  tree = renderer.create(<App/>).toJSON()
    expect(tree).toMatchSnapshot()
  });

  it('should have one provider', function () {
    const  wrapper = shallow(<App/>)
    expect(wrapper.find('Provider')).toHaveLength(1)
  });

  it('should have two div', function () {
    const wrapper = shallow(<App/>)
    expect(wrapper.find('div')).toHaveLength(2)
  });

  it('should have render', function (){
    const wrapper = shallow(<App/>)
    expect(wrapper.render()).toHaveLength(1)
  });

  it('should have one browser router', function (){
    const wrapper = shallow(<App/>)
    expect(wrapper.find('BrowserRouter')).toHaveLength(1)
  })

})