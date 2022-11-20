import "./AdminPanel.css";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { BsFillCartCheckFill, BsSearch } from "react-icons/bs";
import { ImAddressBook } from "react-icons/im";
import { IoMdNotifications } from "react-icons/io";
import { AiFillPlusCircle } from "react-icons/ai";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";

function AdminPanel() {
  const [currentCategory, setCurrentCategory] = useState("Burgers");

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
  };

  function getMenuItems() {
    fetch(`http://localhost:3000/api/${currentCategory}`)
      .then((response) => response.json())
      .then((data) => {
        const dataContainer = [];
        for (let i = 0; i < data.length; i++) {
          const listItem = (
            <li>
              <img src={data[i].img} alt={data[i].alt} />
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
  }

  getMenuItems();

  function editItem(event) {
    const editInput = (
      <input
        type="text"
        className="editInput"
        placeholder={event.target.textContent}
      ></input>
    );
    const root = createRoot(event.target.parentElement);
    root.render(editInput);
    event.target.remove();
  }

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
            <li>
              <a href="#">
                <MdOutlineRestaurantMenu /> Menu
              </a>
            </li>
            <li>
              <a href="#">
                <BsFillCartCheckFill /> Orders
              </a>
            </li>
            <li>
              <a href="#">
                <ImAddressBook /> Bookings
              </a>
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
              <button>
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
            </div>

            <div id="admin-main-content-main-food-list-section">
              <ul id="admin-main-content-main-food-list"></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
