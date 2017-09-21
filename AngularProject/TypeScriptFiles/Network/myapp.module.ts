import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { MyAppComponent }  from './myapp.component';
import { ObservableComponent }  from './observable.component';
import { PromiseComponent }  from './promise.component';
import { BookService } from './book.service';

@NgModule({
  imports: [     
        BrowserModule,
		HttpModule
  ],
  declarations: [
        MyAppComponent,
		ObservableComponent,
		PromiseComponent
  ],
  providers: [
        BookService
  ]
  
})
export class MyAppModule { }
