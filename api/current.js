import http from 'k6/http';
import { domain } from './env.js';

export function current() {
    const url = `${domain}/api/v1/patient/sessions/current`;
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