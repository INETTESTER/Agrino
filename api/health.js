import http from 'k6/http';
import { domain } from './env.js';

export function health() {
    const url = `${domain}/api/v1/health`;
    const params = {
        headers: {
            'Cookie': 'SRV_ID=594f0da5a905793f',
        },
        timeout: '300s',
    };
    const response = http.get(url, params);
    return response;
}