import {NgModule} from "@angular/core"
import {MyComponent} from "./myApp.comp"
import {BrowserModule} from "@angular/platform-browser"

@NgModule(
    {
        declarations:[MyComponent],
        bootstrap:[MyComponent],
        imports:[BrowserModule]
    }
)
export class MyModule
{

}