import http from 'k6/http';
import { domain, token } from './env.js';

export function questionnaire() {
    const url = `${domain}/api/v1/patient/sessions/00047900-c245-4423-ba31-a454910f6977/questionnaire`;

    const params = {
        headers: {
            'Cookie': 'SRV_ID=67532ccde8b9888',
            'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6InBhdGllbnQtand0LWtleS0xIiwidHlwIjoiSldUIn0.eyJhdWQiOlsiYWRyLWJhY2tlbmQtcGF0aWVudCJdLCJlbnRyeV9zZXNzaW9uX2lkIjoiMDAwNDc5MDAtYzI0NS00NDIzLWJhMzEtYTQ1NDkxMGY2OTc3IiwiZXhwIjoxNzg3ODQ0OTgxLCJpYXQiOjE3ODc4NDQwODEsImlzcyI6ImFkci1iYWNrZW5kLXBhdGllbnQiLCJqdGkiOiIyMDI5MmMzNi1kNTk3LTRjZjQtYmU1ZS1lMDMwZDQ3ZWJkOTgiLCJuYmYiOjE3ODc4NDQwODEsInBhdGllbnRfaWQiOiIzNDBjZmRjZS01YTZhLTRkZWQtYTQ0ZS1hODNlZDVmNGZkZDMiLCJyb2xlIjoicGF0aWVudCIsInNjb3BlIjpbImFkcjphc3Nlc3NtZW50OnJlYWQiLCJhZHI6YXNzZXNzbWVudDp3cml0ZSIsImFkcjphc3Nlc3NtZW50OmVtZXJnZW5jeSJdLCJzZXNzaW9uX2lkIjoiMDAwNDc5MDAtYzI0NS00NDIzLWJhMzEtYTQ1NDkxMGY2OTc3Iiwic3ViIjoiMzQwY2ZkY2UtNWE2YS00ZGVkLWE0NGUtYTgzZWQ1ZjRmZGQzIiwidG9rZW5fdXNlIjoiYWRyX3BhdGllbnRfYWNjZXNzIn0.b32WcuwghiV7RNTYa4CkO-z23vPERXFlUJgYJNg-UqDxv-U1J58Y2BoFNh_Od6grc0lNLZWDlNHvVkzp7hB-R5CSmdiuKPKn7nXgLFf7X6bKyvLWqCLLWbckxDcvaMVXQ3Ysd6TcYhcEZ6n3DqW2BZeKg1cVvpoa_Mt-3bGh4oosWaDAhBu3hn02stHJRbVWKHazuPIVYOsLF7L71_MJgDmsM-X82N8LCVo7jdqEGh7Geoc7qyhPzx8hLg-PpKQ9iZCeL7YyvEjJUYdno_-_gLBPzDFtDRcACDG7rzS6Q9boF7izrg6v1kRjXdRxq9Sr3s7ru9JCsHndVMLB9rLtUg`,
        },
    };

    const response = http.get(url, params);

    //console.log(response.body);

    return response;
}