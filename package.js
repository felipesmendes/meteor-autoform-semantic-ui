Package.describe({
  name: 'felipems:autoform-semantic-ui',
  version: '0.10.0',
  summary: 'Semantic-ui template for aldeed:autoform package.',
  git: 'https://github.com/cheesington/meteor-autoform-semantic-ui.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.7');

  api.use(['ecmascript', 'templating', 'underscore', 'jquery@3.0.0'], 'client');

  api.use('aldeed:autoform@7.0.0', 'client');

  api.addFiles([
    // semantic-ui Template - General
    'templates/semantic-ui/semantic-ui.js',
    // semantic-ui Template - Components
    'templates/semantic-ui/components/quickForm/quickForm.html',
    'templates/semantic-ui/components/quickForm/quickForm.js',
    'templates/semantic-ui/components/afArrayField/afArrayField.html',
    'templates/semantic-ui/components/afArrayField/afArrayField.css',
    'templates/semantic-ui/components/afFormGroup/afFormGroup.html',
    'templates/semantic-ui/components/afFormGroup/afFormGroup.js',
    'templates/semantic-ui/components/afObjectField/afObjectField.html',
    'templates/semantic-ui/components/afObjectField/afObjectField.js',
    // semantic-ui Template - Input Types
    'templates/semantic-ui/inputTypes/basic-select/basic-select.html',
    'templates/semantic-ui/inputTypes/basic-select/basic-select.js',
    'templates/semantic-ui/inputTypes/boolean-checkbox/boolean-checkbox.html',
    'templates/semantic-ui/inputTypes/boolean-checkbox/boolean-checkbox.js',
    'templates/semantic-ui/inputTypes/button/button.html',
    'templates/semantic-ui/inputTypes/button/button.js',
    'templates/semantic-ui/inputTypes/color/color.html',
    'templates/semantic-ui/inputTypes/date/date.html',
    'templates/semantic-ui/inputTypes/datetime/datetime.html',
    'templates/semantic-ui/inputTypes/datetime-local/datetime-local.html',
    'templates/semantic-ui/inputTypes/email/email.html',
    'templates/semantic-ui/inputTypes/month/month.html',
    'templates/semantic-ui/inputTypes/number/number.html',
    'templates/semantic-ui/inputTypes/password/password.html',
    'templates/semantic-ui/inputTypes/radio/radio.html',
    'templates/semantic-ui/inputTypes/radio/radio.js',
    'templates/semantic-ui/inputTypes/range/range.html',
    'templates/semantic-ui/inputTypes/reset/reset.html',
    'templates/semantic-ui/inputTypes/reset/reset.js',
    'templates/semantic-ui/inputTypes/search/search.html',
    'templates/semantic-ui/inputTypes/select/select.html',
    'templates/semantic-ui/inputTypes/select/select.js',
    'templates/semantic-ui/inputTypes/select-checkbox/select-checkbox.html',
    'templates/semantic-ui/inputTypes/select-checkbox/select-checkbox.js',
    'templates/semantic-ui/inputTypes/select-checkbox-inline/select-checkbox-inline.html',
    'templates/semantic-ui/inputTypes/select-checkbox-inline/select-checkbox-inline.js',
    'templates/semantic-ui/inputTypes/select-radio/select-radio.html',
    'templates/semantic-ui/inputTypes/select-radio/select-radio.js',
    'templates/semantic-ui/inputTypes/select-radio-inline/select-radio-inline.html',
    'templates/semantic-ui/inputTypes/select-radio-inline/select-radio-inline.js',
    'templates/semantic-ui/inputTypes/submit/submit.html',
    'templates/semantic-ui/inputTypes/submit/submit.js',
    'templates/semantic-ui/inputTypes/tel/tel.html',
    'templates/semantic-ui/inputTypes/text/text.html',
    'templates/semantic-ui/inputTypes/textarea/textarea.html',
    'templates/semantic-ui/inputTypes/time/time.html',
    'templates/semantic-ui/inputTypes/url/url.html',
    'templates/semantic-ui/inputTypes/week/week.html',
  ], 'client');
});
