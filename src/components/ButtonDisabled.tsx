import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<'button'>{
}

export const ButtonDisabled = (props:Props) => {
    return (
        <button  
        {...props}
            className={twMerge("border border-white/10 rounded-md p-1.5 text-base font-bold tracking-wide",
            props.disabled ? 'opacity-10' : null
            )} 
          
        >
             {props.title}
              </button>
    )

}