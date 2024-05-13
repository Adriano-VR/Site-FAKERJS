import BasicSpeedDial from "./Speed_Dial";

interface Props {
  text: string;
  image: string;
}

export const Texto_Foto = (props: Props) => {
  return (
    <div className="relative">
      <div className="pl-5 pb-5 pr-5 max-w-full ">
      <p className="text-justify text-base font-bold">{props.text}</p>
      </div>
     
      <img src={props.image} className="" />
      <div className="absolute bottom-2 right-2">
      <BasicSpeedDial  />

      </div>
    </div>
  );
};
