import toast from "react-hot-toast";

const getLocalStorage = () => {
  const localStorageData = localStorage.getItem("localStorageData");
  if (localStorageData) {
    const allLocalStorageData = JSON.parse(localStorageData);

    return allLocalStorageData;
  } else {
    return [];
  }
};

const addToCard = (product) => {
  const addLocalStorage = getLocalStorage();
  addLocalStorage.push(product);
  localStorage.setItem("localStorageData", JSON.stringify(addLocalStorage));
  toast.success("This Gadget is Successfully added!");
};

const addToWishList = (product) => {
  const addLocalStorage = getLocalStorage();
  const isExist = addLocalStorage.find(
    (item) => item.product_id == product.product_id
  );
  if (isExist) {
    return toast.error("This Gadget is already added!");
  }
  addLocalStorage.push(product);
  localStorage.setItem("localStorageData", JSON.stringify(addLocalStorage));
  toast.success("This Gadget is Successfully added to your WishList!");
};

export { addToCard, getLocalStorage, addToWishList };
