---

## 表單驗證的用意

---

- 確認使用者輸入是否正確
- 降低因輸入錯誤而產生多餘的網路往返
- 降低伺服器不必要的負擔

---

## 有哪些輸入需要驗證

---

- **必要欄位**
    - 姓名、身分證字號、統一編號
- **輸入值必須在特定範圍**
    - 年齡限制、租借日期、生日
- **輸入值必須符合特定格式**
    - 電話號碼、email
- **長度限制**
    - 姓名的長度、產品名稱的長度 …

---

## HTML5 提供的基本驗證

---

- required
- minlength、maxlength
- pattern
- email
- min、max

---

## Angular 內建的驗證屬性

---

- required
- minlength、maxlength
- pattern
- email

---

## ngModel 提供驗證檢查的相關功能

---

- **errors**：驗證錯誤的訊息
    - **required**，檢查若此**欄位是空白**，則傳回 true
    - **minlength**、**maxlength**，檢查此欄位最短及最長的長度，**不符合**則傳回 true
    - **pattern**，使用 RegEx 驗算文字是否符合規則，**不符合**則傳回 true
    - **email**，欄位必須符合 email 規則，若**不符合**則傳回 true

---

## (實作) 使用 ngModel 的 Errors 屬性

---

- 匯入 FormsModule
- app.module.ts

```tsx
import { FormsModule } from '@angular/forms';

@NgModule({
	...
  imports: [
    BrowserModule,FormsModule
  ],
  ...
})
```

- 初始化文件
- app.component.ts

```tsx
rentRoom = { name: '', number: '', extNo: '', startDate: '', endDate: '' };
capacity = ['5人', '10人', '20人', '30人', '40人'];
```

- 初始畫面
- app.component.html

```html
<div class="container" style="margin: 20px">
  <h1>會議室預約單</h1>
  <form #f='ngForm' (ngSubmit)='f.form.valid'>
    <div class="form-group">
      <label for="name">租借人姓名</label>
      <input type="text" class="form-control" required name="name" 
      [(ngModel)]='rentRoom.name' #name='ngModel' minlength="4" placeholder="請輸入租借者的姓名">
      <div *ngIf="name.invalid && (name.dirty || name.touched)" class='alert alert-danger'>
        <div *ngIf="name.errors?.['required']">必須輸入租借人!!</div>
        <div *ngIf="name.errors?.['minlength']">名字長度必須大於4</div>
      </div>
    </div>
    <div class="form-group">
      <label for="number">參與人數</label>
      <select class="form-control" required name="number" 
      [(ngModel)]='rentRoom.number' #number='ngModel'>
        <option value="">請選擇參與人數</option>
        <option *ngFor="let cap of capacity" [value]='cap'> {{cap}} </option>
      </select>
    </div>
    <div *ngIf="number.invalid && (number.dirty || number.touched)" class='alert alert-danger'>
      <div *ngIf="number.errors?.['required']">請選擇參與人數!!</div>
    </div>

    <div class="form-group">
      <label for="size">分機號碼</label>
      <input type="number" class="form-control" placeholder="租借者的辦公室分機號碼" [(ngModel)]='rentRoom.extNo' 
      #extNo='ngModel' required CheckExtNo name="extNo" pattern="[0-9]{4}" title="4個數字">
      <div *ngIf="extNo.invalid && (extNo.dirty || extNo.touched)" class='alert alert-danger'>
        <div *ngIf="extNo.errors?.['required']">分析號碼必須填寫</div>
        <div *ngIf="extNo.errors?.['pattern']">分機號碼必須是四個數字</div>
        <div *ngIf="extNo.errors?.['CheckExtNo']">
          {{ extNo.errors?.['CheckExtNo'].requiredValue}}
        </div>
      </div>
    </div>
    <div class="form-group" ngModelGroup='rentDate' #rentDate='ngModelGroup' 
    [CheckEndDate]='["startDate", "endDate"]'>
      <label for="size">租借期間</label>
      <input type="date" class="form-control" placeholder="起始時間" required name="startDate" [(ngModel)]='rentRoom.startDate' #startDate='ngModel'>
      <input type="date" class="form-control" placeholder="退還時間" required name="endDate" [(ngModel)]='rentRoom.endDate' #endDate='ngModel'>
      <div *ngIf="rentDate.invalid && (rentDate.dirty || rentDate.touched)" class='alert alert-danger'>
        <div *ngIf="startDate.errors?.['required'] || endDate.errors?.['required']">租借期間必須填寫</div>
        <div *ngIf="rentDate.errors?.['CheckEndDate']">
          {{ rentDate.errors?.['CheckEndDate'].requiredValue }}
        </div>
      </div>
    </div>
    <div>
      <button type="submit" [disabled]='f.invalid'
      [ngClass]="{'btn':true, 'btn-success':f.valid, 'btn-warning':f.invalid}">Submit</button>

      <p>Form value:{{f.value|json}}</p>
      <p>Form status:{{f.status|json}}</p>
      <p>rentRoom:{{rentRoom|json}}</p>
    </div>
  </form>
</div>

```

