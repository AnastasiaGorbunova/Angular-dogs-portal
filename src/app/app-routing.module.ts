import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/news',
    pathMatch: 'full'
  },
  {
    path: 'dogs',
    loadChildren: './dogs/dogs.module#DogsModule',
    // component: NewsComponent
  },
  {
    path: 'news',
    loadChildren: './news/news.module#NewsModule',
    // component: DogsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
