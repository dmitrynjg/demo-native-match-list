import { FC, useState } from 'react';
import { View, Text } from 'react-native';
import { Button, DropList, IconError, IconRefresh } from '@/shared';
import { DropItem, DropSelectItem } from '@/entities';
import { dropListItems, NavBarProps } from '../model';

export const NavBar: FC<NavBarProps> = ({ onSelectItem, hasError, isLoading, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View className="flex flex-1 flex-wrap pb-[20px] pt-[42px] lg:flex-nowrap lg:justify-between">
      <View className="flex w-full flex-wrap justify-center gap-[24px] lg:w-auto lg:flex-nowrap">
        <Text className="font-tactic text-center text-[32px] font-semibold italic text-white">
          Match Tracker
        </Text>

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
      <View className="inline-flex w-full pt-[10px] lg:w-auto lg:gap-[12px] lg:pt-0">
        {hasError && (
          <View className="hidden items-center gap-[10px] rounded-sm bg-[#0F1318] px-[24px] lg:flex">
            <IconError />
            <Text className="font-inter text-lg">Ошибка: не удалось загрузить информацию</Text>
          </View>
        )}
        <Button className="w-full lg:w-auto" disabled={isLoading} onPress={refetch} text="Обновить">
          <IconRefresh />
        </Button>
      </View>
    </View>
  );
};
