"use client";
import { Dropdown } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";

interface DropdownProps {
  title: string;
  items: string[];
}

const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary: "bg-blue-500 hover:bg-blue-600 text-white font-bold",
    }
  }
};

export default function DropdownComponent(props: DropdownProps) {

  const { title } = props;
  const { items } = props;

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Dropdown label={title} color="primary">
        {items.map((item, index) => (
          <Dropdown.Item key={index} onClick={() => alert(item)}>{item}</Dropdown.Item>
        ))}
      </Dropdown>
    </Flowbite>
  );
}
