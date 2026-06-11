import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookService, Book } from '../book';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
  }

  deleteBook(id: number, title: string) {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;
    this.bookService.deleteBook(id).subscribe(() => {
      this.books = this.books.filter(b => b.id !== id);
    });
  }
}
