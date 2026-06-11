import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book';

@Component({
  selector: 'app-add-book',
  imports: [FormsModule],
  templateUrl: './add-book.html',
  styleUrl: './add-book.css',
})
export class AddBook {
  book = {
    title: '',
    author: '',
    publishDate: null as number | null
  };

  constructor(private bookService: BookService, private router: Router) {}

  onSubmit() {
    this.bookService.addBook(this.book).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
