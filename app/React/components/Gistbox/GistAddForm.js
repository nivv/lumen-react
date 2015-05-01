var GistAddForm = React.createClass({

    getInitialState: function () {
        return {
            username: ''
        };
    },

    onChange: function (e) {
        this.setState({username: e.target.value});
    },

    onSubmit: function (e) {
        e.preventDefault();

        this.props.onAdd(this.state.username);
        this.setState({username: ''});
    },

    render: function () {
        return (
            <div className="row">
                <form onSubmit={this.onSubmit} className="col-xs-6 col-xs-push-3">
                    <div className="input-group">
                        <input type="text" value={this.state.username} onChange={this.onChange} placeholder="Type a github username..." className="form-control" />
                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="button">Fetch latest gist</button>
                        </span>
                    </div>
                </form>
            </div>
        );
    }

});

export default GistAddForm;
