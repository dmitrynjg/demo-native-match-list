import { FC, useState } from 'react';
import { View, Text } from 'react-native';

import { dropListItems, NavBarProps } from '../model';

import { DropItem, DropSelectItem } from '@/entities';
import { Button, DropList, IconError, IconLogo, IconRefresh } from '@/shared';

export const NavBar: FC<NavBarProps> = ({ onSelectItem, hasError, isLoading, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View className="flex flex-1 flex-wrap pb-[20px] pt-[42px] lg:flex-row lg:flex-nowrap lg:justify-between">
      <View className="flex w-full flex-wrap justify-center gap-[24px] lg:w-[1/2] lg:flex-row lg:flex-nowrap lg:justify-start">
        <View className="justify-center items-center">
          <IconLogo />
        </View>

        <DropList
          items={dropListItems}
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          onSelectItem={(item) => onSelectItem(item.value)}
          renderSelectItem={(item, onShowList) => (
            <DropSelectItem label={item.name} isOpen={isOpen} onPress={onShowList} />
          )}
          renderItem={(item, isSelect) => <DropItem label={item.name} isSelect={isSelect} />}
          className="w-full lg:w-[170px]"
          classNameList="mt-[8px] rounded-sm"
        />
      </View>
      <View className="flex w-full flex-1 flex-row pt-[10px] lg:justify-end lg:gap-[12px] lg:pt-0">
        {hasError && (
          <View className="hidden items-center gap-[10px] rounded-sm bg-[#0F1318] px-[24px] xl:flex xl:flex-row">
            <IconError />
            <Text className="font-inter text-lg text-white">
              Ошибка: не удалось загрузить информацию
            </Text>
          </View>
        )}
        <Button
          className="w-full lg:max-w-[204px]"
          disabled={isLoading}
          onPress={refetch}
          text="Обновить">
          <IconRefresh />
        </Button>
      </View>
    </View>
  );
};
