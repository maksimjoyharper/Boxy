import { BonusInfoArray } from "./userType";

export interface ICalendar {
  isOpen: boolean;
  onClose: () => void;
}

export interface ICalendarItem {
  bonus_info: BonusInfoArray;
  conclusive_day?: number;
}
