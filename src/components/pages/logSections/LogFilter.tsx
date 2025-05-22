import { useEffect, useState, type FC } from "react";
import scss from "./LogFilter.module.scss";
import Btn from "../../../ui/btn/Btn";

const LogFilter: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [unitType, setUnitType] = useState<string>("all");
  const [weight, setWeight] = useState({ min: "", max: "" });

  const [priceRange, setPriceRange] = useState<{ min: string; max: string }>({
    min: "0",
    max: "10000",
  });

  const categories = [
    {
      label: "Портек",
      img: "https://www.autodela.ru/assets/images/hyundai-porter-2.png",
    },
    {
      label: "Грузавик",
      img: "https://hkimg.bjyyb.net/sites/77000/77003/20230325105355495.webp?x-oss-process=image/resize,m_lfit,w_600/quality,q_75",
    },
    {
      label: "Зил",
      img: "https://ooopogat.ru/wp-content/uploads/zil.png",
    },
  ];

  const regions = [
    "Москва",
    "Санкт-Петербург",
    "Новосибирск",
    "Екатеринбург",
    "Казань",
  ];

  useEffect(() => {
    const savedFilters = JSON.parse(
      localStorage.getItem("homeFilters") || "[]"
    );
    if (savedFilters) {
      setSelectedCategory(savedFilters.category || "");
      setSelectedRegion(savedFilters.region || "");
      setUnitType(savedFilters.unitType || "all");
      setPriceRange(savedFilters.priceRange || { min: "0", max: "10000" });
    }
  }, []);

  const applyFilters = () => {
    const filters = {
      category: selectedCategory,
      region: selectedRegion,
      unitType,
      priceRange,
    };
    localStorage.setItem("homeFilters", JSON.stringify(filters));
    console.log("Применены фильтры:", filters);
  };

  const resetFilters = () => {
    setSelectedCategory("");
    setSelectedRegion("");
    setUnitType("all");
    setPriceRange({ min: "0", max: "10000" });
    localStorage.removeItem("homeFilters");
  };

  return (
    <>
      <div className={scss.homeFilter}>
        <div className="container">
          <div className={scss.filterContainer}>
            <h2 className={scss.filterTitle}>Фильтры</h2>

            {/* Категории */}
            <div className={scss.filterSection}>
              <h3 className={scss.sectionTitle}>Категории</h3>
              <div className={scss.categoriesGrid}>
                {categories.map(({ label, img }) => (
                  <div
                    key={label}
                    className={`${scss.categoryCard} ${
                      selectedCategory === label ? scss.active : ""
                    }`}
                    onClick={() => setSelectedCategory(label)}
                  >
                    <span className={scss.categoryCardLabel}>{label}</span>
                    <img src={img} alt={label} className={scss.categoryImage} />
                  </div>
                ))}
              </div>
            </div>

            {/* Регион */}
            <div className={scss.filterSection}>
              <h3 className={scss.sectionTitle}>Регион</h3>
              <select
                className={scss.regionSelect}
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
              >
                <option value="">Все регионы</option>
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>

            {/* Тип товара */}
            <div className={scss.filterSection}>
              <h3 className={scss.sectionTitle}>Грузоподъёмность (т)</h3>
              <select
                value={weight.max}
                onChange={(e) =>
                  setWeight((prev) => ({ ...prev, max: e.target.value }))
                }
                className={scss.regionSelect}
              >
                <option value="">Любая</option>
                <option value="1">До 1 т</option>
                <option value="2">До 2 т</option>
                <option value="5">До 5 т</option>
                <option value="10">До 10 т</option>
                <option value="20">До 20 т</option>
              </select>
            </div>

            {/* Цена */}
            <div className={scss.filterSection}>
              <h3 className={scss.sectionTitle}>
                Цена доставки: <strong>кг/шт</strong>
              </h3>
              <div className={scss.priceInputs}>
                <div className={scss.priceInputGroup}>
                  <label className={scss.priceLabel}>от</label>
                  <input
                    type="number"
                    className={scss.priceInput}
                    value={priceRange.min}
                    onChange={(e) =>
                      setPriceRange((prev) => ({
                        ...prev,
                        min: e.target.value,
                      }))
                    }
                    onBlur={() =>
                      setPriceRange((prev) => ({
                        ...prev,
                        min: prev.min.trim() === "" ? "0" : prev.min,
                      }))
                    }
                    min="0"
                  />
                </div>

                <div className={scss.priceInputGroup}>
                  <label className={scss.priceLabel}>до</label>
                  <input
                    type="number"
                    className={scss.priceInput}
                    value={priceRange.max}
                    onChange={(e) =>
                      setPriceRange((prev) => ({
                        ...prev,
                        max: e.target.value,
                      }))
                    }
                    onBlur={() =>
                      setPriceRange((prev) => ({
                        ...prev,
                        max: prev.max.trim() === "" ? "0" : prev.max,
                      }))
                    }
                    min="0"
                  />
                </div>
              </div>

              <div className={scss.rangeSlider}>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="1"
                  value={priceRange.min}
                  onChange={(e) =>
                    setPriceRange((prev) => ({
                      ...prev,
                      min: e.target.value,
                    }))
                  }
                />
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="1"
                  value={priceRange.max}
                  onChange={(e) =>
                    setPriceRange((prev) => ({
                      ...prev,
                      max: e.target.value,
                    }))
                  }
                />
              </div>
              <div className={scss.rangeValues}>
                <span>{priceRange.min} ₽</span>
                <span>{priceRange.max} ₽</span>
              </div>
            </div>

            <div className={scss.filterActions}>
              <div onClick={applyFilters}>
                <Btn
                  title="Примерить"
                  BkColor="#4caf50"
                  color="#fff"
                  border="none"
                />
              </div>
              <div onClick={resetFilters}>
                <Btn
                  title="Сбросить"
                  BkColor="#fff"
                  color="#555"
                  border="#e0e0e0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogFilter;
