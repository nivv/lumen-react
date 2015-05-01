import Gist from './Gist';
import GistAddForm from './GistAddForm';

var GistBox = React.createClass({

    getInitialState: function () {
        return {
            gists: []
        };
    },

    addGist: function (username) {
        var url = `https://api.github.com/users/${username}/gists`;

        $.get(url, (result) => {
            if (result.length > 0) {
                var username = result[0].owner.login;
                var url = result[0].html_url;

                var gists = this.state.gists.concat({username, url});

                this.setState({gists});
            }
        });
    },

    render: function () {
        var newGist = function (gist) {
            return <Gist username={gist.username} url={gist.url} />
        };

        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="text-center">GistBox</h1>
                        <GistAddForm onAdd={this.addGist} />
                    </div>
                </div>
                <div className="container text-center">
                    {this.state.gists.map(newGist)}
                </div>
            </div>
        );
    }

});

export default GistBox;
