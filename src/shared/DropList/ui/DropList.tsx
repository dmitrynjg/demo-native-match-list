import { useState, useRef, useEffect } from "react";
import { DropListProps } from "../model";
import { Pressable, View, Text } from "react-native";

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
      <Pressable onPress={onToggleOpen} className="cursor-pointer">
        {selectItem?.item ? (
          renderSelectItem(selectItem.item)
        ) : items?.length > 0 ? (
          renderSelectItem(items[0])
        ) : (
          <Text>Ничего не найдено</Text>
        )}
      </Pressable>

      {isOpen && (
        <View
          className={`absolute top-full left-0 right-0 z-50 ${classNameList}`}
        >
          <View className="overflow-y-auto max-h-[204px]">
            {items.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => {
                  onSelectItem(item);
                  setSelectItem({ item, index });
                  onCloseList();
                }}
                className="hover:cursor-pointer"
              >
                {renderItem(
                  item,
                  selectItem ? index === selectItem?.index : index === 0,
                  index
                )}
              </Pressable>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

DropList.displayName = "DropList";
