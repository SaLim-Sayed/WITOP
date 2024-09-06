type PhoneCode = {
  id: number;
  code: string;
  country_id: number;
  country_name: string;
  country_en_name: string;
  country_ar_name: string;
  country_flag: string;
};

type Country = {
  id: number;
  name: string;
  flag_image: string;
  code: string;
  iso_code: string;
  native_name: string;
};

type Currency = {
  id: number;
  name: string;
  iso: string;
};

type Detail = {
  airport: string | null;
  dob: string | null;
  age: number | null;
  gender: string;
  gender_name: string;
  is_activated: string;
  status: string;
  status_name: string;
};

export type UserDataType = {
  
    _id: string;
    userName: string;
    email: string;
    phoneNumber: string;
    verify: boolean;
    invitationCode: string;
  
};
type Document = {
  documentCode: string;
  documentType: string;
  nationalityID: number;
  issuerOrgID: number;
  issuerOrg: {
    abbr: string;
    full: string;
  };
  names: {
    lastName: string;
    firstName: string;
  };
  documentNumber: string;
  nationality: {
    abbr: string;
    full: string;
  };
  dob: string;
  sex: {
    abbr: string;
    full: string;
  };
  expiry: string;
  personalNumber: string;
  checkDigit: {
    documentNumber: {
      checkDigit1: string;
      checkDigitVerify1: boolean;
    };
    dob: {
      checkDigit2: string;
      checkDigitVerify2: boolean;
    };
    expiry: {
      checkDigit3: string;
      checkDigitVerify3: boolean;
    };
    personalNumber: {
      checkDigit4: string;
      checkDigitVerify4: boolean;
    };
    finalCheck: {
      checkDigit5: string;
      checkDigitVerify5: boolean;
    };
  };
  mrzisvalid: boolean;
};
