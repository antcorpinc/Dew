import { IObjectWithState } from '../../../common/iobjectwithstate';
import { ObjectState } from '../../../common/enums';

export class CancellationPolicyClausesViewModel implements IObjectWithState {
    cancellationClauseChargeId: number;
    objectState: ObjectState;
    cancellationClauses: CancellationClauseViewModel[];
}

export class CancellationClauseViewModel {
    cancellationPolicyClausesId: number;
    daysBeforeArrival: number;
    percentageCharge: number;
    cancellationPolicyId: number;
    objectState: ObjectState;
}
