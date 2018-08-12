import {Component, ElementRef, OnInit} from '@angular/core';
import {ApiService} from '../api.service';


@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

    news_list: Array<object>;

    constructor(private apiService: ApiService, private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.showNews();
    }

    showNews() {
        this.apiService.getNews().subscribe(
            (data: Array<Object>) => {
                this.news_list = data.slice(0, 3);
                for (const news of this.news_list) {
                    news['date'] = news['created'].substr(0, 10);
                }
            }
        );
    }

}
