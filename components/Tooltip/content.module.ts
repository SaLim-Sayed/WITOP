export const skincareProducts = [
    {
      category: "Moisturizers",
      subcategories: ["Face Moisturizers", "Neck Creams", "Night Creams", "Tinted Moisturizers", "Face Oils", "Face Mists & Essences"],
    },
    {
      category: "Face Treatments & Serums",
      subcategories: ["Face Serums", "Skincare Face Masks", "Face Sheet Masks", "Face Peels & Exfoliators"],
    },
    {
      category: "Face Wash & Facial Cleansers",
      subcategories: ["Cream Cleansers", "Gel Cleansers", "Foam Cleansers", "Face Wipes", "Makeup Removers", "Oil-Free Cleansers", "pH Balanced Cleansers", "Micellar Water"],
    },
    {
      category: "Face Toners",
      subcategories: ["Cleansing Brushes"],
    },
    {
      category: "Eye Care",
      subcategories: ["Eye Creams", "Eye Serums", "Eye Masks & Patches"],
    },
    {
      category: "Skin Type",
      subcategories: ["Skincare Products for Normal Skin", "Skincare Products for Dry Skin", "Skincare Products for Combination Skin", "Skincare Products for Oily Skin"],
    },
    {
      category: "Concerns",
      subcategories: ["Acne & Blemishes Treatments", "Anti-Aging Products", "Skincare Products for Sensitive Skin", "Skincare Products for Eczema", "Skincare Products for Hyperpigmentation", "Skincare Products for Rosacea", "Seborrheic Dermatitis Face Creams & Moisturizers"],
    },
    {
      category: "Top Ingredients",
      subcategories: ["Glycolic Acid", "Hyaluronic Acid", "Aloe Vera", "Vitamin C Skincare Products", "Skincare Cosmetics Retinol", "Salicylic Acid", "Urea"],
    },
  ];
  
 
  
  export default function useCategory() {
    return [
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
      // ... other main categories
    ];
    
  }
  
 
  