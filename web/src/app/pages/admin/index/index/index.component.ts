import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { GoodService } from '../../../../core/service/good.service';
import { Good } from '../../../../common/good';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  name: Array<string>;

  number: Array<number>;

  chartOption: EChartOption;

  constructor(private goodService: GoodService) {
  }

  ngOnInit() {
    this.goodService.getAll().subscribe((goods: Array<Good>) => {
      this.countSubjectNumber(goods);
    });

    /** 初始化 */
    this.name = new Array<string>();
    this.number = new Array<number>();

  }

  public countSubjectNumber(goods: Array<Good>) {
    goods.forEach((good) => {
      this.name.push(good.name);
      this.number.push(good.stock);
      this.number.sort((a, b) => {
        return -a - b;
      });
      this.chartOption = {
        title: {
          text: '各货物库统计表'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: this.name

        },
        series: [
          {
            name: '库存',
            type: 'bar',
            itemStyle: {
              color: '#09BB07'
            },
            data: this.number
          }
        ]
      };
    });
  }

}
