import { Routes, RouterModule } from '@angular/router';

import {
    AboutComponent, PortfolioComponent, ItemComponent
} from "./components/index.paginas";


const routes: Routes = [
    { path: '', component: PortfolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item', component: ItemComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
    //{ path: 'staticPath', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];


export const app_routing = RouterModule.forRoot(routes, { useHash: true });
