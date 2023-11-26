const BASE_URL = "http://localhost:5501/api";

const baseRequest = async ({
    pathUrl = "/zoos",
    method = "GET",
    body = null,
}) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body);
        }

        const response = await fetch(`${BASE_URL}${pathUrl}`, reqParams);
        console.log(response);
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }

        return response;
    } catch (error) {
        console.error(error);
        // You can handle the error in a more specific way here
    }
};



const getAllZoos = async () => {
    const rawResponse = await baseRequest({ method: "GET" });
    console.log('Response from server:', rawResponse);
    const jsonData = await rawResponse.json();
    return jsonData;
}

const getSortedZoo = async () => {
    const rawResponse = await baseRequest({
        pathUrl: `/zoosort`,
        method: "GET",
    });
    const jsonData = await rawResponse.json();
    return jsonData;
}


const postZoo = (body) => baseRequest({
    method: "POST", body
});

const editZoo = (body) => baseRequest({method: "PUT", body});
const deleteZoo = (id) => baseRequest({pathUrl: `/zoos/${id}`, method: "DELETE"});