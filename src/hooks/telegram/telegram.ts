declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Telegram: any;
  }
}

export const useTelegram = () => {
  const tg = window.Telegram.WebApp;

  // const userName = tg?.initDataUnsafe?.user?.username;
  // const tg_id = tg?.initDataUnsafe?.user?.id;

  const tg_id = "12323";
  const userName = "ed";

  return { tg, userName, tg_id };
};
