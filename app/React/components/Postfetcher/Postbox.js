import PostList from './PostList';
import FetchPosts from './FetchPosts';
import request from "superagent";
var Postbox = React.createClass({

    getInitialState: function () {
        return {
            posts: []
        };
    },



    fetcher: function () {

        var url = 'http://127.0.0.1:3000/api/bears';

        this.setState({ posts: [] });

        request
            .get(url)
            .end((err, res) => {

                if(res.status === 200) {
                    console.log(res.status)
                    var result = res.body;

                    var posts = this.state.posts.concat(result);

                    this.setState({posts});
                }

            });
    },

    render: function () {

        return (
            <div>
                <h2>Le posts</h2>
                <FetchPosts onAdd={this.fetcher} />
                <PostList posts={this.state.posts} />

            </div>
        );
    }

});

export default Postbox;
