import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxOrgChartModule } from 'ngx-org-chart';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { D3OrgChartComponent } from './d3-org-chart/d3-org-chart.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgxOrgChartModule],
  declarations: [AppComponent, HelloComponent, D3OrgChartComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
