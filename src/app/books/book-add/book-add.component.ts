import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookServiceService} from '../../service/book-service.service';
import {IBook} from '../../model/ibook';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  newBookForm:FormGroup;

  constructor(private bookService:BookServiceService,
              private fb:FormBuilder,
              private route:Router) { }

  ngOnInit(): void {
    this.newBookForm = this.fb.group({
        title:[null,[Validators.required,Validators.minLength(4)]],
        author:[null,[Validators.required,Validators.minLength(4)]],
        description:['']
      }

    )
  }

  createNewUser() {
    let newBook:IBook = this.newBookForm.value;
    // console.log(newBook);
    this.bookService.createBook(newBook).subscribe(()=>{
      alert("Add book success!");
      this.route.navigate(['books'])

    },error => {alert("Add book not finish")})
  }

  get title(){
    return this.newBookForm.get('title');
  }
  get author(){
    return this.newBookForm.get('author');
  }
}
