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
    return response;
}