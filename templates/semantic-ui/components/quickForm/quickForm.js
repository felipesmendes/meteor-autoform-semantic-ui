Template.quickForm_semanticUI.helpers({
  fieldGroupLabel() {
    let name = this.name;

    // if field group name is of the form XY_abcde where "XY" is a number, remove prefix
    if (! Number.isNaN(parseInt(name.substr(0,2), 10)) && name.charAt(2) === "_") {
      name = name.substr(3);
    }

    // if SimpleSchema.defaultLabel is defined, use it
    if (AutoForm.SimpleSchema && typeof AutoForm.SimpleSchema.defaultLabel === "function") {
      return AutoForm.SimpleSchema.defaultLabel(name);
    } else {
      // else, just capitalise name
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  },
  quickFieldsAtts() {
    // These are the quickForm attributes that we want to forward to
    // the afQuickFields component.
    return _.pick(this.atts, "id-prefix");
  },
  submitButtonAtts() {
    let qfAtts = this.atts;
    let atts = {};

    if (typeof qfAtts.buttonClasses === "string") {
      atts["class"] = qfAtts.buttonClasses;
    } else {
      atts["class"] = "ui positive submit button";
    }

    return atts;
  },
  qfAutoFormContext() {
    let ctx = _.clone(this.qfAutoFormContext || {});

    ctx = AutoForm.Utility.addClass(ctx, "ui form");

    delete ctx["id-prefix"];

    return ctx;
  }
});
