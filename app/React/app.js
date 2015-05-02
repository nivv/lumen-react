import GistBox from './components/Gistbox/GistBox';
import Postbox from './components/Postfetcher/PostBox';
import request from "superagent";
//React.render(<GistBox />, document.querySelector('#app'));

React.render(<Postbox />, document.querySelector('#postApp'));