import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ContractNameDataService } from '../../../../common/extranet-shared/services/contracts/contract-name-data.service';
import { ContractUrlNotificationService } from '../../../../common/extranet-shared/services/contracts/contract-url-notification.service';
import { LookupService } from '../../../../../common/shared/services/lookup.service';
import { CountryViewModel } from '../../../../../common/viewmodels/countryviewmodel';
import { HotelTypeViewModel } from '../../../../../common/viewmodels/hoteltypeviewmodel';
import { HotelChainViewModel } from '../../../../../common/viewmodels/hotelchainviewmodel';
import { ContactPersonTitleViewModel } from '../../../../../common/viewmodels/contactpersontitleviewmodel';
import { CurrencyViewModel } from '../../../../../common/viewmodels/currencyviewmodel';
import { PaymentMethodViewModel } from '../../../../viewmodel/hoteldetailsviewmodel/paymentmethodviewmodel';
import { RateTypeViewModel } from '../../../../viewmodel/hoteldetailsviewmodel/ratetypeviewmodel';
import { ChannelManagerViewModel } from '../../../../viewmodel/hoteldetailsviewmodel/channelmanagerviewmodel';
import { TaxesApplicabilityViewModel } from '../../../../viewmodel/hoteldetailsviewmodel/taxesapplicabilityviewmodel';
import { StarRatingViewModel } from '../../../../viewmodel/hoteldetailsviewmodel/starratingviewmodel';
import { ContractHotelDetailsDataService } from '../../../../common/extranet-shared/services/contracts/contract-hotel-details-data.service';
import { HotelsNameList } from '../../../../viewmodel/contracts/hoteldetails/hotelsnamelist';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { startWith } from 'rxjs/operators/startWith';
import { HotelDataService } from '../../../../common/extranet-shared/services/hotel-data.service';
import { HotelDetailsViewModel } from '../../../../viewmodel/hoteldetailsviewmodel/hoteldetailsviewmodel';
import { HotelBrandViewModel } from '../../../../../common/viewmodels/hotelbrandviewmodel';
import { CityViewModel } from '../../../../../common/viewmodels/cityviewmodel';
import { EXTRANETCONSTANTS } from '../../../../common/constants';
import { HotelPaymentMethodRelationViewModel } from '../../../../viewmodel/hoteldetailsviewmodel/hotelpaymentmethodrelationviewmodel';
import { ContractDataService } from '../../../../common/extranet-shared/services/contracts/contract-data.service';
import { ContractType, ObjectState, DocumentType } from '../../../../../common/enums';
import { TemplateFacilitiesDataService } from '../../../../common/extranet-shared/services/templates/template-facilities-data.service';
import { TemplatesDataService } from '../../../../common/extranet-shared/services/templates/templates-data.service';
// tslint:disable-next-line:max-line-length
import { TemplateViewModel, HotelInfoViewModel } from '../../../../viewmodel/templates/hotel-info/hotelinfoviewmodel';
import { ContractHotelDetailsViewModel } from '../../../../viewmodel/contracts/hoteldetails/contracthoteldetailsviewmodel';
import { MatSnackBar } from '@angular/material';
import { StaticContractHotelDetailsVieModel } from '../../../../viewmodel/contracts/hoteldetails/staticcontracthoteldetailsviewmodel';
import { CONSTANTS } from '../../../../../common/constants';

