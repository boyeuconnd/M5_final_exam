import { Component, OnInit } from '@angular/core';
import {BookServiceService} from '../../service/book-service.service';
import {IBook} from '../../model/ibook';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookList:IBook[];

  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.getBookList();
  }

  getBookList(): IBook[]{
    this.bookService.getAllBook().subscribe((data:any)=>{
      this.bookList = data;
      console.log(this.bookList);
    })
    return this.bookList;
  }

  deleteBook(id: number) {
    let deleteBookId:number = id;
    console.log(deleteBookId);
    if(confirm("Bạn có thực sự muốn xóa?")){
      this.bookService.deleteById(deleteBookId).subscribe(
        next =>{this.bookList = this.getBookList();
        },
        error => {
          alert("error when delete user")
        }
      );
    }

  }
}
