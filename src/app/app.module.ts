import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import localesES from '@angular/common/locales/es';
import localesFR from '@angular/common/locales/fr';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {registerLocaleData} from '@angular/common';

// Locale configuration
registerLocaleData(localesES);
registerLocaleData(localesFR);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-ES' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
