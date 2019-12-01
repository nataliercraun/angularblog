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
         MatButtonModule,
         MatInputModule} from '@angular/material';
import { TravelComponent } from './travel/travel.component';
import { FoodComponent } from './food/food.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './auth/_helpers/error.interceptor';
import { fakeBackendProvider } from './auth/_helpers/fake.backend';
import { JwtInterceptor } from './auth/_helpers/jwt.interceptor';
import { HomeComponent } from './home/home.component';
import { CustomizeComponent } from './customize/customize.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelComponent,
    FoodComponent,
    ArchitectureComponent,
    LoginComponent,
    HomeComponent,
    CustomizeComponent
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
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
