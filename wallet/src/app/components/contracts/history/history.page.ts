import { Component, OnInit } from '@angular/core'
declare var require: any;

import { AccountService } from '../../../services/account.service';
import { LSCXContractService } from '../../../services/LSCX-contract.service';


@Component({
  selector: 'history-page',
  templateUrl: './history.html'
})
export class HistoryPage implements OnInit {
  constructor(protected _account: AccountService, private _LSCXcontract: LSCXContractService) {
  }
  ngOnInit() {
  }


}
