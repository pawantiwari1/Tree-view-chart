import {
  OnChanges,
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';
import TreeChart from 'd3-org-chart';

@Component({
  selector: 'app-d3-org-chart',
  templateUrl: './d3-org-chart.component.html',
  styleUrls: ['./d3-org-chart.component.css'],
})
export class D3OrgChartComponent implements OnInit, OnChanges {
  @ViewChild('chartContainer') chartContainer: ElementRef;
  @Input() data: any[];
  chart;
  nodes: any;
  constructor() {}

  ngOnInit() {
    this.createngxorgChart();
  }

  ngAfterViewInit() {
    if (!this.chart) {
      this.chart = new TreeChart();
    }
    this.updateChart();
  }

  ngOnChanges() {
    this.updateChart();
  }
  updateChart() {
    if (!this.data) {
      return;
    }
    if (!this.chart) {
      return;
    }
    this.chart
      .container(this.chartContainer.nativeElement)
      .data(this.data)
      .svgWidth(500)
      .initialZoom(0.4)
      .onNodeClick((d) => console.log(d + ' node clicked'))
      .render();
  }
  createngxorgChart() {
    this.nodes = [
      {
        name: 'Sundar Pichai',
        cssClass: 'ngx-org-ceo',
        image: '',
        title: 'Chief Executive Officer',
        childs: [
          {
            name: 'Thomas Kurian',
            cssClass: 'ngx-org-ceo',
            image: 'assets/node.svg',
            title: 'CEO, Google Cloud',
          },
          {
            name: 'Susan Wojcicki',
            cssClass: 'ngx-org-ceo',
            image: 'assets/node.svg',
            title: 'CEO, YouTube',
            childs: [
              {
                name: 'Beau Avril',
                cssClass: 'ngx-org-head',
                image: 'assets/node.svg',
                title: 'Global Head of Business Operations',
                childs: [],
              },
              {
                name: 'Tara Walpert Levy',
                cssClass: 'ngx-org-vp',
                image: 'assets/node.svg',
                title: 'VP, Agency and Brand Solutions',
                childs: [],
              },
              {
                name: 'Ariel Bardin',
                cssClass: 'ngx-org-vp',
                image: 'assets/node.svg',
                title: 'VP, Product Management',
                childs: [],
              },
            ],
          },
          {
            name: 'Jeff Dean',
            cssClass: 'ngx-org-head',
            image: 'assets/node.svg',
            title: 'Head of Artificial Intelligence',
            childs: [
              {
                name: 'David Feinberg',
                cssClass: 'ngx-org-ceo',
                image: 'assets/node.svg',
                title: 'CEO, Google Health',
                childs: [],
              },
            ],
          },
        ],
      },
    ];
  }
}
