import smartphones from "../asset/imeges/BestChoiceImeges/Smartphones.png";
import laptops from "src/asset/imeges/BestChoiceImeges/Laptops.png";
import tablets from "src/asset/imeges/BestChoiceImeges/Tablets.png";
import smartWatches from "src/asset/imeges/BestChoiceImeges/SmartWatches.png";
import consoles from "src/asset/imeges/BestChoiceImeges/Consoles.png";
import headphones from "src/asset/imeges/BestChoiceImeges/Headphones.png";
import portableColumns from "src/asset/imeges/BestChoiceImeges/PortableColumns.png";
import accessories from "src/asset/imeges/BestChoiceImeges/Accessories.png";
import {CategoriesType} from "./types";

type StateType = {
    bestChoiceCategories:CategoriesType[]
}

export const state:StateType  = {
    bestChoiceCategories : [
        {id: 1, title: 'smartphones', image: smartphones, path: 'smartphones'},
        {id: 2, title: 'laptops', image: laptops, path: 'laptops'},
        {id: 3, title: 'tablets', image: tablets, path: 'tablets'},
        {id: 4, title: 'smart watches', image: smartWatches, path: 'smartWatches'},
        {id: 5, title: 'consoles', image: consoles, path: 'consoles'},
        {id: 6, title: 'headphones', image: headphones, path: 'headphones'},
        {id: 7, title: 'portable columns', image: portableColumns, path: 'portableColumns'},
        {id: 8, title: 'accessories', image: accessories, path: 'accessories'},
    ]
}