const duration = CONSTANTS.toasterTimeOut.duration;

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  edit = CONSTANTS.operation.edit;
  create = CONSTANTS.operation.create;

  hotelDetailsContractGroup: FormGroup;
  contractBasicData: string[] = [];
  rowSelected: number;
  nonMg = ContractType.NonMG;
  mgStatic = ContractType.MGStatic;
  mgDynamic = ContractType.MGDynamic;
  hotelInfoCodes = EXTRANETCONSTANTS.templates.hotelinfo;
  contractType: any;
  templateId: number;
  hotelFields: HotelInfoViewModel[];
  templateViewModel: TemplateViewModel;
  contractHotelDetailsViewModel: ContractHotelDetailsViewModel;
  staticContractHotelDetailsVieModel: StaticContractHotelDetailsVieModel;
  contractId = this.activatedRoute.parent.snapshot.params['id'];
  operation = this.activatedRoute.parent.snapshot.params['operation'];
  startDate: any;
  endDate: any;
  initialContactDetailsLength: number;
  initialTaxDetailsLength: number;
  contractBasicDetailsObjectState: ObjectState;
  savedcontractBasicDetails: any;

  hotelData: HotelDetailsViewModel;
  hotelDataSave: HotelDetailsViewModel;
  latLong: any;
  hotelPaymentMethodRelation: HotelPaymentMethodRelationViewModel;
  checkInCheckOut = EXTRANETCONSTANTS.arrCheckInCheckOut;
  countriesList: CountryViewModel[];
  citiesList: CityViewModel[];
  hotelTypeList: HotelTypeViewModel[];
  hotelChainList: HotelChainViewModel[];
  hotelBrandList: HotelBrandViewModel[];
  contactPersonTitleList: ContactPersonTitleViewModel[];
  currencyList: CurrencyViewModel[];
  paymentMethodList: PaymentMethodViewModel[];
  rateTypeList: RateTypeViewModel[];
  channelManagerList: ChannelManagerViewModel[];
  taxesApplicabilityList: TaxesApplicabilityViewModel[];
  starRatingList: StarRatingViewModel[];
  hotelsNameList: HotelsNameList[];
  filteredOptions: Observable<any>;
  // name: FormControl = new FormControl();

  isSelectedName: boolean;
  isSelectedChain: boolean;
  isSelectedBrand: boolean;
  isSelectedType: boolean;
  isSelectedAddress1: boolean;
  isSelectedAddress2: boolean;
  isSelectedCountry: boolean;
  isSelectedCity: boolean;
  isSelectedZip: boolean;
  isSelectedLatLong: boolean;
  isSelectedStarRating: boolean;
  isSelectedMgPoints: boolean;
  isSelectedShortDescription: boolean;
  isSelectedLongDescription: boolean;
  isSelectedContactDetails: boolean;
  isSelectedPaymentDetails: boolean;
  isSelectedExtranetDetails: boolean;
  isSelectedTaxes: boolean;
  isSelectedCheckinCheckout: boolean;
  isSelectedTotalNumberOfRooms: boolean;
  error: string;
  errorSize: string;
  file: File;
  pdfLink: string;
  isFileUploaded: boolean;
  fileArray: any;
  isUploadComplete: boolean;
  extension: number;

  constructor(public contractNameDataService: ContractNameDataService,
    public contractDataService: ContractDataService,
    public contractUrlNotificationService: ContractUrlNotificationService,
    public lookupService: LookupService,
    public contractHotelDetailsDataService: ContractHotelDetailsDataService,
    public templatesDataService: TemplatesDataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private hotelDataService: HotelDataService,
    private changeDetector: ChangeDetectorRef,
    public snackBar: MatSnackBar) {
    contractUrlNotificationService.changeURLRoute(activatedRoute.snapshot.url[0].path);
  }

  @Input() fileExt: string;
  @Input() maxSize: number;

  ngOnInit() {

    window.scrollTo(0, 0);
    this.error = null;
    this.errorSize = null;
    this.maxSize = 5;
    this.fileExt = DocumentType[0] + ', ' + DocumentType[1] + ', ' + DocumentType[2];
    this.isFileUploaded = false;
    this.getCountries();
    this.getHotelTypes();
    this.getHotelChains();
    this.getContactTitles();
    this.getCurrency();
    this.getPaymentMethod();
    this.getRateType();
    this.getChannelManager();
    this.getTaxApplicability();
    this.getStarRating();

    this.hotelsNameList = this.activatedRoute.snapshot.data['hotelsName'];
    this.templateId = this.contractDataService.templateId;
    if (this.operation === this.create) {
      this.contractType = this.contractDataService.contractType;
    } else if (this.operation === this.edit) {
      this.contractType = this.mgStatic;
    }

    this.hotelDetailsContractGroup = new FormGroup({
      hotelId: new FormControl(),
      hotelName: new FormControl(),
      hotelChainId: new FormControl(),
      hotelBrandId: new FormControl(),
      hotelTypeId: new FormControl('', Validators.required),
      totalNumberOfRooms: new FormControl('', Validators.required),
      countryId: new FormControl('', Validators.required),
      cityId: new FormControl('', Validators.required),
      address1: new FormControl('', Validators.required),
      address2: new FormControl(),
      zipCode: new FormControl('', Validators.required),
      latLong: new FormControl('', Validators.required),
      starRatingId: new FormControl('', Validators.required),
      mgPoint: new FormControl(),
      shortDescription: new FormControl('', Validators.required),
      longDescription: new FormControl(),
      checkInFrom: new FormControl('', Validators.required),
      checkOutTo: new FormControl('', Validators.required),
      contactDetails: new FormArray([this.buildContactDetailsForm()]),
      website: new FormControl('', Validators.required),
      reservationEmail: new FormControl('', Validators.required),
      reservationContactNo: new FormControl('', Validators.required),
      hotelPaymentMethodRelation: this.buildPaymentMethod(),
      isExtranetAccess: new FormControl(),
      isChannelManagerConnectivity: new FormControl(),
      channelManagerId: new FormControl(),
      taxDetails: new FormArray([this.buildTaxDetailsForm()]),
      contractNameEntered: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      objectState: new FormControl()
    });
    this.contractNameDataService.contractName.subscribe(contractBasicDetails => {
      this.contractBasicData = contractBasicDetails.split('~#');
      this.hotelDetailsContractGroup.controls['contractNameEntered'].setValue(this.contractBasicData[0]);
      this.hotelDetailsContractGroup.controls['startDate'].setValue(this.contractBasicData[1]);
      this.hotelDetailsContractGroup.controls['endDate'].setValue(this.contractBasicData[2]);
    });

    if (this.operation === this.create) {
      this.hotelDetailsContractGroup.get('objectState').setValue(ObjectState.Added);
      this.contactDetails.controls.forEach((contact, index) => {
        contact.get('objectState').setValue(ObjectState.Added);
      });
      this.hotelDetailsContractGroup.controls.hotelPaymentMethodRelation.get('objectState').
        setValue(ObjectState.Added);
      this.taxDetails.controls.forEach((tax, index) => {
        tax.get('objectState').setValue(ObjectState.Added);
      });
      this.hotelDetailsContractGroup.get('hotelName').enable();
    } else if (this.contractType === this.mgStatic && this.operation === this.edit) {
      this.hotelDetailsContractGroup.get('objectState').setValue(ObjectState.Unchanged);
      this.contactDetails.controls.forEach((contact, index) => {
        contact.get('objectState').setValue(ObjectState.Unchanged);
      });
      this.hotelDetailsContractGroup.controls.hotelPaymentMethodRelation.get('objectState').
        setValue(ObjectState.Unchanged);
      this.taxDetails.controls.forEach((tax, index) => {
        tax.get('objectState').setValue(ObjectState.Unchanged);
      });
      this.hotelDetailsContractGroup.get('hotelName').disable();
      // this.savedcontractBasicDetails = this.contractsDataService.savedcontractBasicDetails.split('~#');
    }

    if (this.contractType === this.mgStatic && this.operation === this.create) {
      this.templateViewModel = {
        id: this.templateId
      };
      this.templatesDataService.getTemplateHotelFields(this.templateViewModel).subscribe(templateData => {
        this.hotelFields = templateData.hotelFields;
        this.updateHotelFields();
      });
    } else if (this.contractType === this.mgStatic && this.operation === this.edit) {
      this.contractHotelDetailsDataService.getContractHotelDetailsByContractId(this.contractId).subscribe(hotelDetails => {
        this.hotelFields = hotelDetails.contractHotelFieldsList;
        this.hotelData = hotelDetails.contractHotelDetailsModel;
        this.initialContactDetailsLength = this.hotelData.contactDetails.length;
        this.initialTaxDetailsLength = this.hotelData.taxDetails.length;
        this.updateHotelFields();
        this.setHotelFieldsValue();
      });
    } else if (this.contractType === this.nonMg || this.contractType === this.mgDynamic) {
      this.isSelectedName = true;
      this.isSelectedChain = true;
      this.isSelectedBrand = true;
      this.isSelectedType = true;
      this.isSelectedTotalNumberOfRooms = true;
      this.isSelectedAddress1 = true;
      this.isSelectedAddress2 = true;
      this.isSelectedCountry = true;
      this.isSelectedCity = true;
      this.isSelectedZip = true;
      this.isSelectedLatLong = true;
      this.isSelectedStarRating = true;
      this.isSelectedMgPoints = true;
      this.isSelectedShortDescription = true;
      this.isSelectedLongDescription = true;
      this.isSelectedContactDetails = true;
      this.isSelectedPaymentDetails = false;
      this.isSelectedExtranetDetails = false;
      this.isSelectedTaxes = false;
      this.isSelectedCheckinCheckout = true;
    }

    // function for serach by hotel name
    this.filteredOptions = this.hotelDetailsContractGroup.get('hotelName').valueChanges
      .pipe(
        map(val => this.filter(val.trim()))
      );

  }

  updateHotelFields() {
    this.hotelFields.forEach(hotelField => {
      if (hotelField.isConfigurable === false) {
        hotelField.isSelected = true;
      }

      if (this.hotelInfoCodes.name === hotelField.code) {
        this.isSelectedName = hotelField.isSelected;
      } else if (this.hotelInfoCodes.chain === hotelField.code) {
        this.isSelectedChain = hotelField.isSelected;
      } else if (this.hotelInfoCodes.brand === hotelField.code) {
        this.isSelectedBrand = hotelField.isSelected;
      } else if (this.hotelInfoCodes.type === hotelField.code) {
        this.isSelectedType = hotelField.isSelected;
      } else if (this.hotelInfoCodes.address1 === hotelField.code) {
        this.isSelectedAddress1 = hotelField.isSelected;
      } else if (this.hotelInfoCodes.address2 === hotelField.code) {
        this.isSelectedAddress2 = hotelField.isSelected;
      } else if (this.hotelInfoCodes.country === hotelField.code) {
        this.isSelectedCountry = hotelField.isSelected;
      } else if (this.hotelInfoCodes.city === hotelField.code) {
        this.isSelectedCity = hotelField.isSelected;
      } else if (this.hotelInfoCodes.zip === hotelField.code) {
        this.isSelectedZip = hotelField.isSelected;
      } else if (this.hotelInfoCodes.latlong === hotelField.code) {
        this.isSelectedLatLong = hotelField.isSelected;
      } else if (this.hotelInfoCodes.starrating === hotelField.code) {
        this.isSelectedStarRating = hotelField.isSelected;
      } else if (this.hotelInfoCodes.mgpoints === hotelField.code) {
        this.isSelectedMgPoints = hotelField.isSelected;
      } else if (this.hotelInfoCodes.shortdescription === hotelField.code) {
        this.isSelectedShortDescription = hotelField.isSelected;
      } else if (this.hotelInfoCodes.longdescription === hotelField.code) {
        this.isSelectedLongDescription = hotelField.isSelected;
      } else if (this.hotelInfoCodes.contactdetails === hotelField.code) {
        this.isSelectedContactDetails = hotelField.isSelected;
      } else if (this.hotelInfoCodes.paymentdetails === hotelField.code) {
        this.isSelectedPaymentDetails = hotelField.isSelected;
      } else if (this.hotelInfoCodes.extranetdetails === hotelField.code) {
        this.isSelectedExtranetDetails = hotelField.isSelected;
      } else if (this.hotelInfoCodes.taxes === hotelField.code) {
        this.isSelectedTaxes = hotelField.isSelected;
      } else if (this.hotelInfoCodes.checkincheckout === hotelField.code) {
        this.isSelectedCheckinCheckout = hotelField.isSelected;
      } else if (this.hotelInfoCodes.totalNumberOfRooms === hotelField.code) {
        this.isSelectedTotalNumberOfRooms = hotelField.isSelected;
      }

    });
  }

  setHotelFieldsValue() {
    if (this.contactDetails.controls.length !== 0) {
      const contactDetailsControlLength = this.contactDetails.controls.length;
      for (let i = 0; i < contactDetailsControlLength; i++) {
        this.contactDetails.removeAt(0);
      }
    }

    if (this.taxDetails.controls.length !== 0) {
      const taxDetailsControlLength = this.taxDetails.controls.length;
      for (let i = 0; i < taxDetailsControlLength; i++) {
        this.taxDetails.removeAt(0);
      }
    }

    if (this.hotelData.hotelChainId != null) {
      this.getHotelBrands(this.hotelData.hotelChainId);
    }
    if (this.hotelData.countryId != null) {
      this.getCities(this.hotelData.countryId);
    }
    this.latLong = this.hotelData.latitude + '/' + this.hotelData.longitude;

    for (let i = 0; i < this.hotelData.contactDetails.length; i++) {
      this.addContact();
    }

    for (let i = 0; i < this.hotelData.contactDetails.length; i++) {
      if (this.hotelData.contactDetails[i].isPrimary === true) {
        this.rowSelected = i;
      } else if (this.hotelData.contactDetails[i].contactPerson === null) {
        this.rowSelected = i;
      }
    }

    for (let i = 0; i < this.hotelData.taxDetails.length; i++) {
      this.addTax();
    }

    if (this.hotelData.isChannelManagerConnectivity === false) {
      this.hotelDetailsContractGroup.get('channelManagerId').setValue(null);
      this.hotelDetailsContractGroup.get('channelManagerId').disable();
    } else {
      this.hotelDetailsContractGroup.get('channelManagerId').enable();
    }

    if (this.operation === this.create) {
      this.hotelDetailsContractGroup.get('objectState').setValue(ObjectState.Added);
      this.contactDetails.controls.forEach((contact, index) => {
        contact.get('objectState').setValue(ObjectState.Added);
      });
      this.hotelDetailsContractGroup.controls.hotelPaymentMethodRelation.get('objectState').
        setValue(ObjectState.Added);
      this.taxDetails.controls.forEach((tax, index) => {
        tax.get('objectState').setValue(ObjectState.Added);
      });
    } else if (this.contractType === this.mgStatic && this.operation === this.edit) {
      this.hotelDetailsContractGroup.get('objectState').setValue(ObjectState.Unchanged);
      this.contactDetails.controls.forEach((contact, index) => {
        contact.get('objectState').setValue(ObjectState.Unchanged);
      });
      this.hotelDetailsContractGroup.controls.hotelPaymentMethodRelation.get('objectState').
        setValue(ObjectState.Unchanged);
      this.taxDetails.controls.forEach((tax, index) => {
        tax.get('objectState').setValue(ObjectState.Unchanged);
      });
    }

    this.hotelDetailsContractGroup.get('hotelId').setValue(this.hotelData.hotelId);
    this.hotelDetailsContractGroup.get('hotelName').setValue(this.hotelData.hotelName);
    this.hotelDetailsContractGroup.get('hotelChainId').setValue(this.hotelData.hotelChainId);
    this.hotelDetailsContractGroup.get('hotelBrandId').setValue(this.hotelData.hotelBrandId);
    this.hotelDetailsContractGroup.get('hotelTypeId').setValue(this.hotelData.hotelTypeId);
    this.hotelDetailsContractGroup.get('totalNumberOfRooms').setValue(this.hotelData.totalNumberOfRooms);
    this.hotelDetailsContractGroup.get('countryId').setValue(this.hotelData.countryId);
    this.hotelDetailsContractGroup.get('cityId').setValue(this.hotelData.cityId);
    this.hotelDetailsContractGroup.get('address1').setValue(this.hotelData.address1);
    this.hotelDetailsContractGroup.get('address2').setValue(this.hotelData.address2);
    this.hotelDetailsContractGroup.get('zipCode').setValue(this.hotelData.zipCode);
    this.hotelDetailsContractGroup.get('latLong').setValue(this.latLong);
    this.hotelDetailsContractGroup.get('starRatingId').setValue(this.hotelData.starRatingId);
    this.hotelDetailsContractGroup.get('mgPoint').setValue(this.hotelData.mgPoint);
    this.hotelDetailsContractGroup.get('shortDescription').setValue(this.hotelData.shortDescription);
    this.hotelDetailsContractGroup.get('longDescription').setValue(this.hotelData.longDescription);
    this.hotelDetailsContractGroup.get('checkInFrom').setValue(this.hotelData.checkInFrom);
    this.hotelDetailsContractGroup.get('checkOutTo').setValue(this.hotelData.checkOutTo);
    this.hotelDetailsContractGroup.get('website').setValue(this.hotelData.website);
    this.hotelDetailsContractGroup.get('reservationEmail').setValue(this.hotelData.reservationEmail);
    this.hotelDetailsContractGroup.get('reservationContactNo').setValue(this.hotelData.reservationContactNo);
    this.hotelDetailsContractGroup.get('isExtranetAccess').setValue(this.hotelData.isExtranetAccess);
    this.hotelDetailsContractGroup.get('isChannelManagerConnectivity').setValue(this.hotelData.isChannelManagerConnectivity);
    this.hotelDetailsContractGroup.get('channelManagerId').setValue(this.hotelData.channelManagerId);

    this.contactDetails.controls.forEach((contact, index) => {
      contact.get('contactId').setValue(this.hotelData.contactDetails[index].contactId);
      contact.get('contactPerson').setValue(this.hotelData.contactDetails[index].contactPerson);
      contact.get('designationId').setValue(this.hotelData.contactDetails[index].designationId);
      contact.get('emailAddress').setValue(this.hotelData.contactDetails[index].emailAddress);
      contact.get('contactNumber').setValue(this.hotelData.contactDetails[index].contactNumber);
      contact.get('rowSelected').setValue(this.rowSelected);
    });

    this.hotelDetailsContractGroup.controls.hotelPaymentMethodRelation.get('paymentMethodId').
      setValue(this.hotelData.hotelPaymentMethodRelation.paymentMethodId);
    this.hotelDetailsContractGroup.controls.hotelPaymentMethodRelation.get('currencyId').
      setValue(this.hotelData.hotelPaymentMethodRelation.currencyId);
    this.hotelDetailsContractGroup.controls.hotelPaymentMethodRelation.get('rateTypeId').
      setValue(this.hotelData.hotelPaymentMethodRelation.rateTypeId);

    this.taxDetails.controls.forEach((tax, index) => {
      tax.get('taxTypeId').setValue(this.hotelData.taxDetails[index].taxTypeId);
      tax.get('taxesType').setValue(this.hotelData.taxDetails[index].taxesType);
      tax.get('taxApplicabilityId').setValue(this.hotelData.taxDetails[index].taxApplicabilityId);
      tax.get('amount').setValue(this.hotelData.taxDetails[index].amount);
      tax.get('isIncludedInRates').setValue(this.hotelData.taxDetails[index].isIncludedInRates);
    });

  }

  /* ---------- Contact Details ---------------- */
  buildContactDetailsForm(): FormGroup {
    let contactDetailsFormGroup: FormGroup;
    contactDetailsFormGroup = new FormGroup({
      contactId: new FormControl(),
      isPrimary: new FormControl(),
      contactPerson: new FormControl('', Validators.required),
      designationId: new FormControl('', Validators.required),
      emailAddress: new FormControl('', Validators.required),
      contactNumber: new FormControl('', Validators.required),
      rowSelected: new FormControl(),
      objectState: new FormControl()
    });

    return contactDetailsFormGroup;
  }

  get contactDetails(): FormArray {
    return <FormArray>this.hotelDetailsContractGroup.get('contactDetails');
  }

  addContact() {
    this.contactDetails.push(this.buildContactDetailsForm());
    this.changeDetector.detectChanges();
  }

  /* ---------- Contact Details Ends ---------------- */

  /* ---------- Payment Method ---------------- */
  buildPaymentMethod(): FormGroup {
    let paymentMethodFormGroup: FormGroup;
    paymentMethodFormGroup = new FormGroup({
      hotelPaymentMethodRelationId: new FormControl(),
      paymentMethodId: new FormControl(),
      currencyId: new FormControl(),
      rateTypeId: new FormControl(),
      objectState: new FormControl()
    });

    return paymentMethodFormGroup;
  }

  /* ---------- Payment Method Ends ---------------- */

  /* ---------- Tax Details ---------------- */
  buildTaxDetailsForm(): FormGroup {
    let taxDetailsFormGroup: FormGroup;
    taxDetailsFormGroup = new FormGroup({
      taxTypeId: new FormControl(),
      taxesType: new FormControl(),
      taxApplicabilityId: new FormControl(),
      amount: new FormControl(),
      isIncludedInRates: new FormControl(),
      objectState: new FormControl()
    });

    return taxDetailsFormGroup;
  }

  get taxDetails(): FormArray {
    return <FormArray>this.hotelDetailsContractGroup.get('taxDetails');
  }

  addTax() {
    this.taxDetails.push(this.buildTaxDetailsForm());
    this.changeDetector.detectChanges();
  }
  /* ---------- Tax Details Ends ---------------- */

  /* ---------- Filter Hotel ---------------- */
  filter(val: string): HotelsNameList[] {
    return this.hotelsNameList.filter(hotelsNameList =>
      hotelsNameList.name.toLowerCase().includes(val.toLowerCase()));
  }

  searchHotel(event, hotelId) {
    if (event.source.selected) {
      this.hotelDataService.getHotel(hotelId).subscribe(hotelData => {
        this.hotelData = hotelData;
        this.initialContactDetailsLength = this.hotelData.contactDetails.length;
        this.initialTaxDetailsLength = this.hotelData.taxDetails.length;
        this.setHotelFieldsValue();
      });
    }
  }

  /* ---------- Filter Hotel Ends ---------------- */

  /* ---------- Get Master Data -------------- */
  getHotelBrands(chainId) {
    this.lookupService.getHotelBrands(chainId).subscribe(hotelBrandData => {
      this.hotelBrandList = hotelBrandData;
    });
  }

  getCountries() {
    this.lookupService.getCountries().subscribe(countriesData => {
      this.countriesList = countriesData;
    });
  }

  getCities(countryId) {
    this.lookupService.getCities(countryId).subscribe(citiesData => {
      this.citiesList = citiesData;
    });
  }

  getHotelTypes() {
    this.lookupService.getHotelTypes().subscribe(hotelTypeData => {
      this.hotelTypeList = hotelTypeData;
    });
  }

  getHotelChains() {
    this.lookupService.getHotelChains().subscribe(hotelChainData =>
      this.hotelChainList = hotelChainData
    );
  }

  getContactTitles() {
    this.lookupService.getDesignation().subscribe(contactTitleData =>
      this.contactPersonTitleList = contactTitleData
    );
  }

  getCurrency() {
    this.lookupService.getCurrency().subscribe(currencyData =>
      this.currencyList = currencyData
    );
  }

  getPaymentMethod() {
    this.lookupService.getPaymentMethod().subscribe(paymentData => {
      this.paymentMethodList = paymentData;
    });
  }

  getRateType() {
    this.lookupService.getRateType().subscribe(rateTypeData => {
      this.rateTypeList = rateTypeData;
    });
  }

  getChannelManager() {
    this.lookupService.getChannelManager().subscribe(channelManagerData =>
      this.channelManagerList = channelManagerData
    );
  }

  getTaxApplicability() {
    this.lookupService.getTaxApplicability().subscribe(taxesApplicabilityData =>
      this.taxesApplicabilityList = taxesApplicabilityData
    );
  }

  getStarRating() {
    this.lookupService.getStarRating().subscribe(starRatingData => {
      this.starRatingList = starRatingData;
    });
  }
  /* ---------- Get Master Data Ends -------------- */

  backToList() {
    this.router.navigate(['/contractmgmt/contracts']);
  }

  fileChanged($event): void {
    this.isUploadComplete = false;
    this.isFileUploaded = false;
    this.file = $event.target.files[0];
    if (this.file) {
      this.isValidFileExtension(this.file);
    }
  }

  readFile(): void {
    this.isFileUploaded = true;
    this.isUploadComplete = false;
    const myReader: FileReader = new FileReader();
    myReader.readAsArrayBuffer(this.file);
    const thisObject = this;
    let formdata = {};
    const hotelId = this.hotelDetailsContractGroup.get('hotelId').value;
    myReader.onloadend = function (e) {
      const byteArray = new Uint8Array(myReader.result);
      const array = Array.from(byteArray);
      thisObject.fileArray = array;
      formdata = {
        bytes: array,
        hotelCode: thisObject.hotelData.hotelCode,
        extension: thisObject.extension
      };
      thisObject.contractHotelDetailsDataService.uploadPdf(formdata)
        .subscribe(response => {
          thisObject.pdfLink = response.result;
          if (response.result && !response.isError) {
            thisObject.isUploadComplete = true;
          } else {
            thisObject.error = response.message;
          }
        }
        );
    };
  }

  isValidFileExtension(file) {
    const extensions = (this.fileExt.split(','))
      .map(function (x) { return x.toLocaleUpperCase().trim(); });
    const ext = file.name.toUpperCase().split('.').pop() || file.name;
    const exists = extensions.includes(ext);
    if (!exists) {
      this.error = 'Please choose PDF, DOC or DOCX file only.';
    } else {
      this.error = null;
      if (ext === DocumentType[0]) {
        this.extension = DocumentType.PDF;
      } else if (ext === DocumentType[1]) {
        this.extension = DocumentType.DOC;
      } else if (ext === DocumentType[2]) {
        this.extension = DocumentType.DOCX;
      }
    }
    this.isValidFileSize(file);
  }

  isValidFileSize(file) {
    const fileSizeinMB = file.size / (1024 * 1000);
    const size = Math.round(fileSizeinMB * 100) / 100;
    if (size > this.maxSize) {
      this.errorSize = 'File exceeds file size limit of ' + this.maxSize + 'MB';
    } else if (size === 0) {
      this.errorSize = 'File is empty';
    } else {
      this.errorSize = null;
    }
  }

  isChannelManager(selected) {
    this.flagHotelDetailsAsEdited();
    if (!selected) {
      this.hotelDetailsContractGroup.get('channelManagerId').setValue(null);
      this.hotelDetailsContractGroup.get('channelManagerId').disable();
    } else {
      this.hotelDetailsContractGroup.get('channelManagerId').enable();
    }
  }

  saveContract() {

    this.updateHotelDataSaveModel();

    if (this.contractType === this.nonMg) {
      this.contractHotelDetailsViewModel = {
        id: this.contractId,
        name: this.hotelDetailsContractGroup.get('contractNameEntered').value,
        startDate: this.startDate.toISOString(),
        endDate: this.endDate.toISOString(),
        objectState: this.contractBasicDetailsObjectState,
        hotelId: this.hotelDetailsContractGroup.get('hotelId').value,
        contractType: this.contractType,
        pdfLink: this.pdfLink,
        hotelDetails: this.hotelDataSave
      };
      console.log(JSON.stringify(this.contractHotelDetailsViewModel));
      this.contractHotelDetailsDataService.addNonMgContract(this.contractHotelDetailsViewModel as ContractHotelDetailsViewModel)
        .subscribe(data => {
          this.router.navigate(['/contractmgmt/contracts']);
          this.snackBar.open('NonMG Contract Saved Successfully', '',
            { duration: duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
          window.scrollTo(0, 0);
        }
        );
    } else if (this.contractType === this.mgDynamic) {
      this.contractHotelDetailsViewModel = {
        id: this.contractId,
        name: this.hotelDetailsContractGroup.get('contractNameEntered').value,
        startDate: this.startDate.toISOString(),
        endDate: this.endDate.toISOString(),
        objectState: this.contractBasicDetailsObjectState,
        hotelId: this.hotelDetailsContractGroup.get('hotelId').value,
        contractType: this.contractType,
        pdfLink: this.pdfLink,
        hotelDetails: this.hotelDataSave
      };
      this.contractHotelDetailsDataService.addDynamicContract(this.contractHotelDetailsViewModel as ContractHotelDetailsViewModel)
        .subscribe(data => {
          this.router.navigate(['/contractmgmt/contracts']);
          this.snackBar.open('Dynamic Contract Saved Successfully', '',
            { duration: duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
          window.scrollTo(0, 0);
        }
        );
    } else if (this.contractType === this.mgStatic) {

      this.staticContractHotelDetailsVieModel = {
        templateId: this.templateId,
        contractId: this.contractId,
        name: this.hotelDetailsContractGroup.get('contractNameEntered').value,
        startDate: this.startDate.toISOString(),
        endDate: this.endDate.toISOString(),
        objectState: this.contractBasicDetailsObjectState,
        hotelDetailsViewModel: this.hotelDataSave,
        contractType: this.contractType,
        isDeleted: false
      };
      this.contractHotelDetailsDataService.addStaticContract(this.staticContractHotelDetailsVieModel as StaticContractHotelDetailsVieModel)
        .subscribe(data => {
          this.contractId = data.result.id;
          this.router.navigate(['/contractmgmt/contracts']);
          this.snackBar.open('Static Contract Saved Successfully', '',
            { duration: duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
          window.scrollTo(0, 0);
        }
        );
    }
  }

  saveAndContinue() {

    this.updateHotelDataSaveModel();

    this.staticContractHotelDetailsVieModel = {
        templateId: this.templateId,
        contractId: this.contractId,
        name: this.hotelDetailsContractGroup.get('contractNameEntered').value,
        startDate: this.startDate.toISOString(),
        endDate: this.endDate.toISOString(),
        objectState: this.contractBasicDetailsObjectState,
        hotelDetailsViewModel: this.hotelDataSave,
        contractType: this.contractType,
        isDeleted: false
      };
      this.contractHotelDetailsDataService.addStaticContract(this.staticContractHotelDetailsVieModel as StaticContractHotelDetailsVieModel)
        .subscribe(data => {
          this.contractId = data.result.id;
          this.router.navigate(['/contractmgmt/redirect', this.contractId]);
          this.snackBar.open('Static Contract Saved Successfully', '',
          { duration: 4000, verticalPosition: 'top', panelClass: 'showSnackBar'});
          window.scrollTo(0, 0);
        }
      );
  }

  updateHotelDataSaveModel() {
    this.startDate = new Date(this.hotelDetailsContractGroup.get('startDate').value.trim());
    this.endDate = new Date(this.hotelDetailsContractGroup.get('endDate').value.trim());

    this.hotelDataSave = Object.assign({}, this.hotelData, this.hotelDetailsContractGroup.value);
    this.hotelDataSave.isActive = true;
    this.hotelDataSave.latitude = +(this.latLong.split('/')[0]);
    this.hotelDataSave.longitude = +(this.latLong.split('/')[1]);
    this.hotelDataSave.contactDetails.forEach((contact, index) => {
      if (index === this.rowSelected) {
        contact.isPrimary = true;
      } else {
        contact.isPrimary = false;
      }
      if (contact.contactId === null) {
        contact.contactId = 0;
      }
    });
    this.hotelDataSave.hotelPaymentMethodRelation.hotelPaymentMethodRelationId =
      this.hotelData.hotelPaymentMethodRelation.hotelPaymentMethodRelationId;

    if (this.hotelDataSave.isChannelManagerConnectivity === false) {
      this.hotelDataSave.channelManagerId = null;
    }

    if (this.operation === this.create) {
      this.contractBasicDetailsObjectState = ObjectState.Added;
    } else if (this.operation === this.edit) {
      this.contractBasicDetailsObjectState = ObjectState.Unchanged;
      // if (this.savedcontractBasicDetails[0] !== this.hotelDetailsContractGroup.get('contractNameEntered').value) {
      //   this.contractBasicDetailsObjectState = ObjectState.Modified;
      // } else if (this.savedcontractBasicDetails[1] !== this.hotelDetailsContractGroup.get('startDate').value) {
      //   this.contractBasicDetailsObjectState = ObjectState.Modified;
      // } else if (this.savedcontractBasicDetails[2] !== this.hotelDetailsContractGroup.get('endDate').value) {
      //   this.contractBasicDetailsObjectState = ObjectState.Modified;
      // }
    }
  }

  flagContactDetailsAsEdited(index) {
    if (this.contactDetails.value[index].objectState !== ObjectState.Added && this.contactDetails.value[index].objectState !== null) {
      this.contactDetails.controls[index].get('objectState').setValue(ObjectState.Modified);
    }
    if (this.initialContactDetailsLength !== this.contactDetails.length && index >= this.initialContactDetailsLength) {
      this.contactDetails.controls[index].get('objectState').setValue(ObjectState.Added);
    }
  }

  flagHotelDetailsAsEdited() {
    if (this.hotelDetailsContractGroup.value.objectState !== ObjectState.Added) {
      this.hotelDetailsContractGroup.get('objectState').setValue(ObjectState.Modified);
    }
  }

  flagPaymentDetailsAsEdited() {
    if (this.hotelDetailsContractGroup.value.hotelPaymentMethodRelation.objectState !== ObjectState.Added) {
      this.hotelDetailsContractGroup.controls.hotelPaymentMethodRelation.get('objectState').setValue(ObjectState.Modified);
    }
  }

  flagTaxDetailsAsEdited(index) {
    if (this.taxDetails.value[index].objectState !== ObjectState.Added && this.taxDetails.value[index].objectState !== null) {
      this.taxDetails.controls[index].get('objectState').setValue(ObjectState.Modified);
    }
    if (this.initialTaxDetailsLength !== this.taxDetails.length && index >= this.initialTaxDetailsLength) {
      this.taxDetails.controls[index].get('objectState').setValue(ObjectState.Added);
    }
  }
  viewPdf() {
    const byteArray = new Uint8Array(this.fileArray);
    const blob = new Blob([byteArray], {
      type: this.file.type
    });
    const fileURL = URL.createObjectURL(blob);
    window.open(fileURL);
  }

}
