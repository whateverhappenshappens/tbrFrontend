import { Course } from "./Course";

export interface OrderRequestData {
  utr: string;
  mobileNumber: string;
  userId: string;
  paymentId: string;
  modeOfPayment: string;
  selectedCourses: Course[];
}
