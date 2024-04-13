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
      <div className="flex w-[85%] xl:w-full mx-auto p-[14px] bg-white border-zinc-200 border _rounded-[12px] rounded-xl shadow-lg">
        {/* First Side */}
        <img
          className="h-10 min-w-10 xl:h-14 xl:min-w-14 rounded-full m-1"
          src={img ? img : "/images/bentoGrid/morganstewart.png"}
          alt="Profile Pic"
        />

        {/* Second Side */}
        <div className="p-1 w-60">
          <h2 className="text-[16px] xl:text-[18px] font-semibold mb-2">
            {heading ? heading : "@morganstewart"}
          </h2>
          <h3 className="text-[12px] xl:text-sm font-medium mb-2 text-black">
            {subHead ? subHead : "Morgan Stewart McGraw"}
          </h3>
          <p className="text-gray-700 text-[12px] xl:text-sm">
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
              " text-[14px] xl:text-base font-bold py-2 text-center rounded min-w-20 xl:min-w-[100px]"
            }
          >
            {valueText ? valueText : "+1,546,421"}
          </p>
          <p className="text-xs xl:text-sm text-gray-700 text-center mt-2">Followers</p>
        </div>
      </div>
    </div>
  );
};

export const CardX = ({
  // heading,
  fullName,
  username,
  description,
  img,
}: {
  heading?: string;
  fullName?: string;
  username?: string;
  description?: string;
  img?: string;
}) => {
  return (
    <div className="flex-1 rounded-xl shadow-lg">
      <div className="flex w-full p-2 bg-white border-zinc-200 border rounded-[16px]">
        {/* First Side */}
        <div className="p-1 w-20">
          <img
            className="h-16 w-16 rounded-full"
            src={img ? img : "/images/bentoGrid/morganstewart.png"}
            alt="Profile Pic"
          />
        </div>

        {/* Second Side */}
        <div className="p-1 w-60">
          <h3 className="text-md font-medium mb-2 text-gray-700">
            {fullName ? fullName : "Morgan"}
            <span className="text-gray-400 text-sm ml-1">{username ?? "@morganstewart"}</span>
          </h3>
          <p className="text-gray-500 text-sm">
            {description
              ? description
              : `Reply with "DM" to get early access to my new collection.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
