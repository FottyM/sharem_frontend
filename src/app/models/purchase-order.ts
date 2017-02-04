export class PurchaseOrder{
  id: number;
  name: string;
  rentalPeriod:{
    startDate: Object;
    endDate: Object;
  };
  owner_id: number;
  renter_id: number;
}
