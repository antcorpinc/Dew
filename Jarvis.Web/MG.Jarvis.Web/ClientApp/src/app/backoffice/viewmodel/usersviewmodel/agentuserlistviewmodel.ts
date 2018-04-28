import { ApplicationRoleViewModel } from './applicationroleviewmodel';

export class Agentuserlistviewmodel {
id: string;
userName: string;
lastName: string;
firstName: string;
agencyName: string;
agencyCode: string;
branchName: string;
designation: string;
email: string;
userApplicationRole: ApplicationRoleViewModel[];
activationDate: string;
deActivationDate: string;
isActive: boolean;
}
