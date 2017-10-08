/** SearchMVC model definitions **/

declare interface SearchItem {
  
}

export interface Characteristic {
    Conto: string;
   Type :  string;
   Year : string;
   RegNumber : string;
   DriverPrimary :  string;
   DriverSecond :  string;
   OlderDriverPrimary :  string;
   OlderDriverSecond : string;
   Debit :  string;
   Handover :  string;
   VIN :  string;
   EngineType :  string;
   EngineNumber : string;
   CurrentKM : string;
   Used : string;
   Clima : string;
   Transmission :  string;
   Retard :  string;
   Axle :  string;
   BuyPrice :string;
   Price : string;
   Place :  string;
}

declare type SearchFormState = SearchItem[];
