var PostList = React.createClass({

    render: function() {

        var displayPost = function(post) {
            return <li key={post.id}>ID: {post.id}. Title: <strong>{post.title}</strong> <p>{post.body}</p></li>
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
