import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './layout/content/content.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [{
  path: '',
  component: ContentComponent,
  children: [
    {
      path:'',
      component: HomePageComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
