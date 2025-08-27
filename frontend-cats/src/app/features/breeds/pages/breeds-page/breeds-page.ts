import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BreedService } from '../../../../core/services/breed'; 
import { Breed } from '../../../../shared/models/breed.model';
import { Image } from '../../../../shared/models/image.model';
import { FormsModule } from '@angular/forms';
import { BreedTable } from '../../components/breed-table/breed-table';

@Component({
  selector: 'app-breeds-page',
  templateUrl: './breeds-page.html',
  styleUrls: ['./breeds-page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BreedTable
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class BreedsPageComponent {
  breeds: Breed[] = [];
  selectedBreed?: Breed;
  images: Image[] = [];
  displayedColumns = ['name', 'origin', 'life_span'];

  constructor(private breedService: BreedService) {
    this.loadBreeds();
  }

  loadBreeds() {
    this.breedService.getBreeds().subscribe(data => this.breeds = data);
  }

  onBreedSelected(breedId: string) {
    this.breedService.getBreedById(breedId).subscribe(data => {
      this.selectedBreed = data;
      this.loadImages(breedId);
    });
  }

  loadImages(breedId: string) {
    this.breedService.getImagesByBreedId(breedId).subscribe(data => this.images = data);
  }

  selectFromTable(row: Breed) {
    this.onBreedSelected(row.id);
  }
}
