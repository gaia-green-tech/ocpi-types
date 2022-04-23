/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Location {
  id?: string;
  type?: "ON_STREET" | "PARKING_GARAGE" | "UNDERGROUND_GARAGE" | "PARKING_LOT" | "OTHER" | "UNKNOWN";
  name?: string | null;
  address?: string;
  city?: string;
  postal_code?: string;
  country?: string;
  coordinates?: {
    latitude?: string;
    longitude?: string;
  };
  related_locations?:
    | null
    | {
        latitude?: string;
        longitude?: string;
        name?: {
          language: string;
          text: string;
        };
        [k: string]: unknown;
      }[];
  evses?: EVSE[] | null;
  directions?:
    | {
        language: string;
        text: string;
      }[]
    | null;
  operator?: null | {
    name: string;
    website?: string | null;
    logo?: null | {
      url: string;
      thumbnail?: string | null;
      category: "CHARGER" | "ENTRANCE" | "LOCATION" | "NETWORK" | "OPERATOR" | "OTHER" | "OWNER";
      type: string;
      width?: number | null;
      height?: number | null;
    };
  };
  suboperator?: null | {
    name: string;
    website?: string | null;
    logo?: null | {
      url: string;
      thumbnail?: string | null;
      category: "CHARGER" | "ENTRANCE" | "LOCATION" | "NETWORK" | "OPERATOR" | "OTHER" | "OWNER";
      type: string;
      width?: number | null;
      height?: number | null;
    };
  };
  owner?: null | {
    name: string;
    website?: string | null;
    logo?: null | {
      url: string;
      thumbnail?: string | null;
      category: "CHARGER" | "ENTRANCE" | "LOCATION" | "NETWORK" | "OPERATOR" | "OTHER" | "OWNER";
      type: string;
      width?: number | null;
      height?: number | null;
    };
  };
  facilities?:
    | (
        | "HOTEL"
        | "RESTAURANT"
        | "CAFE"
        | "MALL"
        | "SUPERMARKET"
        | "SPORT"
        | "RECREATION_AREA"
        | "NATURE"
        | "MUSEUM"
        | "BUS_STOP"
        | "TAXI_STAND"
        | "TRAIN_STATION"
        | "AIRPORT"
        | "CARPOOL_PARKING"
        | "FUEL_STATION"
        | "WIFI"
      )[]
    | null;
  time_zone?: string | null;
  opening_times?: null | {
    regular_hours?:
      | {
          weekday?: number;
          period_begin?: string;
          period_end?: string;
        }[]
      | null;
    twentyfourseven?: boolean;
    exceptional_openings?:
      | {
          period_begin: string;
          period_end: string;
        }[]
      | null;
    exceptional_closings?:
      | {
          period_begin: string;
          period_end: string;
        }[]
      | null;
  };
  charging_when_closed?: boolean | null;
  images?:
    | {
        url: string;
        thumbnail?: string | null;
        category: "CHARGER" | "ENTRANCE" | "LOCATION" | "NETWORK" | "OPERATOR" | "OTHER" | "OWNER";
        type: string;
        width?: number | null;
        height?: number | null;
      }[]
    | null;
  energy_mix?: null | {
    is_green_energy: boolean;
    energy_sources?:
      | {
          source: "NUCLEAR" | "GENERAL_FOSSIL" | "COAL" | "GAS" | "GENERAL_GREEN" | "SOLAR" | "WIND" | "WATER";
          percentage: number;
        }[]
      | null;
    environ_impact?:
      | {
          source: "NUCLEAR_WASTE" | "CARBON_DIOXIDE";
          amount: number;
        }[]
      | null;
    supplier_name?: string | null;
    energy_product_name?: string | null;
  };
  last_updated?: string;
}
export interface EVSE {
  uid?: string;
  evse_id?: string | null;
  status?:
    | "AVAILABLE"
    | "BLOCKED"
    | "CHARGING"
    | "INOPERATIVE"
    | "OUTOFORDER"
    | "PLANNED"
    | "REMOVED"
    | "RESERVED"
    | "UNKNOWN";
  status_schedule?:
    | {
        period_begin: string;
        period_end?: string;
        status:
          | "AVAILABLE"
          | "BLOCKED"
          | "CHARGING"
          | "INOPERATIVE"
          | "OUTOFORDER"
          | "PLANNED"
          | "REMOVED"
          | "RESERVED"
          | "UNKNOWN";
      }[]
    | null;
  capabilities?:
    | (
        | "CHARGING_PROFILE_CAPABLE"
        | "CREDIT_CARD_PAYABLE"
        | "REMOTE_START_STOP_CAPABLE"
        | "RESERVABLE"
        | "RFID_READER"
        | "UNLOCK_CAPABLE"
      )[]
    | null;
  connectors?: [Connector, ...Connector[]];
  floor_level?: string | null;
  coordinates?: null | {
    latitude?: string;
    longitude?: string;
  };
  physical_reference?: string | null;
  directions?:
    | {
        language: string;
        text: string;
      }[]
    | null;
  parking_restrictions?: ("EV_ONLY" | "PLUGGED" | "DISABLED" | "CUSTOMERS" | "MOTORCYCLES")[] | null;
  images?:
    | {
        url: string;
        thumbnail?: string | null;
        category: "CHARGER" | "ENTRANCE" | "LOCATION" | "NETWORK" | "OPERATOR" | "OTHER" | "OWNER";
        type: string;
        width?: number | null;
        height?: number | null;
      }[]
    | null;
  last_updated?: string;
}
export interface Connector {
  id?: string;
  standard?:
    | "CHADEMO"
    | "DOMESTIC_A"
    | "DOMESTIC_B"
    | "DOMESTIC_C"
    | "DOMESTIC_D"
    | "DOMESTIC_E"
    | "DOMESTIC_F"
    | "DOMESTIC_G"
    | "DOMESTIC_H"
    | "DOMESTIC_I"
    | "DOMESTIC_J"
    | "DOMESTIC_K"
    | "DOMESTIC_L"
    | "IEC_60309_2_single_16"
    | "IEC_60309_2_three_16"
    | "IEC_60309_2_three_32"
    | "IEC_60309_2_three_64"
    | "IEC_62196_T1"
    | "IEC_62196_T1_COMBO"
    | "IEC_62196_T2"
    | "IEC_62196_T2_COMBO"
    | "IEC_62196_T3A"
    | "IEC_62196_T3C"
    | "TESLA_R"
    | "TESLA_S";
  format?: "SOCKET" | "CABLE";
  power_type?: "AC_1_PHASE" | "AC_3_PHASE" | "DC";
  voltage?: number;
  amperage?: number;
  tariff_id?: string | null;
  terms_and_conditions?: string | null;
  last_updated?: string;
}
