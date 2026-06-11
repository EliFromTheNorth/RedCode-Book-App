import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { BookService } from '../book';

@Component({
  selector: 'app-add-book',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add-book.html',
  styleUrl: './add-book.css',
})
export class AddBook {
  book = {
    title: '',
    author: '',
    publishDate: ''
  };

  constructor(private bookService: BookService, private router: Router) {}

  onSubmit() {
    const bookToSend = { ...this.book, publishDate: Number(this.book.publishDate) };
    this.bookService.addBook(bookToSend).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
