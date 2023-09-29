export const toDictionary = <T extends { id: string }> (items: T[]): Record<string, T> => {
    return items.reduce((acc, item) => ({ ...acc, [item.id]: item }), {}) 
}