import PostList from './PostList';
import FetchPosts from './FetchPosts';

var Postbox = React.createClass({

    getInitialState: function () {
        return {
            posts: []
        };
    },



    fetcher: function () {

        var url = '/posts';

        this.setState({ posts: [] });

        $.get(url, (result) => {
            if (result.length > 0) {

                console.log(result);

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
