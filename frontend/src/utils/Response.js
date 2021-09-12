export const getStandardResponse = (status, mssg, data, type) => {
    return {
        status,
        mssg,
        data,
        type
    }
}