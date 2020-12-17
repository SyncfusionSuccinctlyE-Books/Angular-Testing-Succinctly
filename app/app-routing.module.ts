import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';
import { DepositComponent } from './deposit/deposit.component';
import { TransferComponent } from './transfer/transfer.component';
import { stringify } from 'querystring';

const routes: Routes = [
  { path: 'withdrawal', component: WithdrawalComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'transfer', component: TransferComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public feePercent = .25;

  public DoIt() {
    let perf = 0;
    const inputMsg = 'Blaire Glacken';
    for ( let i = 0; i < inputMsg.length ; i--) {
      console.log(inputMsg.substr(i , 1));
    }


    perf += 5;
    if ( (perf < 5)) {

    }
  }
 }
