import { type FC, useState } from "react";
import { useParams } from "react-router-dom";
import scss from "./DetailPage.module.scss";
import { MdWhatsapp } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";

export const mockProducts = [
  {
    id: "1",
    title: "Органические помидоры",
    category: "Овощи",
    type: "Килограмм",
    region: "Ошская область",
    location: "г Ош",
    price: "75 сом/кг",
    description:
      "Свежие органические помидоры, выращенные без пестицидов и химикатов. Идеально подходят для салатов и соусов.",
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
    region: "Чуйская область",
    location: "г Бишкек",
    price: "45 сом/кг",
    description:
      "Молодой картофель с нежной кожурой и отличным вкусом, выращенный в экологически чистых условиях.",
    images: [
      "https://www.mrfothergills.com.au/cdn/shop/files/potato_kennebec.png?v=1716852799",
      "https://www.harrisseeds.com/cdn/shop/files/11391b.jpg?v=1734659113",
    ],
  },
];

const DetailPage: FC = () => {
  const { id } = useParams();
  const product = mockProducts.find((item) => item.id === id);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(product?.images[0] || "");

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  if (!product) {
    return <p className="container">Товар не найден</p>;
  }

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
            <p>
              <strong>Местоположение:</strong> {product.location}
            </p>
            <a
              className={scss.map}
              href="https://2gis.kg/bishkek/geo/15763234350986242/74.613675%2C42.889757?m=74.613642%2C42.889196%2F17.25"
            >
              Расположение на карте
            </a>
            <p className={scss.price}>
              <strong>Цена:</strong> {product.price}
            </p>

            <div className={scss.description}>
              <h4>Описание</h4>
              <p>{product.description}</p>
            </div>
            <button className={scss.orderBtn} onClick={openModal}>
              Заказать
            </button>
          </div>
        </div>
      </div>

      {/* Модальное окно заказа */}
      {modalOpen && (
        <div className={scss.modalOverlay} onClick={closeModal}>
          <div className={scss.modal} onClick={(e) => e.stopPropagation()}>
            <button className={scss.close} onClick={closeModal}>
              ×
            </button>

            <div className={scss.modalIcons}>
              <h2>Связаться с владельцом</h2>
              <div className={scss.icons}>
                <MdWhatsapp className={scss.whatsapp} />
                <p>whatsapp</p>
              </div>
              <div className={scss.icons}>
                <FaInstagram className={scss.instagram} />
                <p>instagram</p>
              </div>
              <div className={scss.icons}>
                <MdOutlineLocalPhone className={scss.phone} />
                <p>994 ### ### ###</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DetailPage;
