import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './books/book-list/book-list.component';
import {BookAddComponent} from './books/book-add/book-add.component';
import {BookEditComponent} from './books/book-edit/book-edit.component';
import {BookDetailComponent} from './books/book-detail/book-detail.component';




const routes: Routes = [
  {
    path: 'books',
    children:[
      {path:'', component:BookListComponent},
      {path:'create',component:BookAddComponent},
      {path:':id/edit',component: BookEditComponent},
      {path:':id',component:BookDetailComponent}

    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
