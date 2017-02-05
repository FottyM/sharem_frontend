import {Component, OnInit, Input} from '@angular/core';
import {Product} from "../models/product";
import {ActivatedRoute, Params} from "@angular/router";
import {PRODUCTS} from "../backend/backend";
import {PurchaseOrder} from "../models/purchase-order";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {currentUser} from "../helpers/global-variables";
import {IMyOptions} from "mydatepicker";
import {AlertService} from "../services/alert.service";


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {

  @Input()
  product: Product;
  purchaseOrder: FormGroup;
  renter = currentUser.user;
  private dateOptions: IMyOptions = { dateFormat: 'dd.mm.yyyy'};

  constructor(private router: ActivatedRoute, private fb:FormBuilder, private alerService: AlertService) { }

  ngOnInit() {
    this.router.params.forEach((params: Params) => {
      let id: number = +params['id'];

      PRODUCTS.forEach( (product)=>{
        if(product.id == id ){return this.product = product;}
      })
    });

    this.purchaseOrder = this.initFormBuilder();

  }

  goBack():void{
    window.history.back();
  }

  initFormBuilder(){
    return this.fb.group({
      name: [''+this.product.name, Validators.required],
      rentalPeriod: this.fb.group(
        {
          startDate: ['', Validators.required],
          endDate: ['',Validators.required]
        }
      ),
      owner_id: [''+this.product.user_id,Validators.required],
      renter_id: [''+this.renter.user_id, Validators.required]
    });
  }

  onSubmit({value, valid}:{value: PurchaseOrder, valid: boolean}){
    this.alerService.success(`
      Request for ${value.name} rental has been sent From:
      ${value.rentalPeriod.startDate['formatted']}
      To: ${value.rentalPeriod.endDate['formatted']}
      `);
    setTimeout(() => {
      window.history.back();
    } , 2000);

    // window.history.back();
    // console.log(value, valid);
  }

}
