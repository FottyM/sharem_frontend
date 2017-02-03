export class PurchaseOrder{
  id: number;
  rentalPeriod:{
    startDate: Object;
    endDate: Object;
  };
  owner_id: number;
  renter_id: number;
}
