'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _main = require('../../main');

var _main2 = _interopRequireDefault(_main);

var _assert = require('assert');

/* eslint func-names:0 */
describe('react-flipcard', function () {
  it('should throw an error if less than 2 children are provided', function () {
    (0, _assert.throws)(function () {
      _reactAddonsTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(_main2['default'], null));
    }, TypeError);
  });

  it('should flip vertically', function () {
    var card = _reactAddonsTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(
      _main2['default'],
      { type: 'vertical' },
      _react2['default'].createElement(
        'div',
        null,
        'foo'
      ),
      _react2['default'].createElement(
        'div',
        null,
        'bar'
      )
    ));
    (0, _assert.equal)(card.getDOMNode().classList.contains('ReactFlipCard--vertical'), true);
    (0, _assert.equal)(card.getDOMNode().classList.contains('ReactFlipCard--horizontal'), false);
  });

  it('should flip horizontally by default', function () {
    var card = _reactAddonsTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(
      _main2['default'],
      null,
      _react2['default'].createElement(
        'div',
        null,
        'foo'
      ),
      _react2['default'].createElement(
        'div',
        null,
        'bar'
      )
    ));
    (0, _assert.equal)(card.getDOMNode().classList.contains('ReactFlipCard--vertical'), false);
    (0, _assert.equal)(card.getDOMNode().classList.contains('ReactFlipCard--horizontal'), true);
  });

  it('should default to enabled', function () {
    var card = _reactAddonsTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(
      _main2['default'],
      null,
      _react2['default'].createElement(
        'div',
        null,
        'foo'
      ),
      _react2['default'].createElement(
        'div',
        null,
        'bar'
      )
    ));
    (0, _assert.equal)(card.getDOMNode().classList.contains('ReactFlipCard--enabled'), true);
  });

  it('should allow disabling', function () {
    var card = _reactAddonsTestUtils2['default'].renderIntoDocument(_react2['default'].createElement(
      _main2['default'],
      { disabled: true },
      _react2['default'].createElement(
        'div',
        null,
        'foo'
      ),
      _react2['default'].createElement(
        'div',
        null,
        'bar'
      )
    ));
    (0, _assert.equal)(card.getDOMNode().classList.contains('ReactFlipCard--enabled'), false);
  });

  // TODO: Why doesn't this work?
  // it('should call onFlip', function (done) {
  //   var called = false;
  //   function handleOnFlip() {
  //     console.log('foo');
  //     called = true;
  //   }
  //
  //   var card = TestUtils.renderIntoDocument(
  //     <FlipCard onFlip={handleOnFlip}>
  //       <div>foo</div>
  //       <div>bar</div>
  //     </FlipCard>
  //   );
  //
  //   card.getDOMNode().focus();
  //   setTimeout(function () {
  //     ok(called);
  //     done();
  //   }, 0);
  // });
});