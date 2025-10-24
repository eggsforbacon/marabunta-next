export type FetchOptions = Omit<RequestInit, 'body'> & {
    body?: BodyInit | null | Record<string, unknown>;
};


export const fetchURI = async <T>(
    uri: string,
    options?: FetchOptions
): Promise<T> => {
    let response: Response;
    if (!options) {
        response = await fetch(uri);
    } else {
        const body = JSON.stringify(options.body);
        const headers = {
            'Content-Type': 'application/json',
            ...(options.headers || {}),
        };
        response = await fetch(uri, {
            ...options,
            headers,
            body,
        });
    }
    return await response.json();
}

export const sendContactForm = async (data : {[key : string]: string}) => {
    return fetch('/api/contact', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    });
}