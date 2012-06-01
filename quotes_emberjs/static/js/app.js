var App = Em.Application.create();

App.FormAddQuote = Em.View.extend({
  tagName: "form",
  submit: function(event) {
    event.preventDefault();
    alert('Submitted!');
  }
});
