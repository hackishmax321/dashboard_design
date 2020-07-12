import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule, MatDividerModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatListModule, MatCardModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartComponent } from 'highcharts-angular';

// All Components
import { DashboardComponent } from './dashboard.component';
import { DefaultComponent } from 'src/app/pages/default/default.component';
import { SettingsComponent } from 'src/app/pages/settings/settings.component';
import { HeaderComponent } from 'src/app/pages/static/header/header.component';
import { FooterComponent } from 'src/app/pages/static/footer/footer.component';
import { SidebarComponent } from 'src/app/pages/static/sidebar/sidebar.component';
import { PostsComponent } from 'src/app/pages/posts/posts.component';
import { ChartAreaComponent } from 'src/app/pages/static/widgets/chart-area/chart-area.component';
import { ChartLineComponent } from 'src/app/pages/static/widgets/chart-line/chart-line.component';
import { ChartCardComponent } from 'src/app/pages/static/widgets/chart-card/chart-card.component';
import { ChartPieComponent } from 'src/app/pages/static/widgets/chart-pie/chart-pie.component';
import { SampleDataService } from 'src/app/services/sample-data.service';
import { TableComponent } from 'src/app/pages/static/widgets/table/table.component';





@NgModule({
  declarations: [
    DashboardComponent,
    DefaultComponent,
    SettingsComponent,
    PostsComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ChartAreaComponent,
    ChartLineComponent,
    ChartCardComponent,
    ChartPieComponent,
    TableComponent,
    HighchartsChartComponent
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
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [
    SampleDataService
  ]
})
export class DashboardModule { }
