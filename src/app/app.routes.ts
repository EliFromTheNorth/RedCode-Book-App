import { Routes } from '@angular/router';
import { AddBook } from './add-book/add-book';
import { EditBook } from './edit-book/edit-book';
import { Home } from './home/home';
import { Citat } from './citat/citat';
import { AddCitat } from './add-citat/add-citat';
import { EditCitat } from './edit-citat/edit-citat';
import { Login } from './login/login';
import { Register } from './register/register';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'add-book', component: AddBook },
  { path: 'edit-book/:id', component: EditBook },
  { path: 'citat', component: Citat },
  { path: 'add-citat', component: AddCitat },
  { path: 'edit-citat/:id', component: EditCitat },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
];


