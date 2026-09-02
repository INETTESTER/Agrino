//=============================== import API =================================
import { sleep, scenario, error_check, options } from '../config/common.js';
export { options }; const cid = __ENV.cid || '1'; let response;
import { dispenses } from '../api/dispenses.js';
import { questionnaire } from '../api/questionnaire.js';
import { health } from '../api/health.js';
import { history } from '../api/history.js';
import { result } from '../api/result.js';
import { historysessionid } from '../api/historysessionId.js';
import { current } from '../api/current.js';
import { homepage } from '../api/homepage.js';
import { dashboardSummary } from '../api/dashboard_summary.js';
import { facilityDistribution } from '../api/facilitydistribution.js';
//============================================================================
export default function () {    //เรียกใช้ API ใน export default function
  //response = dispenses(cid)  // เปลี่ยน cid ก่อนยิงทุกครั้ง (บรรทัด 13 ที่ไฟล์ open.sh)
  // response = questionnaire()
  response = result()
  // response = history()
  // response = historysessionid()
  // response = current()
  // response = health()
  // response = dashboardSummary()
  // response = facilityDistribution()
  // response = homepage()
  error_check(response);
  sleep(1)
}