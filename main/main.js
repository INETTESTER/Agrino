//=============================== import API =================================
import { sleep, scenario, error_check, options } from '../config/common.js';
export { options }; const cid = __ENV.cid || '1'; let response;
import { DownloadFile, GetProfile, PostProfile, PostProfile_2, PostProfile_3, UploadFile } from '../api/example.js';
import { dispenses } from '../api/dispenses.js';
//============================================================================
export default function () {    //เรียกใช้ API ใน export default function
  response = dispenses(cid)  // เปลี่ยน cid ก่อนยิงทุกครั้ง (บรรทัด 13 ที่ไฟล์ open.sh)
  error_check(response);
  sleep(1)
}