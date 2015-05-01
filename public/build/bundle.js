(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _GistBox = require('./components/Gistbox/GistBox');

var _GistBox2 = _interopRequireDefault(_GistBox);

var _Postbox = require('./components/Postfetcher/PostBox');

var _Postbox2 = _interopRequireDefault(_Postbox);

//React.render(<GistBox />, document.querySelector('#app'));

React.render(React.createElement(_Postbox2['default'], null), document.querySelector('#postApp'));

},{"./components/Gistbox/GistBox":4,"./components/Postfetcher/PostBox":6}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Gist = React.createClass({
    displayName: "Gist",

    render: function render() {
        return React.createElement(
            "div",
            null,
            this.props.username,
            "'s last gist is ",
            React.createElement(
                "a",
                { href: this.props.url },
                "here"
            ),
            "."
        );
    }
});
exports["default"] = Gist;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var GistAddForm = React.createClass({
    displayName: 'GistAddForm',

    getInitialState: function getInitialState() {
        return {
            username: ''
        };
    },

    onChange: function onChange(e) {
        this.setState({ username: e.target.value });
    },

    onSubmit: function onSubmit(e) {
        e.preventDefault();

        this.props.onAdd(this.state.username);
        this.setState({ username: '' });
    },

    render: function render() {
        return React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
                'form',
                { onSubmit: this.onSubmit, className: 'col-xs-6 col-xs-push-3' },
                React.createElement(
                    'div',
                    { className: 'input-group' },
                    React.createElement('input', { type: 'text', value: this.state.username, onChange: this.onChange, placeholder: 'Type a github username...', className: 'form-control' }),
                    React.createElement(
                        'span',
                        { className: 'input-group-btn' },
                        React.createElement(
                            'button',
                            { className: 'btn btn-primary', type: 'button' },
                            'Fetch latest gist'
                        )
                    )
                )
            )
        );
    }

});

exports['default'] = GistAddForm;
module.exports = exports['default'];

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _Gist = require('./Gist');

var _Gist2 = _interopRequireDefault(_Gist);

var _GistAddForm = require('./GistAddForm');

var _GistAddForm2 = _interopRequireDefault(_GistAddForm);

var GistBox = React.createClass({
    displayName: 'GistBox',

    getInitialState: function getInitialState() {
        return {
            gists: []
        };
    },

    addGist: function addGist(username) {
        var _this = this;

        var url = 'https://api.github.com/users/' + username + '/gists';

        $.get(url, function (result) {
            if (result.length > 0) {
                var username = result[0].owner.login;
                var url = result[0].html_url;

                var gists = _this.state.gists.concat({ username: username, url: url });

                _this.setState({ gists: gists });
            }
        });
    },

    render: function render() {
        var newGist = function newGist(gist) {
            return React.createElement(_Gist2['default'], { username: gist.username, url: gist.url });
        };

        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { className: 'jumbotron' },
                React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(
                        'h1',
                        { className: 'text-center' },
                        'GistBox'
                    ),
                    React.createElement(_GistAddForm2['default'], { onAdd: this.addGist })
                )
            ),
            React.createElement(
                'div',
                { className: 'container text-center' },
                this.state.gists.map(newGist)
            )
        );
    }

});

exports['default'] = GistBox;
module.exports = exports['default'];

},{"./Gist":2,"./GistAddForm":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var FetchPosts = React.createClass({
    displayName: "FetchPosts",

    onClick: function onClick(e) {
        this.props.onAdd();
    },

    render: function render() {

        return React.createElement(
            "button",
            { onClick: this.onClick, className: "btn btn-default" },
            "Fetch"
        );
    }
});

exports["default"] = FetchPosts;
module.exports = exports["default"];

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _PostList = require('./PostList');

var _PostList2 = _interopRequireDefault(_PostList);

var _FetchPosts = require('./FetchPosts');

var _FetchPosts2 = _interopRequireDefault(_FetchPosts);

var Postbox = React.createClass({
    displayName: 'Postbox',

    getInitialState: function getInitialState() {
        return {
            posts: []
        };
    },

    fetcher: function fetcher() {
        var _this = this;

        var url = '/posts';

        this.setState({ posts: [] });

        $.get(url, function (result) {
            if (result.length > 0) {

                console.log(result);

                var posts = _this.state.posts.concat(result);

                _this.setState({ posts: posts });
            }
        });
    },

    render: function render() {

        return React.createElement(
            'div',
            null,
            React.createElement(
                'h2',
                null,
                'Le posts'
            ),
            React.createElement(_FetchPosts2['default'], { onAdd: this.fetcher }),
            React.createElement(_PostList2['default'], { posts: this.state.posts })
        );
    }

});

exports['default'] = Postbox;
module.exports = exports['default'];

},{"./FetchPosts":5,"./PostList":7}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var PostList = React.createClass({
    displayName: "PostList",

    render: function render() {

        var displayPost = function displayPost(post) {
            return React.createElement(
                "li",
                { key: post.id },
                "ID: ",
                post.id,
                ". Title: ",
                React.createElement(
                    "strong",
                    null,
                    post.title
                ),
                " ",
                React.createElement(
                    "p",
                    null,
                    post.body
                )
            );
        };

        // var displayPost = (post) => <li>{post}</li>

        return React.createElement(
            "ul",
            null,
            this.props.posts.map(displayPost)
        );
    }
});

exports["default"] = PostList;
module.exports = exports["default"];

},{}]},{},[1]);
