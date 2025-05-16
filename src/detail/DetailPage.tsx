import { type FC, useState } from "react";
import { useParams } from "react-router-dom";
import scss from "./DetailPage.module.scss";

// mockProducts.ts с описанием и контактами
export const mockProducts = [
  {
    id: "1",
    title: "Органические помидоры",
    category: "Овощи",
    type: "Килограмм",
    region: "Чуйская область",
    price: "75 сом/кг",
    description:
      "Свежие органические помидоры, выращенные без пестицидов и химикатов. Идеально подходят для салатов и соусов.",
    contacts: ["+996 500 123 456", "+996 700 654 321"],
    images: [
      "https://cdn11.bigcommerce.com/s-a9b4a/images/stencil/500x659/products/2283/6294/Large_Red_Cherry__42357.1734558424.png?c=2",
      "https://www.amkhaseed.com/cdn/shop/products/tomato-large-red-cherry-solanum-lycopersicum-seeds-amkha-seed_478_1023x.jpg?v=1571439205",
      "https://pepperjoe.com/cdn/shop/products/LargeCherryTom.jpg?v=1646923482",
    ],
  },
  {
    id: "2",
    title: "Картофель молодой",
    category: "Овощи",
    type: "Килограмм",
    region: "Таласская область",
    price: "45 сом/кг",
    description:
      "Молодой картофель с нежной кожурой и отличным вкусом, выращенный в экологически чистых условиях.",
    contacts: ["+996 555 789 012", "+996 700 123 456"],
    images: [
      "https://www.mrfothergills.com.au/cdn/shop/files/potato_kennebec.png?v=1716852799",
      "https://www.harrisseeds.com/cdn/shop/files/11391b.jpg?v=1734659113",
    ],
  },
];

const DetailPage: FC = () => {
  const { id } = useParams();
  const product = mockProducts.find((item) => item.id === id);

  if (!product) {
    return <p className="container">Товар не найден</p>;
  }

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <section className={scss.DetailPage}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.imageSection}>
            <div className={scss.mainImage}>
              <img src={selectedImage} alt="product" />
            </div>
            <div className={scss.thumbnails}>
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`thumb-${i}`}
                  onClick={() => setSelectedImage(img)}
                  className={selectedImage === img ? scss.active : ""}
                />
              ))}
            </div>
          </div>

          <div className={scss.infoSection}>
            <h2>{product.title}</h2>
            <p>
              <strong>Категория:</strong> {product.category}
            </p>
            <p>
              <strong>Тип:</strong> {product.type}
            </p>
            <p>
              <strong>Регион:</strong> {product.region}
            </p>
            <p className={scss.price}>
              <strong>Цена:</strong> {product.price}
            </p>

            <div className={scss.description}>
              <h4>Описание</h4>
              <p>{product.description}</p>
            </div>
            <button className={scss.orderBtn}>Заказать</button>

            <div className={scss.contacts}>
              <h4>Контактная информация</h4>
              {product.contacts.map((phone, i) => (
                <p key={i}>📞 {phone}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
