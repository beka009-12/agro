import { type FC, useEffect, useState } from "react";
import scss from "./HomeFilter.module.scss";

const HomeFilter: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [unitType, setUnitType] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<{ min: string; max: string }>({
    min: "0",
    max: "10000",
  });

  const categories = [
    "Фрукты",
    "Овощи",
    "Молочные продукты",
    "Зерновые",
    "Корм для животных",
    "Травы",
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

      // Автоматическое применение фильтров после восстановления состояний
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
    localStorage.removeItem("homeFilters"); // Очистка сохранённых фильтров
  };

  return (
    <div className={scss.homeFilter}>
      <div className="container">
        <div className={scss.filterContainer}>
          <h2 className={scss.filterTitle}>Фильтры</h2>

          {/* Категории */}
          <div className={scss.filterSection}>
            <h3 className={scss.sectionTitle}>Категории</h3>
            <div className={scss.categoriesList}>
              {categories.map((category) => (
                <div key={category} className={scss.categoryItem}>
                  <label className={scss.categoryLabel}>
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className={scss.categoryInput}
                    />
                    <span className={scss.categoryText}>{category}</span>
                  </label>
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
              <button
                className={`${scss.unitTypeButton} ${
                  unitType === "all" ? scss.active : ""
                }`}
                onClick={() => setUnitType("all")}
              >
                Все
              </button>
              <button
                className={`${scss.unitTypeButton} ${
                  unitType === "kg" ? scss.active : ""
                }`}
                onClick={() => setUnitType("kg")}
              >
                Килограммы
              </button>
              <button
                className={`${scss.unitTypeButton} ${
                  unitType === "piece" ? scss.active : ""
                }`}
                onClick={() => setUnitType("piece")}
              >
                Штучно
              </button>
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
  );
};

export default HomeFilter;
