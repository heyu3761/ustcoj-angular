import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProblemsComponent} from './problems/problems.component';
import {MainComponent} from './main/main.component';

const routes: Routes = [
    {path: 'problems', component: ProblemsComponent},
    {path: 'main', component: MainComponent},
    {path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
