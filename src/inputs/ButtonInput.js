import Input from './Input';

const ButtonInput = $.extend({}, Input, {

	events: [
		["click", "onChange", "button" /*'select'*/],
	],


	setValue: function (value) {
		$('button', this.element).val(value);
	},

	init: function (data) {
		return this.render("button", data);
	},

}
);

export default ButtonInput;