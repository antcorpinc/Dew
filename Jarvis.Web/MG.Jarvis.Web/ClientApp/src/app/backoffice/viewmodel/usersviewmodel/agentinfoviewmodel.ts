import { AgencyViewModel } from './agencyviewmodel';
import { BranchViewModel } from './branchviewmodel';

export class AgentInfoViewModel {
    id: string;
    agencyId: number;
    agency: AgencyViewModel;
    branch: BranchViewModel;
    branchId: number;
    profilePictureUri: string;
    firstName: string;
    lastName: string;
    userName: string;
    designationId: number;
    designation: string;
    email: string;
    contactNumber: string;
    b2BRoleId: number;
    roleName: string;
    activationDate: string;
    deActivationDate: string;
    inActivationType: string;
    isActive: boolean;
    createdBy: string;
    updatedBy: string;
  }
