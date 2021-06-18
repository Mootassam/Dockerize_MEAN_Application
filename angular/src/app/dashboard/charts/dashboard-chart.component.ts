import {
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Chart } from 'chart.js';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
})
export class DashboardChartComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas;

  @Input('props')
  props;

  chart = null;

  ngOnInit(): void {
    this.chart = new Chart(
      this.canvas.nativeElement,
      this.props,
      
    );
    var title= i18n('dashboard.chart.title'); 
var text = i18n('dashboard.chart.content'); 
    Chart.plugins.register({
      afterDraw: function(chart) {
        if (chart.data.datasets[0].data.length === 0) {
          // No data is present
          var ctx = chart.chart.ctx;
          var width = chart.chart.width;
          var height = chart.chart.height;
          chart.clear();
    
          ctx.save();
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.font = "16px normal 'Helvetica Nueue'";
          // chart.options.title.text <=== gets title from chart 
          // width / 2 <=== centers title on canvas 
          // 18 <=== aligns text 18 pixels from top, just like Chart.js 
          ctx.fillText(title, width / 2, 18); // <====   ADDS TITLE
          ctx.fillText(text, width / 2, height / 2);
          ctx.restore();
        }
    }
  });
    
  }
}
