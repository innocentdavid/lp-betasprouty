/* eslint-disable @typescript-eslint/no-unused-vars */
const Card = ({
  heading,
  subHead,
  description,
  img,
  valueStyle,
  valueText,
}: {
  heading?: string;
  subHead?: string;
  description?: string;
  img?: string;
  valueText?: string;
  valueStyle?: string;
}) => {
  return (
    <div className="flex-1 font-dashboard">
      <div className="flex w-[85%] mx-auto p-[14px] bg-white border-zinc-200 border rounded-[12px]">
        {/* First Side */}
          <img
            className="h-10 min-w-10 rounded-full m-1"
            src={img ? img : "/images/bentoGrid/morganstewart.png"}
            alt="Profile Pic"
          />

        {/* Second Side */}
        <div className="p-1 w-60">
          <h2 className="text-[16px] font-semibold mb-2">
            {heading ? heading : "@morganstewart"}
          </h2>
          <h3 className="text-[12px] font-medium mb-2 text-black">
            {subHead ? subHead : "Morgan Stewart McGraw"}
          </h3>
          <p className="text-gray-700 text-[12px]">
            {description
              ? description
              : "For the girl creating her own future@rengglistudio"}
          </p>
        </div>

        {/* Third Side */}
        <div className="p-1 text-left">
          <p
            className={
              (valueStyle ? valueStyle : "bg-blue-500 text-white") +
              " text-[14px] font-bold py-2 text-center rounded min-w-20"
            }
          >
            {valueText ? valueText : "+1,546,421"}
          </p>
          <p className="text-xs text-gray-700 text-center mt-2">Followers</p>
        </div>
      </div>
    </div>
  );
};

// export const CardX = ({
//   heading,
//   subHead,
//   description,
//   img,
// }: {
//   heading?: string;
//   subHead?: string;
//   description?: string;
//   img?: string;
// }) => {

//   return (
//     <div className="flex-1 rounded-xl shadow-lg ">
//       <div className="flex w-full p-2 bg-white border-zinc-200 border rounded-xl">
//         {/* First Side */}
//         <div className="p-1 w-20">
//           <img
//             className="h-16 w-16 rounded-full"
//             src={img ? img : "/images/bentoGrid/morganstewart.png"}
//             alt="Profile Pic"
//           />
//         </div>

//         {/* Second Side */}
//         <div className="p-1 w-60">
//           <h3 className="text-md font-medium mb-2 text-gray-700">
//             {subHead ? subHead : "Sub-heading Text"}
//             <span className="text-gray-400 text-sm">@poster</span>
//           </h3>
//           <p className="text-gray-500 text-sm">
//             {description
//               ? description
//               : "Having followers is making you seem more reliable."}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Card;
