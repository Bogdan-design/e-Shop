import smartphones from "asset/imeges/BestChoiceImeges/smartphones.png";
import laptops from "asset/imeges/BestChoiceImeges/laptops.png";
import tablets from "asset/imeges/BestChoiceImeges/tablets.png";
import smartWatches from "asset/imeges/BestChoiceImeges/smartWatches.png";
import consoles from "asset/imeges/BestChoiceImeges/consoles.png";
import headphones from "asset/imeges/BestChoiceImeges/headphones.png";
import portableColumns from "asset/imeges/BestChoiceImeges/portableColumns.png";
import accessories from "asset/imeges/BestChoiceImeges/accessories.png";
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