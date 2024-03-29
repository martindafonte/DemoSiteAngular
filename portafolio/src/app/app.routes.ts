import { Routes, RouterModule } from '@angular/router';

import {
    AboutComponent, PortfolioComponent, ItemComponent, SearchComponent
} from "./components/index.paginas";


const routes: Routes = [
    { path: 'home', component: PortfolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto/:id', component: ItemComponent },
    { path: 'search/:termino', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
    //{ path: 'staticPath', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];


export const app_routing = RouterModule.forRoot(routes, { useHash: true });
