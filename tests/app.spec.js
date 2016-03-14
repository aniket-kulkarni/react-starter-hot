import React from 'react';
import TestUtils from 'react-addons-test-utils';
import App from '../client/app/app.jsx';

describe('App', () => {

    it('works', () => {
        var component = TestUtils.renderIntoDocument(
            <App />
        );

        var h1 = TestUtils.findRenderedDOMComponentWithTag(
           component, 'h1'
        );

        expect(h1.textContent)
            .toEqual("Hello, world");
    });

});
