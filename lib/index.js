'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 定位到头部
var toTop = function toTop() {
    var osTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    var speed = osTop / 200;
    var timer = setInterval(function () {
        document.documentElement.scrollTop -= 40 + speed;
        document.body.scrollTop -= 40 + speed;
        if (document.documentElement.scrollTop > 0 && document.documentElement.scrollTop < 1 || document.body.scrollTop > 0 && document.body.scrollTop < 1) {
            clearInterval(timer);
        }
    }, 10);
};

var ToTopButton = function (_React$Component) {
    _inherits(ToTopButton, _React$Component);

    function ToTopButton(props) {
        _classCallCheck(this, ToTopButton);

        var _this = _possibleConstructorReturn(this, (ToTopButton.__proto__ || Object.getPrototypeOf(ToTopButton)).call(this, props));

        _this.state = {
            isShow: false
        };

        _this.viewHeight = document.documentElement.clientHeight;
        _this.getScrollHeight = _this.getScrollHeight.bind(_this);
        return _this;
    }

    _createClass(ToTopButton, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.addEventListener('scroll', this.getScrollHeight, false);
            this.focusTextInput.focus();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('scroll', this.getScrollHeight, false);
        }

        // 根据滚轮高度判断是否显示toTopButton

    }, {
        key: 'getScrollHeight',
        value: function getScrollHeight() {
            var _focusTextInput$paren = this.focusTextInput.parentNode.getBoundingClientRect(),
                top = _focusTextInput$paren.top;

            this.setState({
                isShow: Math.abs(top) > this.viewHeight
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                {
                    className: 'to-top-button',
                    ref: function ref(pos) {
                        _this2.focusTextInput = pos;
                    },
                    style: { display: !this.state.isShow && 'none' },
                    onClick: function onClick() {
                        return toTop();
                    } },
                _react2.default.createElement('i', { className: 'fa fa-chevron-up' })
            );
        }
    }]);

    return ToTopButton;
}(_react2.default.Component);

exports.default = ToTopButton;