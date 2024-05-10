import {products} from "../data/dados"
import { Avatar_Username } from "./Avatar_Username"
import { Texto_Foto } from "./Texto_Foto"


export const Card = () => {
    return (
        

        <div className="flex flex-col  items-center py-5">    
        {products.map((product) => {
              return (
                <div key={product.id} className="flex flex-col border border-dark-200/30 mb-10 rounded "> 
                 <Avatar_Username avatar={product.avatar} fullName={product.fullName}  />
                 <Texto_Foto text={product.text} image={product.image} /> 
                </div>
              ) 
            })}
         </div>
        
    )
}