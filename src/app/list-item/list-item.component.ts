import { Component, Input } from '@angular/core';
import { singlePokemonResponse } from '../types/types';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() pokemon!: singlePokemonResponse;
  constructor() {}

  ngOnInit(): void {}
}
