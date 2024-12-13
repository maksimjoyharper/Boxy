export interface fetchUserProps {
  consecutive_days: number;
  daily_bonus_friends: number;
  daily_points: number;
  id: number;
  last_login_date: string;
  league: number;
  login_today: true;
  name: string;
  points: number;
  points_all: number;
  premium_tickets: number;
  premium_tickets_all: number;
  rank: number;
  registration_date: string;
  tap_points: number;
  tg_id: number;
  tickets: number;
  tickets_all: number;
  friends_count: number;
}

export interface UserScheme {
  userInfo?: fetchUserProps;
}
