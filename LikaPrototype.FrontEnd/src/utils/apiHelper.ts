const rootPath = process.env.REACT_APP_API_URL;
export type SearchParam = {
    name: string;
    value: string;
};
export class ApiHelper {
    static parseUrl(urlStr: string, searchParams?: SearchParam[]): URL {
        const url = new URL(urlStr, rootPath);
        if (searchParams) {
            searchParams.forEach((p) => {
                url.searchParams.append(p.name, p.value);
            });
        }
        return url;
    }
    static fetch(
        url: string | URL,
        method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
        token: string | null,
        body?: any,
        headers?: any,
        customOptions?: any
    ) {
        let options: RequestInit = {
            method: method,
            headers: {},
            body: body ? JSON.stringify(body) : null,
        };
        if (token) {
            options.headers = {
                ...options.headers,
                Authorization: 'Bearer ' + token,
            };
        }
        if (body) {
            options.headers = {
                'Content-Type': 'application/json;charset=utf-8',
                ...options.headers,
            };
        }
        if (headers) {
            options.headers = {
                ...options.headers,
                ...headers,
            };
        }
        if (customOptions) {
            options = {
                ...options,
                ...customOptions,
            };
        }

        return fetch(url.toString(), options);
    }
}

export let urls = {
    root: () => ApiHelper.parseUrl(''),
    auth: {
        login: () => ApiHelper.parseUrl('./auth/login'),
        me: () => ApiHelper.parseUrl('./auth/me'),
    },
    videos: {
        allVideos: () => ApiHelper.parseUrl('./api/posts'),
        reportViewed: () => ApiHelper.parseUrl('./api/reportViewed'),
        regions: () => ApiHelper.parseUrl('./api/region'),
    },
};

export let spaUrls = {
    progress: () => '/progress',
    login: () => '/login',
    signup: () => '/signup',
    // TODO: add videos filters to url
    carouselView: () => '/videos/carousel',
    tableView: () => '/videos/table',
    subscriptions: () => '/subscriptions',
    policy: {
        policy: () => '/policy',
        privacyPolicy: () => '/policy/privacy-policy',
        termsConditions: () => '/policy/terms-conditions',
    },
    contact: () => '/contact',
};

export let externalUrls = {
    exanple: () => 'http://externalurlexample/',
};
