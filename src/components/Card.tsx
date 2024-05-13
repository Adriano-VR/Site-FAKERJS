import React, { useState, useEffect } from "react";
import { products } from "../data/dados";
import { Avatar_Username } from "./Avatar_Username";
import { Texto_Foto } from "./Texto_Foto";
import { Icon } from "@iconify-icon/react";
import { ButtonDisabled } from "./ButtonDisabled";

export const Card = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const [loadedItems, setLoadedItems] = useState(5);

  const avancar = () => {
    setPage(page + 1);
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const voltar = () => {
    setPage(page - 1);
    // window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const loadMore = () => {
    setLoadedItems((prevItems) => prevItems + 5); // Load more items
  };

  useEffect(() => {
    const checkAllImagesLoaded = () => {
      const imagePromises = products.map((product) => {
        return (
          new Promise<void>((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => reject();
            img.src = product.avatar;
          }),
          new Promise((resolve, reject) => {
            const productImg = new Image();
            productImg.onload = resolve;
            productImg.onerror = reject;
            productImg.src = product.image;
          })
        );
      });

      Promise.all(imagePromises)
        .then(() => setImagesLoaded(true))
        .catch(() => setImagesLoaded(false));
    };

    checkAllImagesLoaded();
  }, []);

  const totalPages = Math.ceil(products.length / 5);
  const renderedProducts = products.slice(0, loadedItems);

  return (
    <div className="flex flex-col items-center py-5 min-h-screen justify-center">
      {imagesLoaded ? (
        <div className="w-9/12">
          {renderedProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col border border-dark-200/30 mb-10 rounded"
            >
              <Avatar_Username
                avatar={product.avatar}
                fullName={product.fullName}
              />
              <Texto_Foto text={product.text} image={product.image} />
            </div>
          ))}

          <div className="flex items-center justify-center ">
            <div>
            <ButtonDisabled disabled={loadedItems >= products.length}
            onClick={loadMore} 
            title="Carregar Mais"
            />
            
            </div>
            {/* <button disabled={page === 1} onClick={voltar}>
              <Icon icon="gg:arrow-left-r" style={{ fontSize: "30px" }} />
            </button> */}

            {/* <button disabled={page === totalPages} onClick={avancar}>
              <Icon icon="gg:arrow-right-r" style={{ fontSize: "30px" }} />
            </button> */}
          </div>
        </div>
      ) : (
        <Icon
          icon="line-md:loading-twotone-loop"
          className="animate-spin"
          style={{ fontSize: "50px" }}
        />
      )}
    </div>
  );
};
