// import { useState } from "react";
// import { Modal } from "../../ui/Modal/Modal";
// import { onboardingArr } from "./onboardingData";
// import style from "./onboarding.module.scss";

// export const Onboarding = () => {
// const [openModal, setOpenModal] = useState(true);
// const [page, setPage] = useState(1);
//   const oneStep = 1;

//   return (
//     <Modal lazy isOpen={openModal}>
//       <ul className={style.onboarding__list}>
//         {onboardingArr
//           .slice((page - 1) * oneStep, page * oneStep)
//           .map((item) => (
//             <li className={style.onboarding__item} key={item.id}>
//               <img
//                 className={style.onboarding__image}
//                 width={375}
//                 height={400}
//                 src={item.image}
//                 alt=""
//               />
//               <div className={style.onboarding__info}>
//                 <h2 className={style.onboarding__title}>{item.title}</h2>
//                 <p className={style.onboarding__label}>{item.label}</p>
//               </div>
//             </li>
//           ))}
//       </ul>
//     </Modal>
//   );
// };
