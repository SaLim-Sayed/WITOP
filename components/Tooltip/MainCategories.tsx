"use client";
import Center from "@/components/Global/Ui/Center";
import { Tooltip, Button } from "@nextui-org/react";
import Content from "./Content";
import Link from "next/link";
import { useTranslations } from "next-intl";
interface IProps {}

const MainCategories = ({}: IProps) => {
  const translate = useTranslations("Categories");
  const translateSub = useTranslations("Categories.SubCategory");
  const translateSubDesc = useTranslations("Categories.SubCategory.Desc");
  const translatee = useTranslations("Brands");
  const useCategory = [
    {
      category: translate("Category/SkinCare"),
      subCategories: [
        {
          name: translateSub("PremiumCare"),
          items: [
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
          ],
        },
        {
          name: translateSub("Exfoliator"),
          items: [translateSubDesc("Scrub"), translateSubDesc("Exfoliator")],
        },
        {
          name: translateSub("Masks"),
          items: [translateSubDesc("FaceMask")],
        },
        {
          name: translateSub("Ampoles"),
          items: [
            translateSubDesc("RenualAmpoles"),
            translateSubDesc("ShiningAmpoule"),
          ],
        },
        {
          name: translateSub("SunBlock"),
          items: [
            translateSubDesc("SPFCream"),
            translateSubDesc("SPFMilk"),
            translateSubDesc("SPFSpray"),
            translateSubDesc("SPFLotion"),
          ],
        },
      ],
    },
    {
      category: translate("Category/BodyCare"),
      subCategories: [
        {
          name: translateSub("BodyMoisturising"),
          items: [
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
          ],
        },
        {
          name: translateSub("BathingCare"),
          items: [
            translateSubDesc("BathSoap"),
            translateSubDesc("BathSalt"),
            translateSubDesc("BathSponge"),
            translateSubDesc("BodyLoofah"),
            translateSubDesc("ShowerGel"),
          ],
        },
        {
          name: translateSub("PersonalCare"),
          items: [
            translateSubDesc("Intimate"),
            translateSubDesc("Exfoliator"),
            translateSubDesc("BodySupplements"),
            translateSubDesc("BodyCleansing"),
            translateSubDesc("Waxing"),
            translateSubDesc("Deodorant"),
            translateSubDesc("HairRemoval"),
          ],
        },
        {
          name: translateSub("BodyTan"),
          items: [
            translateSubDesc("AfterSun"),
            translateSubDesc("SelfTanning"),
          ],
        },
      ],
    },
    {
      category: translate("Category/MakeUp"),
      subCategories: [
        {
          name: translateSub("Face"),
          items: [
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
          ],
        },
        {
          name: translateSub("Eyes"),
          items: [
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
          ],
        },
        {
          name: translateSub("Lips"),
          items: [
            translateSubDesc("Lipstick"),
            translateSubDesc("LipPlumper"),
            translateSubDesc("LipScrub"),
            translateSubDesc("LiquidLipstick"),
            translateSubDesc("LipLiner"),
            translateSubDesc("LipStain"),
            translateSubDesc("Gloss"),
            translateSubDesc("GiftSets"),
          ],
        },
        {
          name: translateSub("Nails"),
          items: [
            translateSubDesc("NailPolish"),
            translateSubDesc("NailFile"),
            translateSubDesc("NailTools"),
            translateSubDesc("NailPolishRemover"),
            translateSubDesc("NailStickers"),
            translateSubDesc("NailsTretment"),
            translateSubDesc("BaseCoatTopCoats"),
            translateSubDesc("NailKits"),
            translateSubDesc("GiftSets"),
          ],
        },
      ],
    },
    {
      category: translate("Category/HairCare"),
      subCategories: [
        {
          name: translateSub("BathingCare"),
          items: [translateSubDesc("Shampoo"), translateSubDesc("Conditioner")],
        },
        {
          name: translateSub("HairDyes"),
          items: [
            translateSubDesc("Heena"),
            translateSubDesc("HairPowder"),
            translateSubDesc("HairColors"),
            translateSubDesc("TemperaryHairColors"),
          ],
        },
        {
          name: translateSub("HairTreatment"),
          items: [
            translateSubDesc("HairSpray"),
            translateSubDesc("HairCrystal"),
            translateSubDesc("HairCream"),
            translateSubDesc("HairOil"),
            translateSubDesc("HairAmpoles"),
            translateSubDesc("HairSerum"),
          ],
        },
        {
          name: translateSub("HairAccessories"),
          items: [
            translateSubDesc("HairBrushes"),
            translateSubDesc("HairComb"),
            translateSubDesc("HairBib"),
            translateSubDesc("HairScissors"),
            translateSubDesc("HairPenny"),
            translateSubDesc("Hairtweezers"),
          ],
        },
      ],
    },
    {
      category: translate("Category/MouthCare"),
      subCategories: [
        {
          name: translateSub("ToothCare"),
          items: [
            translateSubDesc("Toothpaste"),
            translateSubDesc("ToothBrushes"),
            translateSubDesc("Toothpick"),
            translateSubDesc("DentalFloss"),
          ],
        },
        {
          name: translateSub("GumsCare"),
          items: [translateSubDesc("RinseMouth"), translateSubDesc("WaterJet")],
        },
        {
          name: translateSub("MouthFreshener"),
          items: [
            translateSubDesc("Mouthfreshener"),
            translateSubDesc("ChewingGums"),
          ],
        },
        {
          name: translateSub("ToothWhitening"),
          items: [translateSubDesc("WhitningTeethMask")],
        },
        {
          name: translateSub("LipsCare"),
          items: [translateSubDesc("LipsMouisturising")],
        },
      ],
    },

    {
      category: translate("Category/HandsCare"),
      subCategories: [
        {
          name: translateSub("HandMoisturising"),
          items: [
            translateSubDesc("MoisturizingGloves"),
            translateSubDesc("HandCream"),
            translateSubDesc("HandLotion"),
          ],
        },
        {
          name: translateSub("NailsCare"),
          items: [translateSubDesc("NailMoisturising")],
        },
        {
          name: translateSub("HandTreatment"),
          items: [
            translateSubDesc("HandRelieves"),
            translateSubDesc("HandSweatTreatment"),
          ],
        },
      ],
    },
    {
      category: translate("Category/FootsCare"),
      subCategories: [
        {
          name: translateSub("FootMoisturising"),
          items: [
            translateSubDesc("FootsCream"),
            translateSubDesc("MoisturizingGloves"),
            translateSubDesc("FootsLotion"),
          ],
        },
        {
          name: translateSub("NailsCare"),
          items: [
            translateSubDesc("Nailsscissors"),
            translateSubDesc("Nailsskinscissors"),
            translateSubDesc("NailsFile"),
          ],
        },
        {
          name: translateSub("SkinExfoliators"),
          items: [translateSubDesc("FootsScrub")],
        },
        {
          name: translateSub("FootsCareTools"),
          items: [translateSubDesc("FootsCareTools")],
        },
        {
          name: translateSub("FootTreatment"),
          items: [
            translateSubDesc("FootRelieves"),
            translateSubDesc("FootSweatTreatment"),
          ],
        },
        {
          name: translateSub("FootBaths"),
          items: [translateSubDesc("BathEffervesnt")],
        },
      ],
    },
    {
      category: translate("Category/MotherBabyCare"),
      subCategories: [
        {
          name: translateSub("DiapersChanging"),
          items: [
            translateSubDesc("Diapers"),
            translateSubDesc("WetWipes"),
            translateSubDesc("MoisturisingCream"),
          ],
        },
        {
          name: translateSub("MommyCare"),
          items: [
            translateSubDesc("Breastpumb"),
            translateSubDesc("FemininePads"),
            translateSubDesc("BreastCover"),
          ],
        },
        {
          name: translateSub("ChildCare"),
          items: [translateSubDesc("BabyPerfume")],
        },
        {
          name: translateSub("BabyFoodTools"),
          items: [
            translateSubDesc("BabyMilkBottels"),
            translateSubDesc("MilkPowder"),
            translateSubDesc("FeedingEquipments"),
          ],
        },
        {
          name: translateSub("BathingCare"),
          items: [
            translateSubDesc("Babylotion"),
            translateSubDesc("BabyShampoo"),
            translateSubDesc("BabyOil"),
            translateSubDesc("BabyWash"),
            translateSubDesc("GiftSets"),
            translateSubDesc("BabyPowder"),
          ],
        },
      ],
    },
    {
      category: translate("Category/Accessories"),
      subCategories: [
        {
          name: translateSub("MenAccessories"),
          items: [
            translateSubDesc("ShavingRazor"),
            translateSubDesc("SkinSuppliments"),
            translateSubDesc("ShavingProducts"),
            translateSubDesc("AfterShave"),
            translateSubDesc("FoodSupplements+protiens"),
            translateSubDesc("BodySpray"),
          ],
        },
        {
          name: translateSub("WomenAccessories"),
          items: [
            translateSubDesc("ShavingRazor"),
            translateSubDesc("SounaSuit"),
            translateSubDesc("DisposableBrowRazor"),
          ],
        },
        {
          name: translateSub("BabyAccessories"),
          items: [
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
          ],
        },
      ],
    },
    {
      category: translate("Category/Perfumes"),
      subCategories: [
        {
          name: translateSub("EAUDEToiletteEDT"),
          items: [
            translateSubDesc("WomenPerfums"),
            translateSubDesc("MenPerfums"),
            translateSubDesc("UniSexPerfums"),
          ],
        },
        {
          name: translateSub("EAUDEPerfume"),
          items: [
            translateSubDesc("WomenPerfums"),
            translateSubDesc("MenPerfums"),
            translateSubDesc("UniSexPerfums"),
          ],
        },
        {
          name: translateSub("OriantelPerfume"),
          items: [
            translateSubDesc("PrivateLabel"),
            translateSubDesc("LocalSupplier"),
          ],
        },
        {
          name: translateSub("GiftSets"),
          items: [translateSubDesc("WomenSet"), translateSubDesc("MensSet")],
        },
      ],
    },

    {
      category: translate("Category/MedicalProducts"),
      subCategories: [
        {
          name: translateSub("MeasurementMachines"),
          items: [
            translateSubDesc("PressureDevices"),
            translateSubDesc("GlucoseMeters"),
            translateSubDesc("BodyWeightScale"),
            translateSubDesc("Thermometer"),
          ],
        },
        {
          name: translateSub("MuscleRelaxation"),
          items: [translateSubDesc("AntiInflamatoryGel+cream")],
        },
        {
          name: translateSub("MedicalDevices"),
          items: [
            translateSubDesc("Woundplasters"),
            translateSubDesc("MedicalCourset"),
            translateSubDesc("PregnancyTest"),
            translateSubDesc("Suppliments"),
            translateSubDesc("BackPainPatches"),
            translateSubDesc("FirstAidBag"),
          ],
        },
      ],
    },

    {
      category: translate("Category/HomeEquipment"),
      subCategories: [
        {
          name: translateSub("Antiseptics"),
          items: [
            translateSubDesc("FloorAntiseptics"),
            translateSubDesc("Suppliments"),
            translateSubDesc("SprayAntiseptics"),
            translateSubDesc("SurfaceAntiseptics"),
          ],
        },
        {
          name: translateSub("Fregrance"),
          items: [
            translateSubDesc("HomeFregrance"),
            translateSubDesc("FurnutreFregrance"),
          ],
        },
        {
          name: translateSub("Battaries"),
          items: [translateSubDesc("Battaries")],
        },
        {
          name: translateSub("Washing"),
          items: [translateSubDesc("WashingMachineProducts")],
        },
        {
          name: translateSub("Tissues"),
          items: [
            translateSubDesc("PerfumedWipes"),
            translateSubDesc("SingleuseTissue"),
            translateSubDesc("WetTissue"),
          ],
        },
        {
          name: translateSub("Sticks"),
          items: [
            translateSubDesc("WaxWoodSticks"),
            translateSubDesc("CottonBuds"),
          ],
        },
      ],
    },
    {
      category: translate("Category/ElectronicDevices"),
      subCategories: [
        {
          name: translateSub("HairDevices"),
          items: [translateSubDesc("DryersStylers")],
        },
        {
          name: translateSub("HeadDevice"),
          items: [translateSubDesc("HeatCap")],
        },
        {
          name: translateSub("BodyDevices"),
          items: [
            translateSubDesc("BodyCleaningDevices"),
            translateSubDesc("SteamDevices"),
            translateSubDesc("MassageDevices"),
          ],
        },
        {
          name: translateSub("FacialDevices"),
          items: [translateSubDesc("CuttingRemover")],
        },
        {
          name: translateSub("FootDevices"),
          items: [translateSubDesc("FootBath")],
        },
        {
          name: translateSub("WaxingMachine"),
          items: [translateSubDesc("WaxingPool")],
        },
      ],
    },
    //...(Othercategories)

    //...othermaincategories
  ];
  return (
    <div className="hidden md:inline bg-[#d9d7d7]">
      <Center>
        <div className="flex gap-[1px] mt-4 items-center justify-between mb-8">
          <Button
            radius="sm"
            size="sm"
            variant="light"
            color="default"
            className="hover:bg-cyan-500 text-lg text-black"
            as={Link}
            href="/brands"
          >
            {translatee("Brands")}
          </Button>

          {useCategory.map((category, index) => (
            <Tooltip
              key={index}
              showArrow
              placement="bottom"
              content={<Content subCategory={category.subCategories} />}
              classNames={{
                base: [
                  //arrowcolor
                  "min-w-[90%]",
                  "before:bg-neutral-400dark:before:bg-white",
                ],
                content: [
                  "mx-4 mb-4",
                  "py-4 px-4 shadow-xl",
                  "text-black bg-gradient-to-br from-white to-neutral-100",
                ],
              }}
            >
              <Button
                radius="sm"
                variant="light"
                color="secondary"
                size="sm"
                className="hover:bg-cyan-300 text-tiny p-1 w-fit text-black"
               
              >
                {category.category}
              </Button>
            </Tooltip>
          ))}
        </div>
      </Center>
    </div>
  );
};

export default MainCategories;
