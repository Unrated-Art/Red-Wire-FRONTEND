export interface SessionType {
  id: number;
  dateStart: Date;
  dateEnd: Date;
  location: string;
  price: number;
  classroom?: [];
  training?: {};
  trainer?: [];
  trainees?: [];
}
