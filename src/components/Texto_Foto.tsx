interface Props {
  text: string;
  image: string;
}

export const Texto_Foto = (props: Props) => {
  return (
    <div>
      <div className="pl-5 pb-5">
      <strong>{props.text}</strong>
      </div>
      <img src={props.image} className="" />
    </div>
  );
};
