'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _helpersContains = require('../helpers/contains');

var _helpersContains2 = _interopRequireDefault(_helpersContains);

var _helpersInjectStyle = require('../helpers/injectStyle');

var _helpersInjectStyle2 = _interopRequireDefault(_helpersInjectStyle);

// Auto inject the styles (will only be done once)
(0, _helpersInjectStyle2['default'])();

exports['default'] = _react2['default'].createClass({
  displayName: 'ReactFlipCard',

  propTypes: {
    type: _react.PropTypes.string,
    flipped: _react.PropTypes.bool,
    disabled: _react.PropTypes.bool,
    onFlip: _react.PropTypes.func,
    onKeyDown: _react.PropTypes.func,
    children: function children(props, propName, componentName) {
      var prop = props[propName];

      if (_react2['default'].Children.count(prop) !== 2) {
        return new Error('`' + componentName + '` ' + 'should contain exactly two children. ' + 'The first child represents the front of the card. ' + 'The second child represents the back of the card.');
      }
    }
  },

  getDefaultProps: function getDefaultProps() {
    return {
      type: 'horizontal',
      flipped: false,
      disabled: false
    };
  },

  getInitialState: function getInitialState() {
    return {
      hasFocus: false,
      isFlipped: this.props.flipped
    };
  },

  componentDidMount: function componentDidMount() {
    this._hideFlippedSide();
  },

  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    var _this = this;

    // Make sure both sides are displayed for animation
    this._showBothSides();

    // Wait for display above to take effect
    setTimeout(function () {
      _this.setState({
        isFlipped: newProps.flipped
      });
    }, 0);
  },

  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
    // If card is flipping to back via props, track element for focus
    if (!this.props.flipped && nextProps.flipped) {
      // The element that focus will return to when flipped back to front
      this.focusElement = document.activeElement;
      // Indicates that the back of card needs focus
      this.focusBack = true;
    }

    // If isFlipped has changed need to notify
    if (this.state.isFlipped !== nextState.isFlipped) {
      this.notifyFlip = true;
    }
  },

  componentDidUpdate: function componentDidUpdate() {
    // If card has flipped to front, and focus is still within the card
    // return focus to the element that triggered flipping to the back.
    if (!this.props.flipped && this.focusElement && (0, _helpersContains2['default'])((0, _reactDom.findDOMNode)(this), document.activeElement)) {
      this.focusElement.focus();
      this.focusElement = null;
    }
    // Direct focus to the back if needed
    /* eslint brace-style:0 */
    else if (this.focusBack) {
        this.refs.back.focus();
        this.focusBack = false;
      }

    // Notify card being flipped
    if (this.notifyFlip && typeof this.props.onFlip === 'function') {
      this.props.onFlip(this.state.isFlipped);
      this.notifyFlip = false;
    }

    // Hide whichever side of the card is down
    setTimeout(this._hideFlippedSide, 600);
  },

  handleFocus: function handleFocus() {
    if (this.props.disabled) return;

    this.setState({
      isFlipped: true
    });
  },

  handleBlur: function handleBlur() {
    if (this.props.disabled) return;

    this.setState({
      isFlipped: false
    });
  },

  handleKeyDown: function handleKeyDown(e) {
    if (typeof this.props.onKeyDown === 'function') {
      this.props.onKeyDown(e);
    }
  },

  render: function render() {
    return _react2['default'].createElement(
      'div',
      {
        className: (0, _classnames2['default'])({
          'ReactFlipCard': true,
          'ReactFlipCard--vertical': this.props.type === 'vertical',
          'ReactFlipCard--horizontal': this.props.type !== 'vertical',
          'ReactFlipCard--flipped': this.state.isFlipped,
          'ReactFlipCard--enabled': !this.props.disabled
        }),
        tabIndex: 0,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown
      },
      _react2['default'].createElement(
        'div',
        {
          className: 'ReactFlipCard__Flipper'
        },
        _react2['default'].createElement(
          'div',
          {
            className: 'ReactFlipCard__Front',
            ref: 'front',
            tabIndex: -1,
            'aria-hidden': this.state.isFlipped
          },
          this.props.children[0]
        ),
        _react2['default'].createElement(
          'div',
          {
            className: 'ReactFlipCard__Back',
            ref: 'back',
            tabIndex: -1,
            'aria-hidden': !this.state.isFlipped
          },
          this.props.children[1]
        )
      )
    );
  },

  _showBothSides: function _showBothSides() {
    this.refs.front.style.display = '';
    this.refs.back.style.display = '';
  },

  _hideFlippedSide: function _hideFlippedSide() {
    // This prevents the flipped side from being tabbable
    if (this.props.disabled) {
      if (this.state.isFlipped) {
        this.refs.front.style.display = 'none';
      } else {
        this.refs.back.style.display = 'none';
      }
    }
  }
});
module.exports = exports['default'];