export default {
    isBlank: (value: string) => value === "" || undefined === value || value.trim().length === 0,
    isEmpty: (value: string) => value === "" && undefined !== value && value.trim().length === 0
}