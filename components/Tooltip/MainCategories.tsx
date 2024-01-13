import Center from "@/components/Global/Ui/Center";
import { Tooltip, Button } from "@nextui-org/react";
import Content from "./Content";
import Link from "next/link";
interface IProps {}

const MainCategories = ({}: IProps) => {
  const useCategory = [
    {
      category: "Skin Care",
      subCategories: [
        {
          name: "Premium Care",
          items: [
            "Night Care",
            "Day Care",
            "Face Spray",
            "Moisturiser & Hydrating",
            "Skin Treatment",
            "Whitening",
            "Firming & Lifting",
            "Anti Aging",
            "Shining",
            "Serum",
            "Cleanser",
            "Toner",
          ],
        },
        {
          name: "Exfoliator",
          items: ["Scrub", "Exfoliators"],
        },
        {
          name: "Masks",
          items: ["Face Mask"],
        },
        {
          name: "Ampoles",
          items: ["Renual Ampoles", "Shining Ampoule"],
        },
        {
          name: "Sun block",
          items: ["SPF Cream", "SPF Milk", "SPF Spray", "SPF Lotion"],
        },
      ],
    },
    {
      category: "Body Care",
      subCategories: [
        {
          name: "Body Moisturising",
          items: [
            "Body Cream",
            "Body Gel",
            "Body Firming & Lifting",
            "Anti Aging",
            "Body Whitening",
            "Body Lotion",
            "Body Mist",
            "Body Powder",
            "Ampoles",
            "Oil Control",
          ],
        },
        {
          name: "Bathing & Care",
          items: [
            "Bath Soap",
            "Bath Salt",
            "Bath Sponge",
            "Body Loofah",
            "Shower Gel",
          ],
        },
        {
          name: "Personal Care",
          items: [
            "Intimate",
            "Exfoliator",
            "Body Supplements",
            "Body Cleansing",
            "Waxing",
            "Deodorant",
            "Hair Removal",
          ],
        },
        {
          name: "Body Tan",
          items: ["After Sun", "Self Tanning"],
        },
      ],
    },
    {
      category: "Make Up",
      subCategories: [
        {
          name: "Face",
          items: [
            "Primer & Base",
            "Foundation",
            "Powder",
            "Concealer",
            "BB Cream",
            "CC Cream",
            "Blush",
            "Make-Up Suppliments",
            "Illuminator & Highlighter",
            "Bronzer",
            "Contour",
            "Makeup Brushes",
            "Sponges",
            "Make Up Remover",
            "Make up fixing",
            "Make up Pads",
            "Gift Sets",
          ],
        },
        {
          name: "Eyes",
          items: [
            "Eye Shadow",
            "Brow liner",
            "Brow Mascara",
            "Brow Gel",
            "Mascara",
            "Eye Liner",
            "EyeBrows",
            "Primer & Base",
            "Eye Palettes",
            "Eye Lashes & Curlers",
            "Eye Make Up Remover",
            "Lenses",
            "Brow & Lashes Tools",
            "Gift Sets",
          ],
        },
        {
          name: "Lips",
          items: [
            "Lipstick",
            "Lip plumper",
            "Lip scrub",
            "Liquid Lipstick",
            "Lip Liner",
            "Lip Stain",
            "Gloss",
            "Gift Sets",
          ],
        },
        {
          name: "Nails",
          items: [
            "Nail Polish",
            "Nail file",
            "Nail Tools",
            "Nail Polish Remover",
            "Nail Stickers",
            "Nails Tretment",
            "Base Coat & Top Coats",
            "Nail Kits",
            "Gift Sets",
          ],
        },
      ],
    },
    {
      category: "Hair Care",
      subCategories: [
        {
          name: "Bathing & Care",
          items: ["Shampoo", "Conditioner"],
        },
        {
          name: "Hair Dyes",
          items: [
            "Heena",
            "Hair Powder",
            "Hair Colors",
            "Temperary Hair Colors",
          ],
        },
        {
          name: "Hair Treatment",
          items: [
            "Hair Spray",
            "Hair Crystal",
            "Hair Cream",
            "Hair Oil",
            "Hair Ampoles",
            "Hair Serum",
          ],
        },
        {
          name: "Hair Accessories",
          items: [
            "Hair Brushes",
            "Hair Comb",
            "Hair Bib",
            "Hair scissors",
            "Hair Penny",
            "Hair tweezers",
          ],
        },
      ],
    },
    {
      category: "Mouth Care",
      subCategories: [
        {
          name: "Tooth Care",
          items: ["Toothpaste", "Tooth Brushes", "Toothpick", "Dental Floss"],
        },
        {
          name: "Gums Care",
          items: ["Rinse Mouth", "Water Jet"],
        },
        {
          name: "Mouth freshener",
          items: ["Mouth freshener", "Chewing Gums"],
        },
        {
          name: "Tooth Whitening",
          items: ["Whitning Teeth Mask"],
        },
        {
          name: "Lips Care",
          items: ["Lips Mouisturising"],
        },
      ],
    },

    {
      category: "Hands Care",
      subCategories: [
        {
          name: "Hand Moisturising",
          items: ["Moisturizing Gloves", "Hand Cream", "Hand Lotion"],
        },
        {
          name: "Nails Care",
          items: ["Nail Moisturising"],
        },
        {
          name: "Hand Treatment",
          items: ["Hand Relieves", "Hand Sweat Treatment"],
        },
      ],
    },
    {
      category: "Foots Care",
      subCategories: [
        {
          name: "Foot Moisturising",
          items: ["Foots Cream", "Moisturizing Gloves", "Foots Lotion"],
        },
        {
          name: "Nails Care",
          items: ["Nails scissors", "Nails skin scissors", "Nails File"],
        },
        {
          name: "Skin Exfoliators",
          items: ["Foots Scrub"],
        },
        {
          name: "Foots Care Tools",
          items: ["Foots Care Tools"],
        },
        {
          name: "Foot Treatment",
          items: ["Foot Relieves", "Foot Sweat Treatment"],
        },
        {
          name: "Foot Baths",
          items: ["Bath Effervesnt"],
        },
      ],
    },
    {
      category: "Mother & Baby Care",
      subCategories: [
        {
          name: "Diapers & Changing",
          items: ["Diapers", "Wet wipes", "Moisturising Cream"],
        },
        {
          name: "Mommy Care",
          items: ["Breast pumb", "Feminine Pads", "Breast Cover"],
        },
        {
          name: "Child Care",
          items: ["Baby Perfume"],
        },
        {
          name: "Baby Food & Tools",
          items: ["Baby Milk Bottels", "Milk Powder", "Feeding Equipments"],
        },
        {
          name: "Bathing & Care",
          items: [
            "Baby lotion",
            "Baby Shapoo",
            "Baby Oil",
            "Baby Wash",
            "Gift Sets",
            "Baby Powder",
          ],
        },
      ],
    },
    {
      category: "Accessories",
      subCategories: [
        {
          name: "Men Accessories",
          items: [
            "Shaving Razor",
            "Skin Suppliments",
            "Shaving Products",
            "After Shave",
            "Food Supplements + protiens",
            "Body Spray",
          ],
        },
        {
          name: "Women Accessories",
          items: ["Shaving Razor", "Souna Suit", "Disposable Brow Razor"],
        },
        {
          name: "Baby Accessories",
          items: [
            "Ear Ring",
            "cotton buds",
            "nasal aspirator",
            "Cooling Teether",
            "Baby Nail Scissors",
            "Bib",
            "Hair Brushes",
            "Buckle",
            "Baby Lofa",
            "Baby Pacifier",
          ],
        },
      ],
    },
    {
      category: "Perfumes",
      subCategories: [
        {
          name: "EAU DE Toilette (EDT)",
          items: ["Women Perfums", "Men Perfums", "UniSex Perfums"],
        },
        {
          name: "Eau DE Perfume",
          items: ["Women Perfums", "Men Perfums", "UniSex Perfums"],
        },
        {
          name: "Oriantel Perfume",
          items: ["Private Label", "Local Supplier"],
        },
        {
          name: "Gift Sets",
          items: ["Women Set", "Mens Set"],
        },
      ],
    },

    {
      category: "Medical Products",
      subCategories: [
        {
          name: "Measurement Machines",
          items: [
            "Pressure Devices",
            "Glucose Meters",
            "Body Weight Scale",
            "Thermometer",
          ],
        },
        {
          name: "Muscle Relaxation",
          items: ["Anti Inflamatory Gel +cream"],
        },
        {
          name: "Medical Devices",
          items: [
            "Wound plasters",
            "Medical Courset",
            "Pregnancy Test",
            "Suppliments",
            "Back Pain Patches",
            "First Aid Bag",
          ],
        },
      ],
    },

    {
      category: "Home Equipment",
      subCategories: [
        {
          name: "Antiseptics",
          items: [
            "Floor antiseptics",
            "Suppliments",
            "Spray antiseptics",
            "Surface antiseptics",
          ],
        },
        {
          name: "Fregrance",
          items: ["Home Fregrance", "Furnutre Fregrance"],
        },
        {
          name: "Battaries",
          items: ["Battaries"],
        },
        {
          name: "Washing",
          items: ["Washing Machine Products"],
        },
        {
          name: "Tissues",
          items: ["Perfumed Wipes", "Single use Tissue", "Wet Tissue"],
        },
        {
          name: "Sticks",
          items: ["wax wood Sticks", "Cotton Buds"],
        },
      ],
    },
    {
      category: "Electronic Devices",
      subCategories: [
        {
          name: "Hair Devices",
          items: ["Dryers & Stylers"],
        },
        {
          name: "Head Device",
          items: ["Heat Cap"],
        },
        {
          name: "Body Devices",
          items: ["Body Cleaning Devices", "Steam Devices", "Massage Devices"],
        },
        {
          name: "Facial Devices",
          items: ["Cutting + Remover"],
        },
        {
          name: "Foot Devices",
          items: ["Foot Bath"],
        },
        {
          name: "Waxing Machine",
          items: ["Waxing Pool"],
        },
      ],
    },
    // ... (Other categories)

    // ... other main categories
  ];
  return (
    <div className=" hidden md:inline bg-[#d9d7d7]">
      <Center>
        <div className="grid grid-cols-3  md:grid-flow-col gap-0 mt-4   mb-8">
        <Button
              radius="sm"
              size="sm"
              variant="light"
              color="default"
              className=" hover:bg-cyan-500 text-[10px] font-bold text-black"
              as={Link}
              href="/brands"
            >
              Brands
            </Button>

          {useCategory.map((category, index) => (
            <Tooltip
              key={index}
              showArrow
              placement="bottom"
              content={<Content subCategory={category.subCategories} />}
              classNames={{
                base: [
                  // arrow color
                  "min-w-[90%] ",
                  "before:bg-neutral-400 dark:before:bg-white ",
                ],
                content: [
                  " mx-4 mb-4",
                  "py-4 px-4 shadow-xl",
                  "text-black bg-gradient-to-br from-white to-neutral-100",
                ],
              }}
            >
              <Button
                radius="sm"
                size="sm"
                variant="light"
                color="secondary"
                className=" hover:bg-cyan-300 text-[10px] font-bold text-black"
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
