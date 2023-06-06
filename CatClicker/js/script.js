
import {model} from './model.js';

const catFunctions = {
  getClassCat() {
    return document.getElementsByClassName("cat")[0];
  },

  getClassCatDescription() {
    return document.getElementsByClassName("cat__description")[0];
  },

  getCatImageElement(catIndex) {
    const catImage = document.createElement("img");

    catImage.src = model.catInfo[catIndex].url;
    catImage.className = "cat__image";
    catImage.alt = model.catInfo[catIndex].name;

    return catImage;
  },

  getCatNameElement(catIndex) {
    const catName = document.createElement("cat__name");

    catName.className = "cat__name";
    catName.innerHTML = model.catInfo[catIndex].name;

    return catName;
  },

  getCatCountElement() {
    const catCount = document.createElement("div");
    catCount.id = "cat--count";
    catCount.innerHTML =
      "Clicked " + model.catInfo[model.currentCatIndex].count + " times";

    return catCount;
  },

  ImageName() {
    const classCatDescription = catFunctions.getClassCatDescription();
    const catName = catFunctions.getCatNameElement(model.currentCatIndex);

    classCatDescription.appendChild(catName);
  },

  FullImage() {
    const classCatDescription = catFunctions.getClassCatDescription();
    const catImage = catFunctions.getCatImageElement(model.currentCatIndex);

    catImage.addEventListener("click", function () {
      model.catInfo[model.currentCatIndex].count++;
      controller.modifyCatData();
    });

    classCatDescription.appendChild(catImage);
  },

  ImageCount() {
    const classCatDescription = catFunctions.getClassCatDescription();
    const catCount = catFunctions.getCatCountElement();

    classCatDescription.appendChild(catCount);
  }
};

const view = {
  leftSideBar() {
    for (let i = 0; i < model.numberOfCats; i++) {
      const classCat = catFunctions.getClassCat();

      const catImage = catFunctions.getCatImageElement(i);
      const catName = catFunctions.getCatNameElement(i);

      catImage.addEventListener("click", function () {
        model.currentCatIndex = i;
        controller.modifyCatData();
      });

      classCat.appendChild(catImage);
      classCat.appendChild(catName);
    }
  },

  rightSideBar() {
    catFunctions.ImageName(model.currentCatIndex);
    catFunctions.FullImage(model.currentCatIndex);
    catFunctions.ImageCount();
  }
};

const controller = {
  modifyCatData() {
    const classCatDescription = catFunctions.getClassCatDescription();
    const children = classCatDescription.children;

    children[0].innerHTML = model.catInfo[model.currentCatIndex].name;

    children[1].src = model.catInfo[model.currentCatIndex].url;
    children[1].alt = model.catInfo[model.currentCatIndex].name;

    children[2].innerHTML =
      "Clicked " + model.catInfo[model.currentCatIndex].count + " times";
  },

  init() {
    view.leftSideBar();
    view.rightSideBar();
  }
};

controller.init();
