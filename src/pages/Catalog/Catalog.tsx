import { useQuery } from "@tanstack/react-query";
import style from "./Catalog.module.scss";
import { useTelegram } from "../../hooks/telegram/telegram";
import { fetchCatalog } from "../../api/fetchCatalog/fetchCatalog";
import { queryClient } from "../../api/queryClient";
import { CatalogItem } from "../../components/catalogItem";
import logo from "../../assets/webp/logo.webp";
import { HeaderCoinSvg } from "../../assets/svg/HeaderCoinSvg";
import { useSelector } from "react-redux";
import { getUser } from "../../provider/StoreProvider/selectors/getUser";
import { SlidingCatalog } from "../../components/slidingCatalog";
import { useState } from "react";

const Catalog = () => {
  const { tg_id } = useTelegram();
  const user = useSelector(getUser);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const { data: catalog } = useQuery(
    {
      queryFn: () => fetchCatalog(tg_id),
      queryKey: ["catalog"],
    },
    queryClient
  );

  const categories = [
    "Каталог",
    "Скидки",
    "Полезные материалы",
    "Мини-курсы",
    "Мерч",
  ];

  const filteredCategories = categories.filter(
    (category) => category !== "Каталог"
  );

  return (
    <>
      <section className={style.catalog__section}>
        <div className={style.catalog__header}>
          <button onClick={handleOpen} className={style.catalog__button}>
            Информация
          </button>
          <img className={style.catalog__image} src={logo} alt="" />
          <p className={style.reverse}>
            <span>{user?.points}</span>
            <HeaderCoinSvg />
          </p>
        </div>
        <h1 className={style.catalog__title}>Каталог</h1>
        <ul className={style.catalog__list}>
          {catalog?.shops
            .filter((element) => element.name === "Каталог")
            .map((item) =>
              item.products.map((product) => (
                <CatalogItem
                  prof={product.description}
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={
                    typeof product.price === "number"
                      ? "Бесплатно"
                      : product.price
                  }
                  description={item.description}
                />
              ))
            )}

          {filteredCategories.map((category) => (
            <>
              <li style={{ margin: "30px 0" }}>
                <h2 className={style.category__caption}>{category}</h2>
              </li>
              {catalog?.shops
                .filter((element) => element.name === category)
                .map((item) =>
                  item.products.map((product) => (
                    <>
                      <CatalogItem
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        prof={product.description}
                        description={item.description}
                      />
                    </>
                  ))
                )}
            </>
          ))}
        </ul>
      </section>
      <SlidingCatalog
        fullHeight={"70vh"}
        initialHeight={"70%"}
        isOpen={isOpen}
        onClose={handleClose}
      />
    </>
  );
};

export default Catalog;
