import { defineBackend } from '@aws-amplify/backend';
import { helloFunction } from './functions/hello/resource';

defineBackend({
  helloFunction,
});
