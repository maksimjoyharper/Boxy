import { Ref } from "react";
import { BonusInfoArray } from "./userType";

export interface ICalendar {
  isOpen: boolean;
  onClose: () => void;
}

export interface ICalendarItem {
  bonus_info: BonusInfoArray;
  conclusive_day?: number;
  ref: Ref<HTMLLIElement>;
}