![Untitled](https://i.imgur.com/yzIDjiW.png)

---

## (實作) 檢查分機號碼必須介於 1000 - 1999 之間

---

自訂驗證項的指令

- NG_VALIDATORS 的提供者
    - 自訂驗證程序需要註冊此提供者
    - multi 必須設定為true
    - 在@Directive 指定 providers 相關資訊
        
        ```tsx
        @Directive({
          selector: '[CheckExtNo]',
          providers: [{
            provide: NG_VALIDATORS,
            useExisting: CheckExtNoDirective,
            multi: true
          }]
        })
        ```
        

---

- 產生一個 Directive

```powershell
ng g d shared\checkExtNo --project mod07
```

- 指定指令的提供者
- check-ext-no.directive.ts

```tsx
@Directive({
  selector: '[CheckExtNo]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CheckExtNoDirective,
    multi: true
  }]
})
```

- 實作 Validator 介面
- check-ext-no.directive.ts

```tsx
export class CheckExtNoDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    let extNo: number = parseInt(control.value);
    let result = null;
    if (extNo < 1000 || extNo > 1999) {
      result = {
        'CheckExtNo': {
          actualValue: extNo,
          requiredValue:'分機號碼必須介於 1000-1999 之間'
        }
      }
      return result;
    }
    return null;
  }
}
```

- 套用到 HTML
- app.component.html

```html
      <input type="number" class="form-control" placeholder="租借者的辦公室分機號碼" 
      [(ngModel)]='rentRoom.extNo' #extNo='ngModel' required CheckExtNo name="extNo" 
      pattern="[0-9]{4}" title="4個數字">
      
      <div *ngIf="extNo.invalid && (extNo.dirty || extNo.touched)" class='alert alert-danger'>
        <div *ngIf="extNo.errors?.['required']">分析號碼必須填寫</div>
        <div *ngIf="extNo.errors?.['pattern']">分機號碼必須是四個數字</div>
        <div *ngIf="extNo.errors?.['CheckExtNo']">
          {{ extNo.errors?.['CheckExtNo'].actualValue}}
        </div>
      </div>
```

---

## (實作) 多個欄位比對檢查

---

- 產生一個 Directive

```powershell
ng g d shared\checkEndDate --project mod07
```

- 指定指令的提供者
- check-end-date.directive.ts
    
    ```tsx
    @Directive({
      selector: '[CheckEndDate]',
      providers: [{
        provide: NG_VALIDATORS,
        useExisting: CheckEndDateDirective,
        multi: true
      }]
    })
    ```
    
- 實作 Validator
    
    ```tsx
    export class CheckEndDateDirective {
    
      @Input('CheckEndDate') mustGT: string[] = [];
    
      constructor() { }
    
      validate(control: AbstractControl): ValidationErrors | null {
        let fg: FormGroup = <FormGroup>control;
        let startCtlName: string = this.mustGT[0], endCtlName: string = this.mustGT[1];
        const startCtl = fg.controls[startCtlName];
        const endCtl = fg.controls[endCtlName];
        if (!startCtl || !endCtl) {
          return null;
        }
        let startDate = Date.parse(startCtl.value);
        let endDate = Date.parse(endCtl.value);
        let result = null;
        if (startDate >= endDate) {
          result = {
            "CheckEndDate": {
              actualValue: `起始日期: ${startDate}, 歸還日期: ${endDate}`,
              requiredValue: '歸還日期必須大於起始日期'
            }
          }
        }
        return result;
      }
    
    }
    ```
    
- 修改 ngModelGroup 加入 CheckEndDate 並傳入要比較的兩個欄位
- app.component.html
    
    ```html
        <div class="form-group" ngModelGroup='rentDate' #rentDate='ngModelGroup' 
        [CheckEndDate]='["startDate", "endDate"]'>
          <label for="size">租借期間</label>
          <input type="date" class="form-control" placeholder="起始時間" required 
    	      name="startDate" [(ngModel)]='rentRoom.startDate' #startDate='ngModel'>
          <input type="date" class="form-control" placeholder="退還時間" required 
    	      name="endDate" [(ngModel)]='rentRoom.endDate' #endDate='ngModel'>
          <div *ngIf="rentDate.invalid && (rentDate.dirty || rentDate.touched)" class='alert alert-danger'>
            <div *ngIf="startDate.errors?.['required'] || endDate.errors?.['required']">租借期間必須填寫</div>
            <div *ngIf="rentDate.errors?.['CheckEndDate']">
              {{ rentDate.errors?.['CheckEndDate'].requiredValue }}
            </div>
          </div>
        </div>
    ```