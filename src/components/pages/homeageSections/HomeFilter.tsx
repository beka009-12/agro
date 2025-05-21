import { type FC, useEffect, useState } from "react";
import scss from "./HomeFilter.module.scss";
import Logistic from "./filterSections/Logistic";

const HomeFilter: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [unitType, setUnitType] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<{ min: string; max: string }>({
    min: "0",
    max: "10000",
  });

  const categories = [
    {
      label: "Фрукты",
      img: "https://png.pngtree.com/png-clipart/20240804/original/pngtree-group-of-different-fruit-png-image_15699816.png",
    },
    {
      label: "Овощи",
      img: "https://zefirka.club/uploads/posts/2023-01/1673878838_1-zefirka-club-p-ovoshchi-na-prozrachnom-fone-1.png",
    },
    {
      label: "Зерновые",
      img: "https://png.pngtree.com/png-clipart/20240314/original/pngtree-wheat-grains-isolated-png-png-image_14591035.png",
    },
    {
      label: "Корм для животных",
      img: "https://prok.ru/upload/landing/6bb/6bb2369b62a5bd4b348562beb4434195.png",
    },
    {
      label: "Травы",
      img: "https://foni.papik.pro/uploads/posts/2024-09/foni-papik-pro-y41a-p-kartinki-visokaya-trava-na-prozrachnom-fon-2.png",
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
      localStorage.getItem("homeFilters") || "{}"
    );
    if (savedFilters) {
      setSelectedCategory(savedFilters.category || "");
      setSelectedRegion(savedFilters.region || "");
      setUnitType(savedFilters.unitType || "all");
      setPriceRange(savedFilters.priceRange || { min: "0", max: "10000" });

      setTimeout(() => applyFilters(), 0);
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
                    <img src={img} alt={label} className={scss.categoryImage} />
                    <span className={scss.categoryCardLabel}>{label}</span>
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
              <h3 className={scss.sectionTitle}>Тип товара</h3>
              <div className={scss.unitTypeButtons}>
                {["all", "kg", "piece"].map((type) => (
                  <button
                    key={type}
                    className={`${scss.unitTypeButton} ${
                      unitType === type ? scss.active : ""
                    }`}
                    onClick={() => setUnitType(type)}
                  >
                    {type === "all"
                      ? "Все"
                      : type === "kg"
                      ? "Килограммы"
                      : "Штучно"}
                  </button>
                ))}
              </div>
            </div>

            {/* Цена */}
            <div className={scss.filterSection}>
              <h3 className={scss.sectionTitle}>Цена</h3>
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

              {/* Ползунки */}
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

            {/* Кнопки */}
            <div className={scss.filterActions}>
              <button className={scss.applyButton} onClick={applyFilters}>
                Применить
              </button>
              <button className={scss.resetButton} onClick={resetFilters}>
                Сбросить
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFilter;
