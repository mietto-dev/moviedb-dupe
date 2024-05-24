import { addons } from "@storybook/manager-api";
import MovieDbTheme from "./MovieDBTheme";

addons.setConfig({
  theme: MovieDbTheme,
});
