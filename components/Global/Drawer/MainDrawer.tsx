"use client";
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import NavbarMobile from "../Layout/NavbarMobile";
import { useTranslations } from "next-intl";

interface ModalConfig {
  placement: any;
  onClose: () => void;
  isOpen: boolean;
}
export default function MainDrawer({
  placement,
  onClose,
  isOpen,
}: ModalConfig) {
  const translate = useTranslations("Globals");
  return (
    <div>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">{translate("Categories")}</DrawerHeader>
          <DrawerBody className=" list-none mb-2">
            <NavbarMobile />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
