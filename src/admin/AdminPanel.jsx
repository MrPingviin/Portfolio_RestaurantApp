import "./AdminPanel.css";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { BsFillCartCheckFill, BsSearch } from "react-icons/bs";
import { ImAddressBook } from "react-icons/im";
import { IoMdNotifications } from "react-icons/io";
import { AiFillPlusCircle } from "react-icons/ai";
import { createRoot } from "react-dom/client";
import { createElement, useEffect, useState } from "react";

const AdminPanel = () => {
  const [currentCategory, setCurrentCategory] = useState("Burgers");
  const dataContainer = [];
  const jsonDataContainer = [];

  const enableSaveButton = () => {
    const target = document.querySelector("#savebutton-container");
    const saveButton = (
      <div className="admin-main-content-main-navbar-option">
        <button id="admin-main-savechanges-button" onClick={postUpdate}>
          Save Changes
        </button>
      </div>
    );

    const root = createRoot(target);
    root.render(saveButton);
  };

  const disableSaveButton = () => {
    const target = document.querySelector("#admin-main-savechanges-button");

    target.style.display = "none";
  };

  /*   useEffect(() => {
    setCurrentCategory("Chickens")
   }, []) */

  const menuCategories = [];

  const getMenuCategories = () => {
    fetch("http://localhost:3000/api/")
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i] != "Bestsellers") {
            menuCategories.push(data[i]);
          }
        }
      });
  };

  getMenuCategories();

  const fillCategoriesSelector = (event) => {
    const filteredCategories = [];

    const closeButton = (
      <li
        onClick={(event) =>
          (event.target.parentElement.parentElement.style.display = "none")
        }
      >
        {" "}
        <span>Close Menu</span>{" "}
      </li>
    );
    filteredCategories.push(closeButton);

    for (let i = 0; i < menuCategories.length; i++) {
      if (menuCategories[i] != event.target.textContent) {
        const item = (
          <li onClick={setTheCurrentCategory} className="clickable">
            {menuCategories[i]}
          </li>
        );
        filteredCategories.push(item);
      }
    }

    const target = document.querySelector(
      "#admin-main-content-main-navbar-category-selector"
    );
    const root = createRoot(target);
    root.render(filteredCategories);
    target.style.display = "flex";
  };

  const setTheCurrentCategory = (event) => {
    const categoryButton = document.querySelector(
      "#admin-main-content-main-navbar-option-current-category"
    );
    categoryButton.textContent = event.target.textContent;
    setCurrentCategory(event.target.textContent);
    event.target.parentNode.style.display = "none";
    disableSaveButton();
  };

  const getMenuItems = () => {
    fetch(`http://localhost:3000/api/${currentCategory}`)
      .then((response) => response.json())
      .then((data) => {
        jsonDataContainer.push(data);
        for (let i = 0; i < data.length; i++) {
          const listItem = (
            <li>
              <div>
                <img
                  src={data[i].img_large}
                  alt={data[i].alt_large}
                  onClick={uploadImage}
                  className="clickable"
                />
              </div>
              <div>
                <span onClick={editItem} className="clickable">
                  {data[i].name}
                </span>
              </div>
              <span>
                <span className="highlighted">Price:</span>{" "}
                <span>
                  <span onClick={editItem} className="clickable">
                    {data[i].price}
                  </span>
                </span>
              </span>

              <span>
                <span className="highlighted">Description:</span>{" "}
                <span>
                  <span onClick={editItem} className="clickable">
                    {data[i].description}
                  </span>
                </span>
              </span>
            </li>
          );

          dataContainer.push(listItem);
          const target = document.querySelector(
            "#admin-main-content-main-food-list"
          );
          const root = createRoot(target);
          root.render(dataContainer);
        }
      });
  };

  getMenuItems();

  const uploadImage = (e) => {
    const savedsrc = e.target.src;
    const savedalt = e.target.alt;

    const uploadInput = (
      <div className="uploadSection">
        <input type="file" placeholder="Upload"></input>
        <button
          onClick={() => loadCachedImage(event, savedsrc, savedalt)}
          className="cancelButton"
        >
          Cancel
        </button>
      </div>
    );

    const root = createRoot(e.target.parentElement);
    root.render(uploadInput);
  };

  const loadCachedImage = (event, src, alt) => {
    const prevImage = (
      <img
        src={src}
        alt={alt}
        onClick={uploadImage}
        className="clickable"
      ></img>
    );
    const root = createRoot(event.target.parentElement);
    event.target.remove();
    root.render(prevImage);
  };

  const editItem = (event) => {
    const editInput = (
      <input
        type="text"
        className="editInput"
        placeholder={event.target.textContent}
        onClick={editInputListenerSetter}
      ></input>
    );

    const root = createRoot(event.target.parentElement);
    root.render(editInput);
  };

  const editInputListenerSetter = (event) => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    event.target.addEventListener("keydown", tempSaveEditedItemString);
    /*  for (let num of numbers) {
      if (event.target.placeholder.includes(num)) {
        event.target.addEventListener("keydown", tempSaveEditedItemNumber);
      } else {
        event.target.addEventListener("keydown", tempSaveEditedItemString);
      }
    } */
  };

  const tempSaveEditedItemNumber = (event) => {
    switch (event.key) {
      case "0":
        break;
      case "1":
        break;
      case "2":
        break;
      case "3":
        break;
      case "4":
        break;
      case "5":
        break;
      case "6":
        break;
      case "7":
        break;
      case "8":
        break;
      case "9":
        break;
      case ".":
        break;
      default:
        setTimeout(() => {
          event.target.value = event.target.value.slice(
            0,
            event.target.value.length - 1
          );
        }, 1);
    }
  };

  const tempSaveEditedItemString = (event) => {
    if (event.key === "Enter") {
      if (event.target.value != 0) {
        const newValue = event.target.value;

        const newSpan = (
          <span className="clickable" onClick={editItem}>
            {newValue}
          </span>
        );

        const root = createRoot(event.target.parentElement);
        root.render(newSpan);

        enableSaveButton();
      } else {
        alert("The input needs to be at least one character long.");
      }
    }

    if (event.key === "Escape") {
      const oldSpan = (
        <span className="clickable" onClick={editItem}>
          {event.target.placeholder}
        </span>
      );
      const root = createRoot(event.target.parentElement);
      root.render(oldSpan);
    }
  };

  const postUpdate = async (event) => {
    event.target.remove();
    const actualCategory = document.querySelector(
      "#admin-main-content-main-navbar-option-current-category"
    ).textContent;
    const dataToSend = [];
    const list = document.querySelector("#admin-main-content-main-food-list");
    const actualType = jsonDataContainer[0][0].type.toLowerCase();
    const typeToSearch = actualType.toLowerCase() + "s";

    if (list.children[0].children[0].children[0].className == "uploadSection") {
      const mainImage =
        list.children[0].children[0].children[0].children[0].tagName ===
        "INPUT";
    } else {
      console.log("Nem input.");
    }

    console.log(actualType);

    let maintype = "";
    let itemtype = "";

    if (actualType == "colddrink" || actualType == "tea") {
      maintype = "drinks";
      itemtype = "drink";
    } else {
      maintype = "dishes";
      itemtype = "dish";
    }

    for (let i = 0; i < dataContainer.length; i++) {
      const dataToPush = {
        img_large: `http://localhost:5173/img/${maintype}/${typeToSearch}/${itemtype}-${actualType}.webp`,
        alt_large: `A chicken dish.`,
        img_small_first: `http://localhost:5173/img/${maintype}/${typeToSearch}/${itemtype}-${actualType}.webp`,
        alt_small_first: `#`,
        img_small_second: `http://localhost:5173/img/${maintype}/${typeToSearch}/${itemtype}-${actualType}.webp`,
        alt_small_second: `#`,
        img_small_third: `http://localhost:5173/img/${maintype}/${typeToSearch}/${itemtype}-${actualType}.webp`,
        alt_small_third: `#`,
        name: `${list.children[i].children[1].children[0].textContent}`,
        description: `${list.children[i].children[3].children[1].textContent}`,
        price: `${list.children[i].children[2].children[1].textContent}`,
        reviews: `${jsonDataContainer[0][i].reviews}`,
        rating: `${jsonDataContainer[0][i].rating}`,
        sold: `${jsonDataContainer[0][i].sold}`,
        type: `${jsonDataContainer[0][i].type}`,
      };
      dataToSend.push(dataToPush);
    }

    console.log(dataToSend);

    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    };

    await fetch(`http://localhost:3000/api/upload/${actualCategory}`, options);
  };

  return (
    <div id="admin-panel" className="page">
      <div id="admin-sidebar">
        <div id="admin-sidebar-main-title">
          <h1>
            Food <span className="highlighted">Factory</span>
          </h1>
          <h2>Admin Panel</h2>
        </div>

        <div id="admin-sidebar-main">
          <ul id="admin-sidebar-options">
            <li onClick={() => alert("WIP!")}>
              <MdOutlineRestaurantMenu /> Menu
            </li>
            <li onClick={() => alert("WIP!")}>
              <BsFillCartCheckFill /> Orders
            </li>
            <li onClick={() => alert("WIP!")}>
              <ImAddressBook /> Bookings
            </li>
          </ul>
        </div>
      </div>

      <div id="admin-main">
        <div id="admin-main-navbar">
          <div id="admin-main-navbar-content">
            <div id="admin-main-navbar-content-search-section">
              <BsSearch />
              <input
                type="text"
                id="admin-main-navbar-searchbar"
                placeholder="Search.."
              />
            </div>
            <div id="admin-main-navbar-content-user">
              <IoMdNotifications />
              <span id="profile-name">User</span>
            </div>
          </div>
        </div>

        <div id="admin-main-content">
          <div id="admin-main-content-optionsbar">
            <div id="admin-main-content-optionsbar-content">
              <button onClick={() => alert("WIP!")}>
                <AiFillPlusCircle /> New Category
              </button>
              <button>
                <AiFillPlusCircle /> New Dish
              </button>
            </div>
          </div>

          <div id="admin-main-content-main">
            <div id="admin-main-content-main-navbar">
              <div className="admin-main-content-main-navbar-option">
                <span>Category:</span>
                <div id="admin-main-content-main-navbar-category-section">
                  <button
                    id="admin-main-content-main-navbar-option-current-category"
                    onClick={fillCategoriesSelector}
                  >
                    Burgers
                  </button>
                  <ul id="admin-main-content-main-navbar-category-selector"></ul>
                </div>
              </div>

              <div
                className="admin-main-content-main-navbar-option"
                onClick={() => alert("WIP!")}
              >
                <span>Filter:</span>
                <button>None</button>
              </div>

              <div id="savebutton-container"></div>
            </div>

            <div id="admin-main-content-main-food-list-section">
              <ul id="admin-main-content-main-food-list"></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
