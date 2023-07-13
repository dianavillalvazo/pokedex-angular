import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListViewComponent } from './list-view/list-view.component';
import { PokemonDetailsViewComponent } from './pokemon-details-view/pokemon-details-view.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    ListViewComponent,
    PokemonDetailsViewComponent,
    PokemonSearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
