export const HighlightsType = {
    _id: Number,
    _base: "",
    title: "",
    name: "",
    image: "",
    color: "",
    buttonTitle: "",
  }

  export const CategoryProps = {
    _id: Number,
    image: "",
    name: "",
    _base: "",
    description: "",
  }
  
  export const ProductProps = {
    _id: Number,
    _base: "",
    reviews: Number,
    rating: Number,
    quantity: Number,
    overView: "",
    name: "",
    isStock: Boolean,
    isNew: Boolean,
    images: [""],
    discountedPrice: Number,
    regularPrice: Number,
    description: "",
    colors: [""],
    category: "",
    brand: "",
  }
  
  export const BlogProps = {
    _id: Number,
    image: "",
    title: "",
    description: "",
    _base: "",
  }
  
  export const UserTypes = {
    currentUser: {
      firstName: "",
      lastName: "",
      email: "",
      avatar: "",
      id: "",
    },
  }
  
  export const OrderTypes = {
    orderItems: [ProductProps],
    paymentId: "",
    paymentMethod: "",
    userEmail: "",
  }