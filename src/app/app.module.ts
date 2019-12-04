import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteComponent } from './quote/quote.component';
import { HighlighteQuoteDirective } from './highlighte-quote.directive';
import { TimeCountPipe } from './time-count.pipe';
import { FormComponent } from './form/form.component';
import { TimeAgoPipe } from 'time-ago-pipe';

@NgModule({
	declarations: [
		AppComponent,
		QuoteDetailsComponent,
		QuoteComponent,
		HighlighteQuoteDirective,
		TimeCountPipe,
		FormComponent,
		TimeAgoPipe
	],
	imports: [ BrowserModule, AppRoutingModule, FormsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
