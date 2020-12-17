import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('Banking main screen', () => {
  beforeAll( () => {
    console.log('Banking screen');
    console.log(navigator.appVersion + ' on ' + navigator.platform );
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  afterEach( () =>  {
  });

  afterAll( () =>  {
    console.log('Completed Banking screen Test');
  });

  xit('should create the Baby Bank app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  /*
  it('should have as title "Baby Bank"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Baby Bank');
  });
  */

  xit('header row should show "Baby Bank"', () => {
    const ans = getMessage('header');
    expect(ans).toContain('Baby Bank');
  });

  xit('should only have 3 menu actions', () => {
    const numTags = getCountByTag('li' , 'menu');
    expect(numTags).toBe(3);
  });

  xit('footer row should show "Your money is safe with us!"', () => {
    const ans = getMessage('footer');
    expect(ans).toContain('Your money is safe with us!');
  });

  xit('Desposit link should say "Deposit funds"', () => {
    const ans = getMessageById('deposit');
    expect(ans).toContain('Deposit funds');
  });

  it('Withdrawal link should say "Withdraw cash"', () => {
    const ans = getMessageById('withdraw');
    expect(ans).toContain('Withdraw cash');
  });
  xit('Transfer link should say "Transfer funds"', () => {
    const ans = getMessageById('transfer');
    expect(ans).toContain('Transfer funds');
  });

  function getMessageById(id: string) {
    TestBed.createComponent(AppComponent);
    const ans = document.getElementById(id);
    return ans.textContent;
  }

  function getCountByTag(tag: string , from: string) {
    TestBed.createComponent(AppComponent);
    const ans = document.getElementById(from);
    const elt = ans.getElementsByTagName(tag);
    return elt.length;
  }
  function getMessage(element: string) {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    return compiled.querySelector(element).textContent;
  }

  /*
    it('should permit withdrawal if sufficient funds', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.balance = 2000;    // Set the component balance
    const withdrawal = 200;
    const decision = app.ShouldCashBeDisbursed(withdrawal);
    expect(decision).toBe(true);
    expect(app.balance).toBe(1800);
  });

  it('should not permit withdrawal if insufficient funds', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.balance = 500;    // Set the component balance
    const withdrawal = 1200;
    const decision = app.ShouldCashBeDisbursed(withdrawal);
    expect(decision).toBe(false);
  });
  */
});
