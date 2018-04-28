import { ObjectState } from '../../../common/enums';
import { RateCategoryViewModel } from './ratecategoryviewmodel';

export class RoomsViewModel {
  roomId: number;
  roomName: string;
  roomsSold: RoomSoldViewModel[];
  objectState: ObjectState;
  rateCategory: RateCategoryViewModel[];
}

export class RoomSoldViewModel {
  date:string;
  roomsold: number;
}
