import React, { useRef, useEffect } from 'react';

interface ListProps {
  items: any[];
  height: number;
  itemHeight: number;
  renderItem: (item: any) => React.ReactNode;
}

const List: React.FC<ListProps> = ({ items, height, itemHeight, renderItem }) => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current) {
      const handleScroll = () => {
        const { scrollTop, offsetHeight } = listRef.current;
        const startIndex = Math.floor(scrollTop / itemHeight);
        const endIndex = Math.ceil((scrollTop + offsetHeight) / itemHeight);
        console.log(`Rendering items ${startIndex} to ${endIndex}`);
      };

      listRef.current.addEventListener('scroll', handleScroll);
      return () => listRef.current.removeEventListener('scroll', handleScroll);
    }
  }, [itemHeight]);

  return (
    <div ref={listRef} style={{ height, overflow: 'auto' }}>
      {items.slice(0, 20).map((item, index) => (
        <div key={item.id} style={{ height: itemHeight }}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
};

export default List;
