export function handleHTTPerrors(error) {
    const { statusCode } = error.response.data;
    switch (statusCode) {
        case 400:
            return error.response.data.message[0];
        case 401:
        case 402:
        case 403:
        case 409:
            return error.response.data.message;
        default:
            return error.response.data.message;
    }

}