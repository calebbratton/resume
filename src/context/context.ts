import { Dispatch, SetStateAction, createContext } from "react";
import {AppWindow} from "@/types/main"

interface WindowContextType {
  windows: AppWindow;
  setWindows: Dispatch<SetStateAction<AppWindow>>
}

export const WindowContext = createContext<WindowContextType>({windows: {}, setWindows: () => {}});