import * as _ from 'lodash';
const apiKey = 'AIzaSyDCCf6Z7ywmC4Kbv6C0AaP6zsZm5D08Fuw';
const customSearchApiId = '017290804624526643868:tjg_kfigjpe';

export interface SearchResultItem {
    title: string;
    link: string;
    snippet: string;
}

export interface SearchResults {
    items: SearchResultItem[];
}
const baseUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${customSearchApiId}`;

const getSearchUri = (query: string) => {
    return `${baseUrl}&q=${query}`;
};

async function makeRequest(url: string) {
    const r = await fetch(url);
    const res = await r.json();
    return res;
}

export function imageSearch(query: string): Promise<SearchResults> {
    const url = `${getSearchUri(query)}&searchType=image&imgSize=medium`;
    return makeRequest(url);
}
export function search(query: string): Promise<SearchResults> {
    const url = getSearchUri(query);
    return makeRequest(url);
}
