export function getNameBtn(number: number) {
  if (number === 2) {
    return "Пригласить";
  } else if (number === 11 || number === 12) {
    return "Смотреть";
  } else {
    return "Подписаться";
  }
}
