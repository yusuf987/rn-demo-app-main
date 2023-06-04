import { RootStackParamList } from "../stack";

type screens = {
    LIST_SCREEN:keyof RootStackParamList,
    ITEM_SCREEN:keyof RootStackParamList
}

export const SCREEN_NAME:screens = {
    LIST_SCREEN : "ListScreen",
    ITEM_SCREEN : "ItemScreen",
}

