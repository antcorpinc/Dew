export class FeatureViewModel {
    id: number;
    subModule: FeatureViewModel[];
    name: string;
    description: string;
    order: number;
    parentFeatureId: string;
    isActive: boolean;
    createdBy: string;
    updatedBy: string;
    privilages: string;
    featureTypeRolePrivilegeId: string;
}
