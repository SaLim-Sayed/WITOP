// useCategory.js
import { useState } from "react";
import { useTranslations } from "next-intl";

const PAGE_SIZE = 5; // Number of categories per page

const useCategory = () => {
  const translateSubDesc = useTranslations("Categories.SubCategory.Desc");
  const [currentPage, setCurrentPage] = useState(1);

  // Function to calculate the start index of categories based on the current page
  const calculateStartIndex = () => (currentPage - 1) * PAGE_SIZE;

  // Function to get a subset of categories based on the current page
  const getCategoriesForPage = () => {
    const startIndex = calculateStartIndex();
    const endIndex = startIndex + PAGE_SIZE;
    return categories.slice(startIndex, endIndex);
  };

  // Dummy categories array (replace with your actual data)
  const categories = [
    translateSubDesc("NightCare"),
    translateSubDesc("DayCare"),
    translateSubDesc("FaceSpray"),
    translateSubDesc("MoisturiserHydrating"),
    translateSubDesc("SkinTreatment"),
    translateSubDesc("Whitening"),
    translateSubDesc("FirmingLifting"),
    translateSubDesc("AntiAging"),
    translateSubDesc("Shining"),
    translateSubDesc("Serum"),
    translateSubDesc("Cleanser"),
    translateSubDesc("Toner"),
    translateSubDesc("Scrub"),
    translateSubDesc("Exfoliator"),
    translateSubDesc("FaceMask"),

    translateSubDesc("RenualAmpoles"),
    translateSubDesc("ShiningAmpoule"),

    translateSubDesc("SPFCream"),
    translateSubDesc("SPFMilk"),
    translateSubDesc("SPFSpray"),
    translateSubDesc("SPFLotion"),

    translateSubDesc("BodyCream"),
    translateSubDesc("BodyGel"),
    translateSubDesc("BodyFirmingLifting"),
    translateSubDesc("AntiAging"),
    translateSubDesc("BodyWhitening"),
    translateSubDesc("BodyLotion"),
    translateSubDesc("BodyMist"),
    translateSubDesc("BodyPowder"),
    translateSubDesc("Ampoles"),
    translateSubDesc("OilControl"),

    translateSubDesc("BathSoap"),
    translateSubDesc("BathSalt"),
    translateSubDesc("BathSponge"),
    translateSubDesc("BodyLoofah"),
    translateSubDesc("ShowerGel"),

    translateSubDesc("Intimate"),
    translateSubDesc("Exfoliator"),
    translateSubDesc("BodySupplements"),
    translateSubDesc("BodyCleansing"),
    translateSubDesc("Waxing"),
    translateSubDesc("Deodorant"),
    translateSubDesc("HairRemoval"),

    translateSubDesc("AfterSun"),
    translateSubDesc("SelfTanning"),

    translateSubDesc("PrimerBase"),
    translateSubDesc("Foundation"),
    translateSubDesc("Powder"),
    translateSubDesc("Concealer"),
    translateSubDesc("BBCream"),
    translateSubDesc("CCCream"),
    translateSubDesc("Blush"),
    translateSubDesc("MakeUpSuppliments"),
    translateSubDesc("IlluminatorHighlighter"),
    translateSubDesc("Bronzer"),
    translateSubDesc("Contour"),
    translateSubDesc("MakeupBrushes"),
    translateSubDesc("Sponges"),
    translateSubDesc("MakeUpRemover"),
    translateSubDesc("MakeupFixing"),
    translateSubDesc("MakeupPads"),
    translateSubDesc("GiftSets"),

    translateSubDesc("EyeShadow"),
    translateSubDesc("BrowLiner"),
    translateSubDesc("BrowMascara"),
    translateSubDesc("BrowGel"),
    translateSubDesc("Mascara"),
    translateSubDesc("EyeLiner"),
    translateSubDesc("EyeBrows"),
    translateSubDesc("PrimerBase"),
    translateSubDesc("EyePalettes"),
    translateSubDesc("EyeLashesCurlers"),
    translateSubDesc("EyeMakeUpRemover"),
    translateSubDesc("Lenses"),
    translateSubDesc("BrowLashesTools"),
    translateSubDesc("GiftSets"),

    translateSubDesc("Lipstick"),
    translateSubDesc("LipPlumper"),
    translateSubDesc("LipScrub"),
    translateSubDesc("LiquidLipstick"),
    translateSubDesc("LipLiner"),
    translateSubDesc("LipStain"),
    translateSubDesc("Gloss"),
    translateSubDesc("GiftSets"),

    translateSubDesc("NailPolish"),
    translateSubDesc("NailFile"),
    translateSubDesc("NailTools"),
    translateSubDesc("NailPolishRemover"),
    translateSubDesc("NailStickers"),
    translateSubDesc("NailsTretment"),
    translateSubDesc("BaseCoatTopCoats"),
    translateSubDesc("NailKits"),
    translateSubDesc("GiftSets"),
    translateSubDesc("Shampoo"),
    translateSubDesc("Conditioner"),
    translateSubDesc("Heena"),
    translateSubDesc("HairPowder"),
    translateSubDesc("HairColors"),
    translateSubDesc("TemperaryHairColors"),

    translateSubDesc("HairSpray"),
    translateSubDesc("HairCrystal"),
    translateSubDesc("HairCream"),
    translateSubDesc("HairOil"),
    translateSubDesc("HairAmpoles"),
    translateSubDesc("HairSerum"),

    translateSubDesc("HairBrushes"),
    translateSubDesc("HairComb"),
    translateSubDesc("HairBib"),
    translateSubDesc("HairScissors"),
    translateSubDesc("HairPenny"),
    translateSubDesc("Hairtweezers"),

    translateSubDesc("Toothpaste"),
    translateSubDesc("ToothBrushes"),
    translateSubDesc("Toothpick"),
    translateSubDesc("DentalFloss"),
    translateSubDesc("RinseMouth"),
    translateSubDesc("WaterJet"),
    translateSubDesc("Mouthfreshener"),
    translateSubDesc("ChewingGums"),
    translateSubDesc("WhitningTeethMask"),
    translateSubDesc("LipsMouisturising"),
    translateSubDesc("MoisturizingGloves"),
    translateSubDesc("HandCream"),
    translateSubDesc("HandLotion"),
    translateSubDesc("NailMoisturising"),
    translateSubDesc("HandRelieves"),
    translateSubDesc("HandSweatTreatment"),

    translateSubDesc("FootsCream"),
    translateSubDesc("MoisturizingGloves"),
    translateSubDesc("FootsLotion"),

    translateSubDesc("Nailsscissors"),
    translateSubDesc("Nailsskinscissors"),
    translateSubDesc("NailsFile"),
    translateSubDesc("FootsScrub"),
    translateSubDesc("FootsCareTools"),
    translateSubDesc("FootRelieves"),
    translateSubDesc("FootSweatTreatment"),
    translateSubDesc("BathEffervesnt"),
    translateSubDesc("Diapers"),
    translateSubDesc("WetWipes"),
    translateSubDesc("MoisturisingCream"),

    translateSubDesc("Breastpumb"),
    translateSubDesc("FemininePads"),
    translateSubDesc("BreastCover"),
    translateSubDesc("BabyPerfume"),
    translateSubDesc("BabyMilkBottels"),
    translateSubDesc("MilkPowder"),
    translateSubDesc("FeedingEquipments"),

    translateSubDesc("Babylotion"),
    translateSubDesc("BabyShampoo"),
    translateSubDesc("BabyOil"),
    translateSubDesc("BabyWash"),
    translateSubDesc("GiftSets"),
    translateSubDesc("BabyPowder"),

    translateSubDesc("ShavingRazor"),
    translateSubDesc("SkinSuppliments"),
    translateSubDesc("ShavingProducts"),
    translateSubDesc("AfterShave"),
    translateSubDesc("FoodSupplements+protiens"),
    translateSubDesc("BodySpray"),

    translateSubDesc("ShavingRazor"),
    translateSubDesc("SounaSuit"),
    translateSubDesc("DisposableBrowRazor"),

    translateSubDesc("EarRing"),
    translateSubDesc("cottonbuds"),
    translateSubDesc("nasalaspirator"),
    translateSubDesc("CoolingTeether"),
    translateSubDesc("BabyNailScissors"),
    translateSubDesc("Bib"),
    translateSubDesc("HairBrushes"),
    translateSubDesc("Buckle"),
    translateSubDesc("BabyLofa"),
    translateSubDesc("BabyPacifier"),

    translateSubDesc("WomenPerfums"),
    translateSubDesc("MenPerfums"),
    translateSubDesc("UniSexPerfums"),

    translateSubDesc("WomenPerfums"),
    translateSubDesc("MenPerfums"),
    translateSubDesc("UniSexPerfums"),

    translateSubDesc("PrivateLabel"),
    translateSubDesc("LocalSupplier"),
    translateSubDesc("WomenSet"),
    translateSubDesc("MensSet"),

    translateSubDesc("PressureDevices"),
    translateSubDesc("GlucoseMeters"),
    translateSubDesc("BodyWeightScale"),
    translateSubDesc("Thermometer"),
    translateSubDesc("AntiInflamatoryGel+cream"),
    translateSubDesc("Woundplasters"),
    translateSubDesc("MedicalCourset"),
    translateSubDesc("PregnancyTest"),
    translateSubDesc("Suppliments"),
    translateSubDesc("BackPainPatches"),
    translateSubDesc("FirstAidBag"),

    translateSubDesc("FloorAntiseptics"),
    translateSubDesc("Suppliments"),
    translateSubDesc("SprayAntiseptics"),
    translateSubDesc("SurfaceAntiseptics"),

    translateSubDesc("HomeFregrance"),
    translateSubDesc("FurnutreFregrance"),
    translateSubDesc("Battaries"),
    [
      translateSubDesc("WashingMachineProducts"),
      translateSubDesc("PerfumedWipes"),
      translateSubDesc("SingleuseTissue"),
      translateSubDesc("WetTissue"),

      translateSubDesc("WaxWoodSticks"),
      translateSubDesc("CottonBuds"),
      translateSubDesc("DryersStylers"),
      translateSubDesc("HeatCap"),
      translateSubDesc("BodyCleaningDevices"),
      translateSubDesc("SteamDevices"),
      translateSubDesc("MassageDevices"),
      translateSubDesc("CuttingRemover"),
      translateSubDesc("FootBath"),
      translateSubDesc("WaxingPool"),
    ],
    //...(Othercategories)

    //...othermaincategories
  ];
  // Function to handle pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    categories: getCategoriesForPage(),
    totalPages: Math.ceil(categories.length / PAGE_SIZE),
    handlePageChange,
  };
};

export default useCategory;
