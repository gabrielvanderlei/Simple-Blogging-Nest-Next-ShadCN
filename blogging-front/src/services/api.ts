export const endpoint = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/";

export const post = async (uri:string, content:unknown):Promise<any> => {
    return new Promise(async (resolve, reject) => {
        try {
            const request = await fetch(endpoint + uri, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            });

            resolve(await request.json());
        } catch(e) {
            reject(e)
        }
    });
}

export const get = (uri:string):Promise<any> => {
    return new Promise(async (resolve, reject) => {
        try {
            const request = await fetch(endpoint + uri, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            resolve(await request.json());
        } catch(e) {
            reject(e)
        }
    });
}