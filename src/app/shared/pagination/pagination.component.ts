import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit{
  
  constructor(){}
  
  ngOnInit(): void {
    
  }
  firstPage : number = 1;
  itemsPerPage: number = 5;
  currentPage: number = 1;
  pageNumber : number = 1;
  data: any[]=[];
  previousPages: number = 1;
  
  goToPage(pageNumber: number): void {
    if (!pageNumber || pageNumber <= 0 ||  pageNumber === 0 ) {
      if (pageNumber) {
        return;
      }
      pageNumber = this.previousPages;
    }

    this.currentPage = pageNumber;
    this.previousPages = pageNumber;
  }
  
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToCurrentPage(){
    this.currentPage  = this.firstPage;
    this.pageNumber = this.firstPage;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  get totalPages(): number {
    return Math.ceil(this.data.length / this.itemsPerPage);
  }

  get visibleData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.data.slice(startIndex, endIndex);
  }

}
