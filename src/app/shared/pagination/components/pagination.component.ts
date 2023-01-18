import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { paginate } from '../models/paginate';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
 
    @Output() changePage = new EventEmitter<number>();
    //the virtual value
    @Input() initialPage = 1;
    @Input() totalPages= 10;

    pager:any;

    ngOnInit() {  
     this.pager= new paginate(this.totalPages ,this.initialPage);     
    }

    setPage(page: number) {
        this.changePage.emit(page);
        this.pager.currentPage=page;
    }
}


