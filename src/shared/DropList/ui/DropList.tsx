import { useState, useRef, useEffect } from 'react';
import { Pressable, View, Text } from 'react-native';

import { DropListProps } from '../model';

export const DropList = <Item,>({
  items,
  renderItem,
  renderSelectItem,
  onSelectItem,
  isOpen,
  className,
  classNameList,
  onOpenChange,
}: DropListProps<Item>) => {
  const [selectItem, setSelectItem] = useState<{
    item: Item;
    index: number;
  } | null>(null);

  const containerRef = useRef<View>(null);

  const onToggleOpen = () => {
    onOpenChange?.(!isOpen);
  };

  const onCloseList = () => {
    onOpenChange?.(false);
  };

  useEffect(() => {
    if (items) {
      setSelectItem(null);
    }
  }, [setSelectItem, items]);

  return (
    <View ref={containerRef} className={`relative ${className}`}>
      {selectItem?.item ? (
        renderSelectItem(selectItem.item, onToggleOpen)
      ) : items?.length > 0 ? (
        renderSelectItem(items[0], onToggleOpen)
      ) : (
        <Text>Ничего не найдено</Text>
      )}

      {isOpen && (
        <View className={`absolute left-0 right-0 top-full z-[1000] ${classNameList}`}>
          <View className="max-h-[204px]">
            {items.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => {
                  if (!(selectItem ? index === selectItem?.index : index === 0)) {
                    onSelectItem(item);
                    setSelectItem({ item, index });
                    onCloseList();
                  }
                }}
                className="z-[1000] hover:cursor-pointer">
                {renderItem(item, selectItem ? index === selectItem?.index : index === 0, index)}
              </Pressable>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

DropList.displayName = 'DropList';
