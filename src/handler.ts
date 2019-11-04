import Router from './util/router';

import version from './routes/version';
import square from './routes/square';

export default new Router()
  .get('/version', version)
  .post('/square', square)
  .any('/', version);
