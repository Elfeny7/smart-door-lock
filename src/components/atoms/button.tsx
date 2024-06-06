"use client";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import { Button} from "flowbite-react";

interface ButtonProps {
  text: string;
  size?: string;
  color?: string;
  link?: string;
  door?: any;
  user?: any;
  onClick?: any;
}

const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary: "bg-blue-500 hover:bg-blue-600 text-white font-bold",
      greenFill: "bg-green-500 hover:bg-green-600 text-white font-bold",
      redFill: "bg-red-600 hover:bg-red-800 text-white font-bold",
    },
    size: {
      door: "px-20 py-2 ",
      back: "px-2.5 pt-1 pb-1.5"
    }
  },
};

export default function ButtonComponent(props: ButtonProps) {
  const { text, size, color, link } = props;

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Button onClick={() => { }} color={color} size={size} href={link}>{text}</Button>
    </Flowbite>
  );
}

export function ButtonCardComponent(props: ButtonProps) {
  const { text, size, color, link } = props;

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Button onClick={() => { }} color={color} size={size} href={link}>{text}</Button>
    </Flowbite>
  );
}

export function ButtonModalComponent(props: ButtonProps) {
  const { text, color, onClick } = props;

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Button onClick={onClick} color={color}>{text}</Button>
    </Flowbite>
  );
}

export function ButtonFormComponent(props: ButtonProps) {
  const { text, color, link, onClick } = props;

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Button onClick={onClick} color={color} href={link} type="submit">{text}</Button>
    </Flowbite>
  );
}
