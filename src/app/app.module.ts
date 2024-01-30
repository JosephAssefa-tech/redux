import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormComponent} from './form/form.component';
import {HttpClientModule} from '@angular/common/http';
import {ListComponent} from './list/list.component';
import {NgModule} from '@angular/core';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {ReactiveFormsModule} from '@angular/forms';
import {TodoState} from './states/todo.state';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
        TodoState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
