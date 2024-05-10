interface Props {
  avatar:string;
  fullName:string;
}


export const Avatar_Username = (props: Props) => {
        return (
          <div className="flex p-5 items-center gap-4"> 
            <img src={props.avatar} alt="" className="size-14 rounded-full"/>
            <strong>{props.fullName}</strong>
          </div>
        ) 
      
  
}