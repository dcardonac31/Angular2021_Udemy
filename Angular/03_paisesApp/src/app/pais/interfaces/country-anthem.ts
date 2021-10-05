export interface CountryAnthemResponse {
  status:         boolean;
  httpStatusCode: number;
  message:        string;
  data:           CountryAnthem;
}

export interface CountryAnthem {
  creationDate:       Date;
  countryCode:        string;
  countrySpanishName: string;
  countryEnglishName: string;
  anthemNameSpanish:  string;
  anthemNameEnglish:  string;
  anthemUrl:          string;
}
