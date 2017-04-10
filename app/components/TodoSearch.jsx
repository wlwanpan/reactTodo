var React = require('react');

var TodoSearch = React.createClass({
    handleSearch: function () {
        var showCompleted = this.refs.ShowCompleted.checked;
        var searchText = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText);
    },
    render: function () {
        return (
            <div>
                <div>
                    <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="ShowCompleted" onChange={this.handleSearch}/>
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
});

module.exports = TodoSearch;
