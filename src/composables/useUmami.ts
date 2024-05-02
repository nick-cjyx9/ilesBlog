const wid = 'f1e56e6a-ea92-4228-b77e-e448f719a75b';
const api_base = 'https://umami.nickchen.top/api/websites/';
const start_time = '1688745600000';
const end_time = (new Date().getTime()).toString();
const myInit = {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer F2GyCnLEf/5twFwqWTBd0XDqqqNxqVc/9Tni467a48uXFpeX1Wy67zKRSoqNIASiPyTSXjNbbdtUXSlBOMxQLhpA0iemboZoynHohj0DhhidJdggSc4TBzY4CbR3986RW0TpwMhTswPVeN75Y+qtM5EZNk1USkdy57OjCpRR75blFbzFvYO4PNtoGmZUhrlSqgyBW+Bt54nkWIuPvGYxA/WNc7Wn8N1fqAF+aG6r6fcMWS9Z6NKip/ykkgi5UAUxnXjxjdtA1Tg0gAEevMLruvWK7XlHwEJiMbyCpNfqKjFCxRLLUUZmX2SlKRMd2/oRl8rr1GkVCxe6maNVNV+xW71MD8pVoJa6Uw==',
    'Access-Control-Allow-Origin': '*'
  }
}
export async function useActive() {
  try {
    const response = await fetch(`${api_base}${wid}/active`, myInit);
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    const data = await response.json();
    return data[0]['x'] > 0 ? data[0]['x'] : 1;
  } catch (error) {
    console.error(error);
    return '-1';
  }
}
export async function useAllTimeStats() {
    var params = new URLSearchParams({
        startAt: start_time,
        endAt: end_time,
        unit: 'hour',
        timezone: 'Asia/Shanghai',
    })
    try {
        const response = await fetch(`${api_base}${wid}/stats?${params}`, myInit);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return '-1';
    }
}
export async function usePageView(route: string) {
    var params = new URLSearchParams({
        startAt: start_time,
        endAt: end_time,
        unit: 'hour',
        timezone: 'Asia/Shanghai',
        url: route
    });
    try {
        const response = await fetch(`${api_base}${wid}/pageviews?${params}`, myInit);
        const data = await response.json();
        let array = data['pageviews'];
        let count = 0;
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            count += element['y'];
        }
        return count;
    } catch (error) {
        console.error(error);
        return -1;
    }
}
