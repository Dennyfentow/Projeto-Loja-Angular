import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoresModule } from './stores/stores.module';
import { ProductsModule } from './products/products.module';
import { MainModule } from './main/main.module';
import { CoreModule } from './core/core.module';
import { SidenavModule } from './sidenav/sidenav.module';

registerLocaleData(localeBr); // Ainda não funciona

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    MainModule,
    StoresModule,
    ProductsModule,
    SidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
