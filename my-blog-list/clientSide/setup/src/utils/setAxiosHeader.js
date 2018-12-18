

export const setAxiosHeader = () => {
    let user = localStorage.getItem("user");
    const headers = { headers: { authorization: user } };
    return headers;
}
