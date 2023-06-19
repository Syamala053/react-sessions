import { TPlant } from "./App";

export type Action =
  | { type: "add"; plant: TPlant }
  | { type: "edit"; plant: TPlant }
  | { type: "delete"; id: number }
  | { type: "get" };

export function plantReducer(plants: TPlant[], action: Action) {
  switch (action.type) {
    case "add": {
      return [...plants, action.plant];
    }
    case "edit": {
      return plants.map((plant) => {
        if (plant.id === action.plant.id) {
          return action.plant;
        } else {
          return plant;
        }
      });
    }
    case "delete": {
      return plants.filter((plant) => plant.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
