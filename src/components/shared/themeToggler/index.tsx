import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { Switch } from "@nextui-org/react";
import { useTheme } from "../../../hooks/useTheme";

export default function ThemeToggler() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Switch
      isSelected={theme === "dark" ? true : false}
      onChange={toggleTheme}
      size="sm"
      color="default"
      startContent={<CiSun />}
      endContent={<FaMoon />}
    />
  );
}
