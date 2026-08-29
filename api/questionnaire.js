import http from 'k6/http';
import { domain } from './env.js';

export function questionnaire() {
    const url = `${domain}/api/v1/patient/sessions/74f4d176-dc87-4672-9037-de0ffd2532e3/questionnaire`;
    const params = {
        headers: {
            'Authorization': `Bearer`,
        },
        timeout: '300s',
    };
    const response = http.get(url, params);
    // if (response.status !== 200) {
    //     console.log(`REQ_LOG | vu:${__VU} | status:${response.status} | error:"${response.error}" | duration:${response.timings.duration}ms`);
    // }
    return response;
}