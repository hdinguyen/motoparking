var React = require("react"),
    Fluxxor = require("fluxxor");

var Button = require("../Button");

var IsMotoQuestion = React.createClass({
    propTypes: {
        value: React.PropTypes.string,
        callback: React.PropTypes.func.isRequired
    },
    render: function () {
        return (
            <div>
                <p>Сюда пускают мотоциклы&#63;</p>
                <Button text="Да" callback={ this.props.callback.bind(null, "yes") } selected={ this.props.value == "yes" }/>
                <Button text="Нет" callback={ this.props.callback.bind(null, "no") } selected={ this.props.value == "no" }/>
                <Button text="Не знаю" callback={ this.props.callback.bind(null, "maybe") } selected={ this.props.value == "maybe" }/>
            </div>
        )
    }
});

module.exports = IsMotoQuestion;