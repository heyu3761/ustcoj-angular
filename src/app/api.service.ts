import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

'../node_modules/jquery/dist/jquery.min.js';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

const apiUrl = {
    'news': 'http://210.45.122.58:8000/api/news/',
    'user': 'http://210.45.122.58:8000/api/user/',
    'group': 'http://210.45.122.58:8000/api/group/',
    'group_member': 'http://210.45.122.58:8000/api/group_member/',
    'problem': 'http://210.45.122.58:8000/api/problem/'
};

const format = '?format=json';

@Injectable({providedIn: 'root'})
export class ApiService {
    constructor(private http: HttpClient) {
    }

    getNews() {
        return this.http.get(apiUrl['news'] + format, httpOptions);
        // return this.http.get('/src/assets/test/news.json', httpOptions);
    }

    getContests() {
        // return this.http.get(apiUrl['contest'] + format, httpOptions);
        // return this.http.get('/src/assets/test/news.json', httpOptions);
    }

    getProblems() {
        return this.http.get(apiUrl['problem'] + format, httpOptions);
        // return this.http.get('/src/assets/test/problems.json', httpOptions);
    }
}
