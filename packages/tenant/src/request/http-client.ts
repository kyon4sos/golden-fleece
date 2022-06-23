
// interface RespData<T> {
//     data?: T;
//     errMessage: string;
//     errorCode: number;
//     host?: string;
//     showType?: number;
//     success: boolean;
//     traceID?: string;
// }

// type methods = "post" | 'get' | "delete" | "put";

class HttpClient {

    // private httpClient: AxiosInstance;
    // constructor(client: AxiosInstance) {
    //     this.httpClient = client
    // }

    // async get<T>(url: string, param: unknown) {
    //     const data: unknown = await this.httpClient.get(url, param)
    //     const _data = data as RespData<T>
    //     return _data.data
    // }

    // async post<T>(url: string, param: unknown) {
    //     const data: unknown = await this.httpClient.post(url, param)
    //     const _data = data as RespData<T>
    //     return _data.data
    // }
    // async request<T>({
    //     method,
    //     param
    // }: {
    //     method: methods,
    //     param: any
    // }) {
    //     const data: unknown = await this.httpClient.apply(method, param)
    //     const _data = data as RespData<T>
    //     return _data.data
    // }
}

// const config = {
//     baseURL: 'https://localhost:3000/api/',
//     timeout: 10000,
//     headers: { 'X-Custom-Header': 'foobar' }
// }

// const client = axios.create(config)

// client.interceptors.request.use(_config => {
//     return _config;
// }, (err) => {
//     // console.log('httpClient.interceptors.request', err);
//     // Message.error(err.message)
//     return Promise.reject(err)
// })

// client.interceptors.response.use(response => {
//     // console.log(response);
//     const { data } = response
//     const { success, errMessage } = data as RespData<unknown>
//     if (!success) {
//         Message.error(errMessage)
//     }
//     return response.data;
// }, (err: Error) => {
//     // const { data } = err.response
//     // const errMessage = err.errMessage
//     // if (errMessage) {
//     //     Message.error(errMessage)
//     // } else {
//     //     Message.error("发送错误，请稍后再试")
//     // }
//     // return Promise.reject(err)
// })

const httpClient = new HttpClient()


export default httpClient