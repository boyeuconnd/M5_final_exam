import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IBook} from '../../model/ibook';
import {BookServiceService} from '../../service/book-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  editBookForm:FormGroup;
  editBookId:string;
  editBook: IBook;

  constructor(private bookService:BookServiceService,
              private fb:FormBuilder,
              private activatedRoute: ActivatedRoute,
              private route:Router) {
    this.editBookId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.editBookId);

  }

  ngOnInit(): void {
    this.editBookForm = this.fb.group({
      id:[''],
      title:[''],
      author:[''],
      description:[''],
    });
    this.findBookById();
  }

  findBookById(){
    this.bookService.getBookById(+this.editBookId).subscribe((data)=>{
      this.editBookForm.patchValue(data);
    })
  }

  updateBook() {
    let bodyData:IBook = this.editBookForm.value;
    this.bookService.updateBookById(+this.editBookId,bodyData).subscribe((data)=>{
      console.log(data);
      alert("Update success")
    })
    this.route.navigate(['books']);

  }
}
