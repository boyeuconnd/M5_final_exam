import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IBook} from '../../model/ibook';
import {BookServiceService} from '../../service/book-service.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  bookId:number;
  bookDetail:IBook = {
    title:'',
    author:'',
    description:'',
    id:0
  };

  constructor(private activatedRoute:ActivatedRoute,
              private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.bookId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getBook();

  }

  getBook(){
    this.bookService.getBookById(this.bookId).subscribe((data)=>{
      this.bookDetail = data;
    },()=>{
      alert("Error when get book detail.")
    });
  }

}
