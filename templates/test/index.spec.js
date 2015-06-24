import React from "react/addons";
import MyComponent from "../index.js";
import sinon from "sinon";
import assert from "assert";
const TestUtils = React.addons.TestUtils;

describe('page/index', function(){

  it('should display correct', function() {
    var component = TestUtils.renderIntoDocument(<MyComponent name="Moon"/>);
    assert.equal(React.findDOMNode(component).tagName, 'H1');
    assert.equal(React.findDOMNode(component).textContent, 'Hello,Moon');
    var component = TestUtils.renderIntoDocument(<MyComponent name="Hero"/>);
    assert.equal(React.findDOMNode(component).textContent, 'Hello,Hero');
  });

  it('should response to click event', function() {
    var component = TestUtils.renderIntoDocument(<MyComponent name="Moon"/>);
    var node = React.findDOMNode(component);
    global.alert = sinon.spy();
    TestUtils.Simulate.click(node); 
    assert.equal(global.alert.withArgs("hello,Moon").calledOnce, true);
  });
});
