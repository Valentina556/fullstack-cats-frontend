import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Breed } from '../../../../shared/models/breed.model';

@Component({
  selector: 'app-breed-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './breed-table.html',
  styleUrl: './breed-table.scss'
})
export class BreedTable {
  @Input() breeds: Breed[] = [];
  @Input('selected-breed-id') selectedBreedId?: string;
  @Output() breedSelected = new EventEmitter<string>();

  searchQuery: string = '';
  selectedBreedName: string = '';

  applyFilters() {
    let filteredBreeds = [...this.breeds];
    
    // Filtrar por nombre si hay una búsqueda
    if (this.searchQuery) {
      const searchLower = this.searchQuery.toLowerCase();
      filteredBreeds = filteredBreeds.filter(breed =>
        breed.name.toLowerCase().includes(searchLower)
      );
    }

    // Filtrar por raza seleccionada
    if (this.selectedBreedName) {
      filteredBreeds = filteredBreeds.filter(breed =>
        breed.name === this.selectedBreedName
      );
    }

    // Emitir resultados filtrados
    if (filteredBreeds.length > 0) {
      this.breedSelected.emit(filteredBreeds[0].id);
    }
  }

  onBreedSelect(breedName: string) {
    this.selectedBreedName = breedName;
    this.applyFilters();
  }

  onSearch() {
    this.selectedBreedName = ''; // Limpiar la selección del dropdown al buscar
    this.applyFilters();
  }
}
