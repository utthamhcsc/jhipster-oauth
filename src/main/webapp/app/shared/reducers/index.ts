import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import locale from './locale';
import authentication from './authentication';
import applicationProfile from './application-profile';

import administration from 'app/modules/administration/administration.reducer';
import userManagement from './user-management';
// prettier-ignore
import region from 'app/entities/region/region.reducer';
// prettier-ignore
import country from 'app/entities/country/country.reducer';
// prettier-ignore
import location from 'app/entities/location/location.reducer';
// prettier-ignore
import department from 'app/entities/department/department.reducer';
// prettier-ignore
import task from 'app/entities/task/task.reducer';
// prettier-ignore
import employee from 'app/entities/employee/employee.reducer';
// prettier-ignore
import job from 'app/entities/job/job.reducer';
// prettier-ignore
import jobHistory from 'app/entities/job-history/job-history.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const rootReducer = {
  authentication,
  locale,
  applicationProfile,
  administration,
  userManagement,
  region,
  country,
  location,
  department,
  task,
  employee,
  job,
  jobHistory,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
  loadingBar,
};

export default rootReducer;
