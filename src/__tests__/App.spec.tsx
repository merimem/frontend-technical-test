import { mount } from 'enzyme';
import App from "../pages";

describe("App", () => {
  const wrapper = mount(<App />);

  it('should render form', () => {
    expect(wrapper.find('.auth-container')).toHaveLength(1);
  });

 /*  it('should render main', () => {
    expect(wrapper.find('main')).toHaveLength(1);
  });

  it('should render footer', () => {
    expect(wrapper.find('footer')).toHaveLength(1);
  }); */
})
