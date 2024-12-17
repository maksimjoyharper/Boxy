import iconBook from "../assets/png/catalog/iconBook.png";
import iconSale5 from "../assets/png/catalog/sale5.png";
import iconSale10 from "../assets/png/catalog/sale10.png";
import iconUsefulM from "../assets/png/catalog/useful_materials.png";
import iconMiniCurs from "../assets/png/catalog/miniCurs.png";
import iconMerch from "../assets/png/catalog/iconMerch.png";

export const getImgCatalog = (
  name: string,
  setIcon: (icon: string) => void
) => {
  switch (name) {
    case "Пройдите профтест на ....":
      return setIcon(iconBook);
    case "Дополнительная скидка 5% на все курсы":
      return setIcon(iconSale5);
    case "Дополнительная скидка 10% на все курсы":
      return setIcon(iconSale10);
    case "Python-разработчик":
      return setIcon(iconUsefulM);
    case "Бизнес-аналитик":
      return setIcon(iconUsefulM);
    case "Веб-дизайнер":
      return setIcon(iconUsefulM);
    case "40 правил идеального текста для соцсетей":
      return setIcon(iconUsefulM);
    case "Как найти клиентов фрилансеру":
      return setIcon(iconUsefulM);
    case "Введение в программирование":
      return setIcon(iconMiniCurs);
    case "Введение в маркетинг":
      return setIcon(iconMiniCurs);
    case "Введение в дизайн":
      return setIcon(iconMiniCurs);
    case "Эксклюзивная байка":
      return setIcon(iconMerch);
  }
};
