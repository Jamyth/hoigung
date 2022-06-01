type StringBasedEnum<EnumMap> = { [P in keyof EnumMap]: EnumMap[P] & string };
type StringBasedEnumValue<EnumMap> = EnumMap extends StringBasedEnum<EnumMap> ? EnumMap[keyof EnumMap] : never;

function toArray<EnumMap extends StringBasedEnum<EnumMap>>(enumType: EnumMap): StringBasedEnumValue<EnumMap>[] {
    return Object.values(enumType);
}

function isValid<EnumMap extends StringBasedEnum<EnumMap>>(enumMap: EnumMap, value: string) {
    return toArray(enumMap).includes(value as any);
}

export const EnumUtil = Object.freeze({
    toArray,
    isValid,
});
