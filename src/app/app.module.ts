import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import {MaterialModule} from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider
} from 'angularx-social-login';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule ,HTTP_INTERCEPTORS } from '@angular/common/http';
import {TokenInterceptorService} from './services/token-interceptor.service';
import { AuthGuard } from './guards/auth.guard';
import { TrendsComponent } from './components/trends/trends.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LogsComponent } from './components/logs/logs.component';
import { TestingComponent } from './components/testing/testing.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    OpportunitiesComponent,
    PageNotFoundComponent,
    TrendsComponent,
    LogsComponent,
    TestingComponent,

    // TrendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    HttpClientModule,
    FormsModule,
    NgxChartsModule,
    AgGridModule.withComponents()
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '809145045260-iv0crees9o30a7jkqieu7s8mr1siault.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
