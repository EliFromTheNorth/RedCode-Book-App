import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CitatService, Citat as CitatItem } from '../citat.service';

@Component({
  selector: 'app-citat',
  imports: [RouterLink, CommonModule],
  templateUrl: './citat.html',
  styleUrl: './citat.css',
})
export class Citat implements OnInit {
  citater: CitatItem[] = [];

  constructor(private citatService: CitatService) {}

  ngOnInit() {
    this.citatService.getCitater().subscribe(citater => {
      this.citater = citater;
    });
  }

  deleteCitat(id: number, text: string) {
    if (!confirm(`Are you sure you want to delete "${text}"?`)) return;
    this.citatService.deleteCitat(id).subscribe(() => {
      this.citater = this.citater.filter(c => c.id !== id);
    });
  }
}
