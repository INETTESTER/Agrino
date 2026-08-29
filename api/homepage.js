import http from 'k6/http';

export function homepage() {
    const url = 'https://uat-adr-dtam.one.th/';
    // const params = {
    //     // timeout: '300s',
    // };
    const response = http.get(url);
    if (response.status !== 200) {
        console.log(`REQ_LOG | vu:${__VU} | status:${response.status} | error:"${response.error}" | duration:${response.timings.duration}ms`);
    }
    return response;
}