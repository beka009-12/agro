import { type FC, useEffect, useState } from "react";
import scss from "./HomeFilter.module.scss";
import Btn from "../../../ui/btn/Btn";

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
      img: "https://videos.openai.com/vg-assets/assets%2Ftask_01jvvwgv12e6qrx2j7er1vcjyf%2F1747913863_img_1.webp?st=2025-05-22T09%3A43%3A24Z&se=2025-05-28T10%3A43%3A24Z&sks=b&skt=2025-05-22T09%3A43%3A24Z&ske=2025-05-28T10%3A43%3A24Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=2w%2Fq8jK78uf%2BKMHd%2B66diSWuWM1aR3qM5%2BX5kuM5Qvw%3D&az=oaivgprodscus",
    },
    {
      label: "Овощи",
      img: "https://lh5.googleusercontent.com/proxy/yWAvjVuCfV7sp1tcWv-rTziQBsLcnV79d6ZqaYMAsjxQDRpuB05Tl26_ROWwd85I4efKRHxaUA",
    },
    {
      label: "Зерновые",
      img: "https://img.freepik.com/premium-photo/wheat-grain-scoop-isolated-white-background_182252-3255.jpg",
    },
    {
      label: "Корм для животных",
      img: "https://loyal-machine.com/wp-content/uploads/2024/09/1.7-4.png",
    },
    {
      label: "Травы",
      img: "https://png.pngtree.com/png-vector/20250321/ourmid/pngtree-round-hay-bale-golden-straw-rural-farm-scene-agriculture-isolated-on-png-image_15810699.png",
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

export default HomeFilter;
