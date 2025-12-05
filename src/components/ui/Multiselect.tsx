import React, {useState, useRef, useEffect} from 'react';
import {CaretDownFill} from "react-bootstrap-icons";

interface MultiSelectDropdownProps {
    name: string;
    value: string[];
    onChange: (selected: string[]) => void;
    required?: boolean;
    placeholder?: string;
    options?: string[];
}

const Multiselect: React.FC<MultiSelectDropdownProps> = (
    {
        name,
        value = [],
        onChange,
        required = false,
        placeholder = "Selecciona una opción",
        options = ["None"]
    }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelect = (option: string) => {
        const newValue = value.includes(option)
            ? value.filter(item => item !== option)
            : [...value, option];

        onChange(newValue);
    };

    const removeOption = (option: string, e: React.MouseEvent) => {
        e.stopPropagation();
        onChange(value.filter(item => item !== option));
    };

    const clearAll = (e: React.MouseEvent) => {
        e.stopPropagation();
        onChange([]);
    };

    return (
        <div className="relative w-full" ref={dropdownRef}>
            <input
                type="hidden"
                name={name}
                value={value.join(', ')}
                required={required}
            />
            <div
                className={`w-full relative rounded-xl bg-black/70 border-solid border-2 ${
                    isOpen
                        ? 'border-marabunta-red text-marabunta-red'
                        : 'border-neutral-300/40 text-neutral-200'
                } focus:outline-none transition duration-300 ease-in-out cursor-pointer`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex flex-wrap gap-2 p-2">
                    {value.length > 0 ? (
                        <>
                            {value.map(option => (
                                <div
                                    key={option}
                                    className="inline-flex items-center gap-1 bg-marabunta-red/20 text-marabunta-red px-3 py-1 rounded-full text-sm border border-marabunta-red/30"
                                >
                                    <span>{option}</span>
                                    <button
                                        type="button"
                                        onClick={(e) => removeOption(option, e)}
                                        className="hover:text-white focus:outline-none text-marabunta-red hover:bg-marabunta-red/30 rounded-full w-5 h-5 flex items-center justify-center"
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={clearAll}
                                className="text-neutral-400 hover:text-neutral-200 text-sm px-2 py-1"
                            >
                                Limpiar
                            </button>
                        </>
                    ) : (
                        <span className="text-neutral-500 p-1">{placeholder}</span>
                    )}
                </div>

                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <CaretDownFill className={`w-5 h-5 transition-transform duration-200 ${isOpen ?
                        'rotate-180 lg:rotate-90 text-marabunta-red' :
                        'text-neutral-500 lg:rotate-[270deg]'
                    }`}/>
                </div>
            </div>

            {isOpen && (
                <div
                    className="absolute lg:-top-[120%] lg:-right-[105%] !z-50 w-full mt-1 rounded-xl bg-black/95 border-2 border-marabunta-red shadow-lg">
                    <div className="p-2 border-b border-neutral-700">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-3 py-2 bg-black/50 border border-neutral-700 rounded-lg text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-marabunta-red focus:text-marabunta-red text-sm"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                    <div className="max-h-60 overflow-y-auto">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option) => {
                                const isSelected = value.includes(option);
                                return (
                                    <div
                                        key={option}
                                        className={`px-4 py-3 cursor-pointer transition-colors duration-150 flex items-center justify-between hover:bg-marabunta-red/10 ${
                                            isSelected
                                                ? 'bg-marabunta-red/20 text-marabunta-red'
                                                : 'text-neutral-300 hover:text-marabunta-red'
                                        }`}
                                        onClick={() => handleSelect(option)}
                                    >
                                        <span className="text-sm">{option}</span>
                                        {isSelected && (
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}
                                                      d="M5 13l4 4L19 7"/>
                                            </svg>
                                        )}
                                    </div>
                                );
                            })
                        ) : (
                            <div className="px-4 py-3 text-neutral-500 text-sm text-center">
                                No se encontraron resultados
                            </div>
                        )}
                    </div>

                    <div className="px-4 py-2 border-t border-neutral-700 bg-black/50 text-sm text-neutral-400">
                        {value.length} seleccionado{value.length !== 1 ? 's' : ''}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Multiselect;