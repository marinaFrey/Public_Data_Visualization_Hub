import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectFiltersComponent } from './project-filters/project-filters.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MemberItemComponent } from './member-item/member-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailsComponent,
    ProjectCardComponent,
    ToolbarComponent,
    ProjectListComponent,
    ProjectFiltersComponent,
    HomeComponent,
    AboutComponent,
    MemberItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
