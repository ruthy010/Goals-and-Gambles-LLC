import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { Home1Component } from './components/pages/home1/home1.component';
import { Home2Component } from './components/pages/home2/home2.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { BloglistComponent } from './components/pages/bloglist/bloglist.component';
import { BlogdetailsComponent } from './components/pages/blogdetails/blogdetails.component';
import { ContactComponent } from './components/pages/contact/contact.component';


const routes: Routes = [
	{path: '', component: Home1Component},
    {path: 'home1', component: Home1Component},
	{path: 'home2', component: Home2Component},
	{path: 'about', component: AboutComponent},
	{path: 'services', component: ServicesComponent},
	{path: 'portfolio', component: PortfolioComponent},
	{path: 'bloglist', component: BloglistComponent},
	{path: 'blogdetails', component: BlogdetailsComponent},
	{path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
