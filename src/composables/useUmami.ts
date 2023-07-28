import axios from "axios";
const wid = 'f1e56e6a-ea92-4228-b77e-e448f719a75b';
const api_base = 'https://umami.kanata-blog.eu.org/api/';
const headers = {
    'Authorization': 'Bearer 1BtienyC0Jt/UOuG6Npas/nr2ZAuLPOB1kVAsnpNlNxR8VR6Ghkm9QZ9HZ93DS/hDyKR/ftZhFYmFfqWHSRMWNZyyz71z9762VcdMcEjp7pi0HEVm1CJw0kAJ+ogac0b4Kvm3rIb5nMHh59Rck95Pcp+huK5lK19a3NYceyBv4aUexKlGMx0NNKJbVIBRhGGyfMlrszBgKsj28slyjh2bH+pdCUb5gu1o+0y15SJMNjP8YPK+UOK29exQ6eABhEuzTVlHf+G+Wt8ItwXai01rH6MYn8kMSdip3sFiatuBUPJ5ASKj04PS/LS1PfP6s1ZNTjlV9HcHxHVlV2Pbko+Gcf1EfATLbnaIw==',
    'Access-Control-Allow-Origin': '*'
};
// This token is only used for api requesting.And it's view only!
const instance = axios.create({
    baseURL: api_base,
    timeout: 12000,
    headers: headers
});
// GET /api/websites/{websiteId}/active
export async function useActive() {
    try {
        const response = await instance.get('websites/'+wid+'/active');
        return response.data[0]['x'];
    } catch (error) {
        console.error(error);
        return '-1';
    }
}
export async function useAllTimeStats() {
    try {
        const response = await instance.get('websites/'+wid+'/stats?startAt=1688745600000&endAt=1690559999999');
        return response.data;
    } catch (error) {
        console.error(error);
        return '-1';
    }
}
