import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { HeaderCategoryComponent } from './components/header-category/header-category.component';
import { BrandingComponent } from './components/branding/branding.component';
import { MostPopularComponent } from './components/most-popular/most-popular.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { NormalProductComponent } from './components/normal-product/normal-product.component';
import { FooterFormComponent } from './components/footer-form/footer-form.component';
import { FooterRelatedInforComponent } from './components/footer-related-infor/footer-related-infor.component';
import { ContentComponent } from './layout/content/content.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderCategoryComponent,
    BrandingComponent,
    MostPopularComponent,
    ProductItemComponent,
    NormalProductComponent,
    FooterFormComponent,
    FooterRelatedInforComponent,
    ContentComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
