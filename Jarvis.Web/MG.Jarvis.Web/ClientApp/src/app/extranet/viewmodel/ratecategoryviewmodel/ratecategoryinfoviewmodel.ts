import { IObjectWithState } from '../../../common/iobjectwithstate';
import { ObjectState } from '../../../common/enums';
import {RoomTypeViewModel} from './roomtypeviewmodel';

export class RateCategoryInfoViewModel implements IObjectWithState {
  isActive: boolean;
  isStatic: boolean;
  hotelId: number;
  rateId: number;
  name: string;
  roomTypeList: RoomTypeViewModel[] ;
  cancellationPolicyId: number;
  mealId: number;
  marketId: number;
  objectState: ObjectState;
}
