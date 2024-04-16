import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule ,provideHttpClient} from '@angular/common/http';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { provideAnimations} from '@angular/platform-browser/animations'
@NgModule({
  
    declarations: [
        AppComponent,
        FooterComponent,
       
    ],
    providers: [provideAnimations(),provideHttpClient()],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ProductComponent,
        HeaderComponent,
  ]
})
export class AppModule { }
