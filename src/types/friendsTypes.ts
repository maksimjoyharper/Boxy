export interface fetchFriendsProps {
  tg_id: string;
  name: string;
  referral_bonus: boolean;
  points: string;
  reg_data: string;
}

export type CardFriendProps = {
  friends: fetchFriendsProps;
  index: number;
  isOpen?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  isDisabled: boolean;
};

export interface ISlidingFriends {
  isOpen: boolean;
  onClose: () => void;
  initialHeight: string;
  fullHeight: string;
}
