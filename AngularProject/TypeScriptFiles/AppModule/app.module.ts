import { MyAppModule } from './../Network/myapp.module';
import { MyAppComponent } from './../Network/myapp.component';
import { AboutUsComponent } from './../AboutUsModule/aboutus.component';
import { AboutUsModule } from './../AboutUsModule/aboutus.module';
import { NgModule } from "@angular/core"
import { AppComponent, CustomerComponent, ProductComponent } from "./app.component"
import { BrowserModule } from "@angular/platform-browser"
import { EmployeeModule } from "../EmployeeModule/emp.module";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeComponent } from "../EmployeeModule/emp.component";


const c: Routes = [{
    path: 'Customer',
    component: CustomerComponent
},
{ path: 'Product', component: ProductComponent },
{ path: 'Employee', component: EmployeeComponent },
{ path: 'AboutUs', component: AboutUsComponent },
{ path: 'GetData', component: MyAppComponent }
];

@NgModule({
    imports: [BrowserModule, EmployeeModule, AboutUsModule,MyAppModule,
        RouterModule.forRoot(c, { useHash: true })],

    declarations: [AppComponent, CustomerComponent, ProductComponent, MyAppComponent],

    bootstrap: [AppComponent]
})
export class AppModule {

}