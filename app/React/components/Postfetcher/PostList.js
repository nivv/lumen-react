var PostList = React.createClass({

    render: function() {

        var displayPost = function(post) {
            return <li key={post._id}>ID: {post._id}. Title: <strong>{post.name}</strong> <p>{post.body}</p></li>
        };

        // var displayPost = (post) => <li>{post}</li>

        return (
            <ul>
                { this.props.posts.map(displayPost) }
            </ul>
        );
    }
});

export default PostList;
