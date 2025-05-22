import { type FC, useState } from "react";
import scss from "./FilterLog.module.scss";

const FilterLog: FC = () => {
  const [transportType, setTransportType] = useState("all");
  const [weight, setWeight] = useState({ min: "", max: "" });
  const [region, setRegion] = useState("");
  const [location, setLocation] = useState("");
  const [paymentType, setPaymentType] = useState("all");

  const transportOptions = ["Все", "Грузовик", "Портер", "Фургон"];
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
      <div className={scss.content}>
        {/* Тип транспорта */}
        <div className={scss.section}>
          <h4>Тип транспорта</h4>
          <div className={scss.buttons}>
            {transportOptions.map((item) => (
              <button
                key={item}
                onClick={() => setTransportType(item)}
                className={`${scss.button} ${
                  transportType === item ? scss.active : ""
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className={scss.section}>
          <h4>Грузоподъёмность (т)</h4>
          <select
            value={weight.max}
            onChange={(e) =>
              setWeight((prev) => ({ ...prev, max: e.target.value }))
            }
            className={scss.select}
          >
            <option value="">Любая</option>
            <option value="1">До 1 т</option>
            <option value="2">До 2 т</option>
            <option value="5">До 5 т</option>
            <option value="10">До 10 т</option>
            <option value="20">До 20 т</option>
          </select>
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
    </section>
  );
};

export default FilterLog;
