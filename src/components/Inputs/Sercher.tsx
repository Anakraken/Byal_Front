import { useEffect, useRef, useState } from 'react';
import { Input } from '.';
import { SelectContainer, ItemList } from './InputStyles.styles';

type SearcherProps<T extends string | number> = {
  label: string;
  name: string;
  options: T[];
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setSelected: React.Dispatch<React.SetStateAction<T>>;
  disabledOptions?: T[];
};

export const SearchInput = <T extends string | number>({
  label,
  name,
  options,
  value,
  onChange,
  setSelected,
  disabledOptions,
}: SearcherProps<T>) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowOptions(false);
        setHighlightedIndex(-1);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showOptions && filteredOptions.length > 0) {
      setShowOptions(true);
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex(prev => (prev + 1) % filteredOptions.length);
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex(prev => (prev - 1 + filteredOptions.length) % filteredOptions.length);
    }

    if (e.key === 'Enter' && highlightedIndex >= 0) {
      const selected = filteredOptions[highlightedIndex];
      handleClickOption(selected);
    }
  };

  const handleClickOption = (item: T) => {
    setSearchTerm(item.toString());
    setShowOptions(false);
    setHighlightedIndex(-1);
    setSelected(item);
  };

  useEffect(() => {
    setSearchTerm(value.toString());
  }, [value]);

  const filteredOptions = options.filter(option =>
    option.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SelectContainer
      ref={containerRef}
      border={filteredOptions.length > 0 ? 'true' : 'false'}
    >
      <Input
        type="text"
        label={label}
        name={name}
        value={searchTerm}
        onChange={(e) => {
          const val = e.target.value;
          setSearchTerm(val);
          onChange(e);
          setShowOptions(true);
          setHighlightedIndex(-1);
        }}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        onFocus={() => {
          setShowOptions(true);
        }}
      />

      {showOptions && filteredOptions.length > 0 && (
        <ul className="suggestion_list">
          {filteredOptions.map((item, idx) => {
            const isDisabled = disabledOptions?.includes(item);
            return (
              <ItemList
                key={idx}
                onClick={() => {
                  if (!isDisabled) handleClickOption(item);
                }}
                highlight={idx === highlightedIndex ? 'true' : 'false'}
                isdisabled={isDisabled ? 'true' : 'false'}
              >
                {item}
              </ItemList>
            );
          })}
        </ul>
      )}
    </SelectContainer>
  );
};
