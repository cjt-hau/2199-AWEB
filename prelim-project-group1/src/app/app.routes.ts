import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { EmplistComponent } from './emplist/emplist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    { path : '', component : HomeComponent },
    { path : 'about', component : AboutComponent },
    { path : 'products', component : ProductsComponent },
    { path : 'emplist', component : EmplistComponent },
    { path: '**', component: PagenotfoundComponent }
];
