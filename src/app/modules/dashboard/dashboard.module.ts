import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule, MatDividerModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatListModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

// All Components
import { DashboardComponent } from './dashboard.component';
import { DefaultComponent } from 'src/app/pages/default/default.component';
import { SettingsComponent } from 'src/app/pages/settings/settings.component';
import { HeaderComponent } from 'src/app/pages/static/header/header.component';
import { FooterComponent } from 'src/app/pages/static/footer/footer.component';
import { SidebarComponent } from 'src/app/pages/static/sidebar/sidebar.component';
import { PostsComponent } from 'src/app/pages/posts/posts.component';





@NgModule({
  declarations: [
    DashboardComponent,
    DefaultComponent,
    SettingsComponent,
    PostsComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatDividerModule, 
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    FlexLayoutModule
  ]
})
export class DashboardModule { }
