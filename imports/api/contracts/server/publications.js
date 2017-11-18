import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { query } from '/lib/views';
import { Contracts } from '/imports/api/contracts/Contracts';

Meteor.publish('contracts', () => {
  Contracts.find();
});

Meteor.publish('feed', (terms) => {
  check(terms, Object);
  const parameters = query(terms);

  console.log(`[publish][user=${Meteor.user().username}] generating contracts feed.`);
  return Contracts.find(parameters.find, parameters.options);
});
