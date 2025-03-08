import { FC, useState } from "react";
import { View, Text } from "react-native";
import { Button, DropList, IconError, IconRefresh } from "@/shared";
import { DropItem, DropSelectItem } from "@/entities";
import { dropListItems, NavBarProps } from "../model";

export const NavBar: FC<NavBarProps> = ({
  onSelectItem,
  hasError,
  isLoading,
  refetch,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View className="flex lg:flex-nowrap flex-wrap lg:justify-between flex-wrap pt-[42px] pb-[20px]">
      <View className="flex justify-center flex-wrap gap-[24px] w-full lg:w-auto lg:flex-nowrap">
        <Text className="font-tactic text-[32px] font-semibold italic">
          Match Tracker
        </Text>

        <DropList
          items={dropListItems}
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          onSelectItem={(item) => onSelectItem(item.value)}
          renderSelectItem={(item) => (
            <DropSelectItem label={item.name} isOpen={isOpen} />
          )}
          renderItem={(item, isSelect) => (
            <DropItem label={item.name} isSelect={isSelect} />
          )}
          className="lg:w-[170px] w-full"
          classNameList="mt-[8px] rounded-sm"
        />
      </View>
      <View className="inline-flex w-full lg:w-auto lg:gap-[12px] lg:pt-0 pt-[10px]">
        {hasError && (
          <View className="bg-[#0F1318] lg:flex hidden gap-[10px] rounded-sm items-center px-[24px]">
            <IconError />
            <Text className="font-inter text-lg">
              Ошибка: не удалось загрузить информацию
            </Text>
          </View>
        )}
        <Button
          className="w-full lg:w-auto"
          disabled={isLoading}
          onPress={refetch}
        >
          <Text>Обновить</Text>
          <IconRefresh />
        </Button>
      </View>
    </View>
  );
};
