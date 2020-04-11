import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppComponent } from '../../../../app.component';
import { InOut } from '../../../../common/in-out';
import { Unit } from '../../../../common/unit';
import { UnitService } from '../../../../core/service/unit.service';
import { HttpErrorResponse } from '@angular/common/http';
import { InputGoodService } from '../../../../core/service/input-good.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {


  inOuts: Array<InOut>;

  constructor(private appComponent: AppComponent,
              private inputGoodService: InputGoodService) {
  }

  ngOnInit() {
    this.getAll();
  }

  public getAll() {
    this.inputGoodService.getAll()
      .subscribe((data: Array<InOut>) => {
        this.inOuts = data;
      }, () => {
        console.log('error');
      });
  }
}
