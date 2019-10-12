import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,
         MatTabsModule,
         MatButtonToggleModule,
         MatIconModule,
         MatGridListModule,
         MatButtonModule} from '@angular/material';
import { TravelComponent } from './travel/travel.component';
import { FoodComponent } from './food/food.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    TravelComponent,
    FoodComponent,
    ArchitectureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonToggleModule,
    FlexLayoutModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
