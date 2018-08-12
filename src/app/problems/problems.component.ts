import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {count} from 'rxjs/operators';

@Component({
    selector: 'app-problems',
    templateUrl: './problems.component.html',
    styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {

    problems_list: Array<object>;
    size = 25;
    page = 1;
    page_count = 0;

    constructor(private apiService: ApiService, private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.showProblems();
    }

    showProblems() {
        this.apiService.getProblems().subscribe(
            (data: Array<Object>) => {
                this.problems_list = data.slice(this.page * this.size - this.size, this.page * this.size);
                this.page_count = Math.ceil(data.length / this.size);
            }
        );
    }

    pageOffset(offset: number) {
        const next_page = this.page + offset;
        if (next_page >= 1 && next_page <= this.page_count) {
            this.page += offset;
            this.showProblems();
        }
    }

    catchEnter() {
        if (this.page < 1) {
            this.page = 1;
        } else if (this.page > this.page_count) {
            this.page = this.page_count;
        }
        this.showProblems();
    }
}
