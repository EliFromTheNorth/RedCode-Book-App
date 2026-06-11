import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CitatService } from '../citat.service';

@Component({
  selector: 'app-add-citat',
  imports: [FormsModule],
  templateUrl: './add-citat.html',
  styleUrl: './add-citat.css',
})
export class AddCitat {
  citat = { text: '', author: '' };

  constructor(private citatService: CitatService, private router: Router) {}

  onSubmit() {
    this.citatService.addCitat(this.citat).subscribe(() => {
      this.router.navigate(['/citat']);
    });
  }
}
