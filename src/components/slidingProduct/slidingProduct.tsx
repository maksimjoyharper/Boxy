import SlidingPanel from "../../ui/SlidingPanel/SlidingPanel";
import style from "./slidingProduct.module.scss";
import { useTelegram } from "../../hooks/telegram/telegram";
import iconCoin from "../../assets/webp/coin.webp";
import { ICatalog } from "../../types/catalogTypes";
import { useBuyProduct } from "../../hooks/useHooks/useCatalog";

interface ISliding {
  isOpen: boolean;
  onClose: () => void;
  initialHeight: string;
  fullHeight: string;
  product: ICatalog;
}

export default function SlidingProduct({
  isOpen,
  onClose,
  initialHeight,
  fullHeight,
  product,
}: ISliding) {
  const { tg, tg_id } = useTelegram();
  const openLink = (link: string) => {
    tg.openLink(link, { try_instant_vew: true });
  };

  const { mutate: buyProduct } = useBuyProduct(
    openLink,
    product.link,
    onClose,
    tg
  );
  const handleTest = () => {
    buyProduct({ tg_id: tg_id, product_id: product.id });
    tg.HapticFeedback.impactOccurred("medium");
  };
  const handleBuyProduct = () => {
    if (!product.is_accessible) {
      buyProduct({ tg_id: tg_id, product_id: product.id });
      tg.HapticFeedback.impactOccurred("medium");
    } else return;
  };

  const handleCopyPromo = () => {
    navigator.clipboard.writeText("555");
    tg.HapticFeedback.impactOccurred("heavy");
  };

  return (
    <SlidingPanel
      darkened
      isOpen={isOpen}
      onClose={onClose}
      initialHeight={initialHeight}
      fullHeight={fullHeight}
    >
      <div className={style.sliding__block}>
        {product.currentCoin &&
        product.price !== 0 &&
        product.currentCoin >= +product.price ? (
          <>
            {product.id == "4" || product.id == "5" ? (
              <p className={style.promo}>
                {product.id == "4" && "BOXY5"}
                {product.id == "5" && "BOXY10"}
              </p>
            ) : null}
            <p className={style.name_title}>{product.name}</p>
            {product.id == "4" || product.id == "5" ? (
              <button
                onClick={handleCopyPromo}
                className={style.sliding_product_btn_promo}
              >
                Скопировать промокод
              </button>
            ) : null}
            <button
              onClick={handleBuyProduct}
              className={
                product.id == "4" || product.id == "5"
                  ? style.sliding_product_btn_promo
                  : style.sliding_product_btn_buy
              }
            >
              {product.id == "4" || product.id == "5"
                ? "Активировать"
                : "Купить"}
            </button>
          </>
        ) : (
          product.price !== 0 && (
            <>
              <p className={style.name_title_not}>Недостаточно баллов!</p>
              <img width={60} src={iconCoin} alt="" />
              <button
                onClick={() => onClose()}
                className={style.sliding_product_btn_buy}
              >
                Назад
              </button>
            </>
          )
        )}
        {product.price === 0 && (
          <>
            <p className={style.name_title}>{product.name}</p>
            <button
              onClick={handleTest}
              className={style.sliding_product_btn_buy}
            >
              Пройти
            </button>
          </>
        )}
      </div>
    </SlidingPanel>
  );
}
