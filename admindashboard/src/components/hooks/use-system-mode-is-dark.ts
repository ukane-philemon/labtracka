import {useColorScheme} from "@mui/material/styles";

export function useSystemModeIsDark(): boolean {
  const {mode, systemMode} = useColorScheme();
  
  switch (mode) {
    case "dark": 
      return true
    case undefined:
    case 'light': 
      return false
    case 'system':
      switch (systemMode) {
        case "dark": 
          return true
        case 'light':
        case undefined:
          return  false
      }    
  }
}