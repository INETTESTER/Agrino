import http from 'k6/http';
import { domain } from './env.js';

export function history(token) {
    const url = `${domain}/api/v1/patient/history`;
    const params = {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        timeout: '300s',
    };
    const response = http.get(url, params);
    return response;
}