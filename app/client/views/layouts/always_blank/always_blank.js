/*****************************************************************************/
/* AlwaysBlank: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.AlwaysBlank.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.AlwaysBlank.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* AlwaysBlank: Lifecycle Hooks */
/*****************************************************************************/
Template.AlwaysBlank.created = function () {
};

Template.AlwaysBlank.rendered = function () {
  $('#edit').editable({inlineMode: false, alwaysBlank: true});
};

Template.AlwaysBlank.destroyed = function () {
};