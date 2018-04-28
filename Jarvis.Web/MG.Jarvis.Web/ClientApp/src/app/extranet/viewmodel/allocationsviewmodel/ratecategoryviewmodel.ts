import { ObjectState } from '../../../common/enums';
import { OccupancyViewModel } from './occupancyviewmodel';

export class RateCategoryViewModel {
    rateCategoryId: number;
    rateCategoryName: string;
    isPromotional: boolean;
    isExpanded: boolean;
    objectState: ObjectState;
    roomsToSell: RoomToSell[];
    status: AllocationStatus[];
    noOfGuest: number;
    isExtrabedAllowed: boolean;
    occupancy: OccupancyViewModel[];
}

export class RoomToSell {
    date: string;
    roomToSell: number;
}

export class AllocationStatus {
    date: string;
    bookingStatus: string;
}
