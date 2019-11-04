// set up global namespace for worker environment
import makeServiceWorkerEnv from 'service-worker-mock';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let global: any;

Object.assign(global, makeServiceWorkerEnv());
