var FetchPosts = React.createClass({



    onClick: function (e) {
        this.props.onAdd();
    },

    render: function() {

        return (
            <button onClick={this.onClick} className="btn btn-default">Fetch</button>
        );
    }
});

export default FetchPosts;