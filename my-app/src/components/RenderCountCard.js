import * as React from "react";
import { useMediaQuery } from "./hooks/useMediaQuery";

const LG_ROW_CARD_COUNT = 4;
const MD_ROW_CARD_COUNT = 4;
const SM_ROW_CARD_COUNT = 2;

const LG_INITIAL_CARD_COUNT = 16;
const MD_INITIAL_CARD_COUNT = 16;
const SM_INITIAL_CARD_COUNT = 5;

export default function RenderCountCard() {

  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  const cardColumnCount = isDesktop
    ? LG_ROW_CARD_COUNT
    : isTablet
    ? MD_ROW_CARD_COUNT
    : SM_ROW_CARD_COUNT;

  const initialCardCount = isDesktop
    ? LG_INITIAL_CARD_COUNT
    : isTablet
    ? MD_INITIAL_CARD_COUNT
    : SM_INITIAL_CARD_COUNT;

  const [visibleCardCount, setVisibleCardCount] = React.useState(
    initialCardCount
  );

  /* делается округление до ровного числа карточек в строке, "костылек",
  так как в моем примере не всегда их количество кратно количеству колонок.
  Косяк такого способа дозагрузки. В реальном проекте нет таких заморочек,
  при любой ширине экрана размер "страницы" - один и тот же.
  Никто мучать бэк запросами 5и карточек не будет никогда
  В дипломной работе возможно, с вашими числами такое не потребуется
               |
               |
               v
  */
  const roundedVisibleCardCount =
   visibleCardCount / cardColumnCount * cardColumnCount;

   const handleClick = () => {
    calculateCardCount();
  };

  const calculateCardCount = () => {
    if (isDesktop) {
      return setVisibleCardCount(visibleCardCount + LG_ROW_CARD_COUNT);
    }

    if (isTablet) {
      return setVisibleCardCount(visibleCardCount + MD_ROW_CARD_COUNT);
    }
    setVisibleCardCount(visibleCardCount + SM_ROW_CARD_COUNT);
  };
  return ( {roundedVisibleCardCount, handleClick, visibleCardCount, setVisibleCardCount, initialCardCount} );
};
