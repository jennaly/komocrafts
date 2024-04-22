export const formatPrice = (price: string) =>
  Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    minimumFractionDigits: 2,
  }).format(parseInt(price, 10));

export const formatCategoryTitle = (title: string) =>
  title
    .split("-")
    .map((word) =>
      word
        .split("")
        .map((letter, index) => (index === 0 ? letter.toUpperCase() : letter))
        .join("")
    )
    .join(" ");
