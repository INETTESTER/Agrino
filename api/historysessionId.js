import http from 'k6/http';
import { domain } from './env.js';

export function historysessionid() {
    const url = `${domain}/api/v1/patient/history/99865b43-920a-4b66-9d49-70ef2cc90d4d`;
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