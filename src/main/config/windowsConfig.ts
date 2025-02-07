import { IsUseSysTitle } from "./const";
import { BrowserWindowConstructorOptions } from "electron";

export const mainWindowConfig: BrowserWindowConstructorOptions = {
  height: 720,
  useContentSize: true,
  center: true,
  width: 1000,
  resizable: false,
  show: false,
  frame: IsUseSysTitle,
  webPreferences: {
    contextIsolation: false,
    nodeIntegration: true,
    webSecurity: false,
    // 如果是开发模式可以使用devTools
    devTools: process.env.NODE_ENV === "development",
    // 在macos中启用橡皮动画
    scrollBounce: process.platform === "darwin",
  },
};

export const otherWindowConfig: BrowserWindowConstructorOptions = {
  height: 600,
  useContentSize: true,
  width: 1140,
  autoHideMenuBar: true,
  minWidth: 842,
  frame: IsUseSysTitle,
  show: false,
  webPreferences: {
    contextIsolation: false,
    nodeIntegration: true,
    webSecurity: false,
    // 如果是开发模式可以使用devTools
    devTools: process.env.NODE_ENV === "development",
    // 在macos中启用橡皮动画
    scrollBounce: process.platform === "darwin",
  },
};
