import { type FC, useState } from "react";
import scss from "./FilterLog.module.scss";

const FilterLog: FC = () => {
  const [transportType, setTransportType] = useState("all");
  const [weight, setWeight] = useState({ min: "", max: "" });
  const [region, setRegion] = useState("");
  const [location, setLocation] = useState("");
  const [paymentType, setPaymentType] = useState("all");

  const transportOptions = ["all", "truck", "van", "trailer"];
  const regions = ["Москва", "Санкт-Петербург", "Новосибирск", "Казань"];

  const applyFilters = () => {
    const filters = {
      transportType,
      weight,
      region,
      location,
      paymentType,
    };
    console.log("Применены фильтры:", filters);
  };

  const resetFilters = () => {
    setTransportType("all");
    setWeight({ min: "", max: "" });
    setRegion("");
    setLocation("");
    setPaymentType("all");
  };

  return (
    <section className={scss.FilterLog}>
      <div className="container">
        <div className={scss.content}>
          <h2>Фильтрация логистики</h2>

          {/* Тип транспорта */}
          <div className={scss.section}>
            <h4>Тип транспорта</h4>
            <div className={scss.buttons}>
              {transportOptions.map((type) => (
                <button
                  key={type}
                  onClick={() => setTransportType(type)}
                  className={`${scss.button} ${
                    transportType === type ? scss.active : ""
                  }`}
                >
                  {type === "all"
                    ? "Все"
                    : type === "truck"
                    ? "Грузовик"
                    : type === "van"
                    ? "Фургон"
                    : "Прицеп"}
                </button>
              ))}
            </div>
          </div>

          <div className={scss.section}>
            <h4>Грузоподъёмность (кг)</h4>
            <div className={scss.range}>
              <input
                type="number"
                placeholder="Мин"
                value={weight.min}
                onChange={(e) =>
                  setWeight((prev) => ({ ...prev, min: e.target.value }))
                }
              />
              <span>–</span>
              <input
                type="number"
                placeholder="Макс"
                value={weight.max}
                onChange={(e) =>
                  setWeight((prev) => ({ ...prev, max: e.target.value }))
                }
              />
            </div>
          </div>

          <div className={scss.section}>
            <h4>Регион</h4>
            <select value={region} onChange={(e) => setRegion(e.target.value)}>
              <option value="">Все регионы</option>
              {regions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          {/* Местоположение */}
          <div className={scss.section}>
            <h4>Местоположение</h4>
            <input
              type="text"
              placeholder="Введите город"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {/* Действия */}
          <div className={scss.actions}>
            <button className={scss.apply} onClick={applyFilters}>
              Применить
            </button>
            <button className={scss.reset} onClick={resetFilters}>
              Сбросить
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterLog;
